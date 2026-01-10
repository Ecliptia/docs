module.exports = {
  name: "autoplay",
  aliases: ["ap", "auto"],
  description: "Toggle autoplay for the current player",
  execute(message, args, client) {
    // Step 1: Check if there is an active player for the guild.
    // Autoplay can only be toggled if music is already playing or a session exists.
    const player = client.manager.players.get(message.guild.id);

    if (!player) {
      return message.reply("There is no active player for this server.");
    }

    // Step 2: Check if the user is in a voice channel.
    // The user must be connected to voice to control the bot.
    const { channel } = message.member.voice;

    if (!channel) {
      return message.reply("You need to join a voice channel first!");
    }

    // Step 3: Ensure the user is in the same voice channel as the bot.
    // This prevents users from other channels from interfering with the music.
    if (channel.id !== player.voiceChannelId) {
      return message.reply("You must be in the same voice channel as the bot!");
    }

    // Step 4: Toggle the autoplay state.
    // We get the current state, invert it, and set the new value.
    const isAutoplay = player.autoPlay;
    player.setAutoPlay(!isAutoplay);

    // Step 5: Inform the user of the new state.
    return message.reply(
      `Autoplay is now **${!isAutoplay ? "enabled" : "disabled"}**.`
    );
  },
};
