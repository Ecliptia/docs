const { EmbedBuilder } = require("discord.js");

module.exports = {
  name: "nowplaying",
  aliases: ["np", "current"],
  description: "Show information about the current track",
  execute(message, args, client) {
    // Step 1: Check if there is an active player for the guild.
    const player = client.manager.players.get(message.guild.id);
    if (!player) {
      return message.reply("No active player!");
    }

    // Step 2: Check if there is a track currently playing.
    if (!player.current) {
      return message.reply("Nothing is playing!");
    }

    const track = player.current;

    // Step 3: Helper function to format milliseconds into readable time.
    const formatDuration = (ms) => {
      const seconds = Math.floor((ms / 1000) % 60);
      const minutes = Math.floor((ms / (1000 * 60)) % 60);
      const hours = Math.floor(ms / (1000 * 60 * 60));

      return `${hours ? `${hours}:` : ""}${minutes
        .toString()
        .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
    };

    // Step 4: Helper function to create a visual progress bar.
    const createProgressBar = (current, total, length = 15) => {
      const progress = Math.round((current / total) * length);
      return "▬".repeat(progress) + "🔘" + "▬".repeat(length - progress);
    };

    // Step 5: Build the embed with track information.
    // Display title, author, requester, and the progress bar.
    const embed = new EmbedBuilder()
      .setTitle("Now Playing")
      .setColor("#0099ff")
      .setDescription(`[${track.title}](${track.uri})`)
      .addFields(
        { name: "Author", value: track.author, inline: true },
        {
          name: "Requested By",
          value: `<@${track.userData.requester}>`,
          inline: true,
        },
        {
          name: "Duration",
          value: `\`${formatDuration(track.position)} / ${formatDuration(
            track.duration
          )}\`\n${createProgressBar(track.position, track.duration)}`,
          inline: false,
        }
      );

    // Step 6: Add thumbnail if artwork is available.
    if (track.artworkUrl) {
      embed.setThumbnail(track.artworkUrl);
    }

    // Step 7: Send the embed to the channel.
    message.reply({ embeds: [embed] });
  },
};
