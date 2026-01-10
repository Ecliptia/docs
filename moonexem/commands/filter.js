module.exports = {
  name: "filter",
  aliases: ["effect", "fx"],
  description: "Apply an audio filter",
  async execute(message, args, client) {
    const player = client.manager.players.get(message.guild.id);
    if (!player) {
      return message.reply("No active player!");
    }

    if (message.member.voice.channel?.id !== player.voiceChannelId) {
      return message.reply("You must be in the same voice channel!");
    }

    if (!args.length) {
      return message.reply(
        "Available filters: `reset`, `bassboost`, `nightcore`, `vaporwave`, `8d`, `tremolo`, `vibrato`, `karaoke`"
      );
    }

    const filter = args[0].toLowerCase();
    let filterApplied = false;
    let replyMessage = "";

    try {
      switch (filter) {
        case "reset":
          player.filters.resetFilters();
          filterApplied = true;
          replyMessage = "All filters reset.";
          break;

        case "bassboost":
          player.filters.setEqualizer([
            { band: 0, gain: 0.6 }, // 25 Hz
            { band: 1, gain: 0.7 }, // 40 Hz
            { band: 2, gain: 0.8 }, // 63 Hz
            { band: 3, gain: 0.55 }, // 100 Hz
            { band: 4, gain: 0.25 }, // 160 Hz
          ]);
          filterApplied = true;
          replyMessage = "Bassboost filter applied.";
          break;

        case "nightcore":
          player.filters.setTimescale({
            speed: 1.2, // 20% faster
            pitch: 1.2, // 20% higher pitch
            rate: 1.0, // Normal rate
          });
          filterApplied = true;
          replyMessage = "Nightcore filter applied.";
          break;

        case "vaporwave":
          player.filters.setTimescale({
            speed: 0.8, // 20% slower
            pitch: 0.8, // 20% lower pitch
            rate: 1.0, // Normal rate
          });
          filterApplied = true;
          replyMessage = "Vaporwave filter applied.";
          break;

        case "8d":
          player.filters.setRotation({
            rotationHz: 0.2, // Rotation speed
          });
          filterApplied = true;
          replyMessage = "8D filter applied.";
          break;

        case "tremolo":
          player.filters.setTremolo({
            frequency: 4.0, // Variation speed
            depth: 0.75, // Effect intensity
          });
          filterApplied = true;
          replyMessage = "Tremolo filter applied.";
          break;

        case "vibrato":
          player.filters.setVibrato({
            frequency: 4.0, // Variation speed
            depth: 0.75, // Effect intensity
          });
          filterApplied = true;
          replyMessage = "Vibrato filter applied.";
          break;

        case "karaoke":
          player.filters.setKaraoke({
            level: 1.0, // Effect level
            monoLevel: 1.0, // Mono channel level
            filterBand: 220.0, // Frequency band
            filterWidth: 100.0, // Width of effect
          });
          filterApplied = true;
          replyMessage = "Karaoke filter applied.";
          break;

        default:
          message.reply(
            "Invalid filter! Available filters: `reset`, `bassboost`, `nightcore`, `vaporwave`, `8d`, `tremolo`, `vibrato`, `karaoke`"
          );
          return;
      }

      // Apply the filter once after setting it
      if (filterApplied) {
        await player.filters.apply();
        message.reply(replyMessage);
      }
    } catch (error) {
      console.error("Filter application error:", error);
      message.reply("Failed to apply filter. Please try again.");
    }
  },
};
