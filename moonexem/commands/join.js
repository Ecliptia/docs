module.exports = {
  name: "join",
  aliases: ["connect", "j"],
  description: "Join your voice channel",
  async execute(message, args, client) {
    // Step 1: Check if the user is in a voice channel.
    // The user must be in a voice channel for the bot to join them.
    const { channel } = message.member.voice;
    if (!channel) {
      return message.reply("You need to join a voice channel first!");
    }

    // Step 2: Check if the bot is already in any voice channel in this guild.
    // We want to avoid creating duplicate players or interrupting ongoing sessions in other channels.
    const existingPlayer = client.manager.players.get(message.guild.id);
    if (existingPlayer && existingPlayer.voiceChannelId) {
      if (existingPlayer.voiceChannelId === channel.id) {
        // Case A: Bot is already in the user's channel.
        return message.reply("I'm already in your voice channel!");
      } else {
        // Case B: Bot is busy in another channel.
        return message.reply(
          `I'm already connected to <#${existingPlayer.voiceChannelId}>!`
        );
      }
    }

    // Step 3: Create a player for the guild.
    // This initializes the music player instance specifically for this server.
    const player = client.manager.players.create({
      guildId: message.guild.id, // The ID of the server (guild).
      voiceChannelId: channel.id, // The ID of the voice channel to connect to.
      textChannelId: message.channel.id, // The ID of the channel where commands are sent.
      autoPlay: true, // Enables autoplay of similar songs when queue ends.
    });

    // Step 4: Connect to the voice channel.
    // This establishes the actual voice connection to Discord.
    await player.connect();

    // Step 5: Confirm success.
    message.reply(`Successfully joined <#${channel.id}>! 🎵`);
  },
};
