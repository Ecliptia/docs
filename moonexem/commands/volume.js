module.exports = {
  name: "volume",
  aliases: ["vol", "v"],
  description: "Adjust the player volume",
  execute(message, args, client) {
    // Step 1: Check if there is an active player for the guild.
    const player = client.manager.players.get(message.guild.id);
    if (!player) {
      return message.reply("No active player!");
    }

    // Step 2: Ensure the user is in the same voice channel as the bot.
    if (message.member.voice.channel?.id !== player.voiceChannelId) {
      return message.reply("You must be in the same voice channel!");
    }

    // Step 3: Check if a volume argument was provided.
    // If not, simply display the current volume.
    if (!args.length) {
      return message.reply(`Current volume is: **${player.volume}%**`);
    }

    // Step 4: Parse the volume argument.
    const volume = parseInt(args[0]);

    // Step 5: Validate the volume usage.
    if (isNaN(volume)) {
      return message.reply("Please provide a valid number!");
    }

    // Step 6: Check specific volume limits (0-1000).
    if (volume < 0 || volume > 1000) {
      return message.reply("Volume must be between 0 and 1000!");
    }

    // Step 7: Apply the new volume setting.
    player.setVolume(volume);
    message.reply(`Volume set to: **${volume}%**`);
  },
};
