// commands/play.js
module.exports = {
  name: 'play',
  description: 'Play a song',
  async execute(message, args, client) {
    // Step 1: Check if the user is in a voice channel.
    // This is important to ensure the bot knows where to join.
    const { channel } = message.member.voice;
    if (!channel) {
      return message.reply('You need to join a voice channel first!');
    }
    
    // Step 2: Check if a search query is provided.
    // The bot needs to know what song to search for.
    if (!args.length) {
      return message.reply('Please provide a song to play!');
    }
    
    // Step 3: Create a player for the guild.
    // If a player already exists, it will be retrieved. Otherwise, a new one is created.
    // This player instance handles everything related to music in a specific guild.
    const player = client.manager.players.create({
      guildId: message.guild.id,         // The ID of the server (guild).
      voiceChannelId: channel.id,        // The ID of the voice channel to connect to.
      textChannelId: message.channel.id, // The ID of the channel where commands are sent.
      autoPlay: true,                    // Enables autoplay of the next song.
    });
    
    // Step 4: Connect to the voice channel.
    // This establishes the connection so the bot can play audio.
    await player.connect();
    
    // Step 5: Search for the requested track.
    // Moonlink.js will search on the default platform (usually YouTube).
    const query = args.join(' ');
    const searchResult = await client.manager.search({ 
      query: query,
      requester: message.author.id  // We store the user who requested the song.
    });
    
    // Step 6: Handle the search results.
    // First, check if any tracks were found.
    if (!searchResult.tracks.length) {
      return message.reply('No results found for your query.');
    }
    
    // Step 7: Process the results based on the load type.
    // The loadType indicates whether a playlist, a single track, or a search result was returned.
    switch (searchResult.loadType) {
      case 'playlist':
        // If a playlist is found, add all its tracks to the queue.
        player.queue.add(searchResult.tracks);
        
        message.reply({
          content: `Added playlist **${searchResult.playlistInfo.name}** with ${searchResult.tracks.length} tracks to the queue.`,
        });
        
        // If the player is not already playing, start playback.
        if (!player.playing) {
          await player.play();
        }
        break;
        
      case 'search':
      case 'track':
        // If a single track or a search result is found, add the first track to the queue.
        await player.queue.add(searchResult.tracks[0]);
        
        message.reply({
          content: `Added **${searchResult.tracks[0].title}** to the queue.`,
        });
        
        // If the player is not already playing, start playback.
        if (!player.playing) {
          await player.play();
        }
        break;
        
      case 'empty':
        // If no matches are found for the query.
        message.reply('No matches found for your query!');
        break;
        
      case 'error':
        // If an error occurred while loading the track.
        message.reply(`An error occurred while loading the track: ${searchResult.error || 'Unknown error'}`);
        break;
    }
  },
};
