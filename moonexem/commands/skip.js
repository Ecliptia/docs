// commands/skip.js
module.exports = {
  name: 'skip',
  description: 'Skip the current song',
  execute(message, args, client) {
    // Step 1: Get the player for the current guild.
    // Each guild has its own unique player instance.
    const player = client.manager.players.get(message.guild.id);
    
    // Step 2: Check if a player exists for this guild.
    // We can't skip if there's no active player.
    if (!player) {
      return message.reply('There is nothing playing in this server!');
    }
    
    // Step 3: Check if the user is in the same voice channel as the bot.
    // This prevents users in other channels from controlling the music.
    if (message.member.voice.channel?.id !== player.voiceChannelId) {
      return message.reply('You need to be in the same voice channel as the bot to use this command!');
    }
    
    // Step 4: Check if there is a track currently playing.
    if (!player.current) {
      return message.reply('There is nothing playing right now!');
    }
    
    // Step 5: Skip the current track.
    // We store the current track to mention it in the confirmation message.
    const currentTrack = player.current;
    player.skip();
    
    // Step 6: Inform the user that the track has been skipped.
    message.reply(`Skipped: **${currentTrack.title}**`);
  },
};
