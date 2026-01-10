module.exports = {
  name: "seek",
  aliases: ["jump", "goto"],
  description: "Seek to a specific position in the current track",
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

    // Step 3: Check if something is currently playing.
    if (!player.current) {
      return message.reply("Nothing is playing!");
    }

    // Step 4: Check if the track allows seeking.
    // Some streams (like live radio) cannot be seeked.
    if (!player.current.isSeekable) {
      return message.reply("This track cannot be seeked!");
    }

    // Step 5: Validate the input arguments.
    if (!args.length) {
      return message.reply("Provide a position (e.g., 1:30 or 90)");
    }

    const position = args[0];
    let milliseconds = 0;

    // Step 6: Parse the time input.
    // Supports formats like "1:30" (mm:ss) or raw seconds "90".
    if (position.includes(":")) {
      const [minutes, seconds] = position.split(":");
      milliseconds = (parseInt(minutes) * 60 + parseInt(seconds)) * 1000;
    } else {
      milliseconds = parseInt(position) * 1000;
    }

    // Step 7: Check if the parsed time is valid.
    if (isNaN(milliseconds)) {
      return message.reply("Invalid time format!");
    }

    // Step 8: Ensure the seek position is within the track's duration.
    if (milliseconds > player.current.duration) {
      return message.reply(
        `Track is only ${formatDuration(player.current.duration)} long!`
      );
    }

    // Step 9: Perform the seek operation.
    player.seek(milliseconds);
    message.reply(`Seeked to: **${formatDuration(milliseconds)}**`);
  },
};

// Helper function to format milliseconds into readable time string
function formatDuration(ms) {
  const seconds = Math.floor((ms / 1000) % 60);
  const minutes = Math.floor((ms / (1000 * 60)) % 60);
  const hours = Math.floor(ms / (1000 * 60 * 60));

  return `${hours ? `${hours}:` : ""}${minutes
    .toString()
    .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
}
