// commands/resume.js
module.exports = {
  name: 'resume',
  description: 'Resume playback if paused',
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
    
    // Step 4: Check if the player is paused.
    if (!player.paused) {
      return message.reply('The player is not paused!');
    }
    
    // Step 5: Resume the player.
    player.resume();
    
    // Step 6: Inform the user.
    message.reply('Resumed playback.');
  },
};
