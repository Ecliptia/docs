// commands/queue.js
const { EmbedBuilder } = require('discord.js');

module.exports = {
   name: 'queue',
   description: 'Show the current queue',
   execute(message, args, client) {
      // Step 1: Get the player for this guild
      const player = client.manager.players.get(message.guild.id);

      // Step 2: Check if there is a player
      if (!player) {
         return message.reply('There is nothing playing in this server!');
      }

      // Step 3: Check if there are tracks in the queue
      if (!player.current && player.queue.size === 0) {
         return message.reply('There are no tracks in the queue!');
      }

      // Step 4: Format duration for display
      // This helper function converts milliseconds to a readable format
      const formatDuration = (ms) => {
         const seconds = Math.floor((ms / 1000) % 60);
         const minutes = Math.floor((ms / (1000 * 60)) % 60);
         const hours = Math.floor(ms / (1000 * 60 * 60));

         return `${hours ? `${hours}:` : ''}${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
      };

      // Step 5: Create an embed for the queue
      // Embeds provide a nice, formatted way to display information
      const embed = new EmbedBuilder()
              .setTitle('Current Queue')
              .setColor('#0099ff');

      // Step 6: Add the current track to the embed
      if (player.current) {
         embed.setDescription(`**Now Playing:**\n[${player.current.title}](${player.current.uri}) | \`${formatDuration(player.current.duration)}\``);
      }

      // Step 7: Add the queue tracks to the embed
      if (player.queue.size > 0) {
         const tracks = player.queue.tracks.map((track, index) => {
            return `${index + 1}. [${track.title}](${track.uri}) | \`${formatDuration(track.duration)}\``;
         });

         embed.addFields({
            name: 'Up Next:',
            value: tracks.slice(0, 10).join('\n'),
         });

         // If there are more than 10 tracks, add a note
         if (player.queue.size > 10) {
            embed.addFields({
               name: 'And more...',
               value: `${player.queue.size - 10} more tracks in the queue`,
            });
         }
      }

      // Step 8: Send the embed to the channel
      message.reply({ embeds: [embed] });
   },
};
