// commands/stop.js
module.exports = {
  name: 'stop',
  description: 'Stop playback and clear the queue',
  execute(message, args, client) {
    // Step 1: Get the player for the guild.
    const player = client.manager.players.get(message.guild.id);
    
    // Step 2: Check if a player exists.
    if (!player) {
      return message.reply('There is nothing playing in this server!');
    }
    
    // Step 3: Check if the user is in the same voice channel.
    if (message.member.voice.channel?.id !== player.voiceChannelId) {
      return message.reply('You need to be in the same voice channel as the bot to use this command!');
    }
    
    // Step 4: Stop playback and clear the queue.
    player.stop();     // Stops the current track.
    player.queue.clear(); // Clears all tracks from the queue.
    
    // Step 5: Inform the user.
    message.reply('Stopped playback and cleared the queue.');
  },
};
