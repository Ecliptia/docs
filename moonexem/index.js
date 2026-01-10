// index.js
const { Client, GatewayIntentBits, Collection } = require("discord.js");
const { Manager } = require("moonlink.js");
const fs = require("fs");
const path = require("path");
const config = require("./config.json");

// Create a new Discord client with the necessary intents
// Intents determine what events your bot can receive
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds, // Needed for guild-related events
    GatewayIntentBits.GuildVoiceStates, // Required for voice functionality
    GatewayIntentBits.GuildMessages, // Needed to receive messages
    GatewayIntentBits.MessageContent, // Required to read message content
  ],
});

// Create a new Moonlink Manager instance
// This is the main interface for interacting with Lavalink/Nodelink
client.manager = new Manager({
  // Configure the Lavalink/Nodelink nodes to connect to
  nodes: [
    {
      host: config.lavalink.host, // The hostname of your Lavalink/Nodelink server
      port: config.lavalink.port, // The port your Lavalink/Nodelink server is running on
      password: config.lavalink.password, // The password for your Lavalink/Nodelink server
      secure: config.lavalink.secure, // Whether to use SSL/TLS for the connection
    },
  ],
  // This function sends voice state updates to Discord
  // It's required for the bot to join voice channels
  send: (guildId, payload) => {
    const guild = client.guilds.cache.get(guildId);
    if (guild) guild.shard.send(payload);
  },
  autoPlay: true, // Automatically play the next song in the queue
});

// Set up a collection to store commands
client.commands = new Collection();
client.config = config;

// Load command files from the commands directory
const commandFiles = fs
  .readdirSync("./commands")
  .filter((file) => file.endsWith(".js"));

// Register each command in the collection
for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  client.commands.set(command.name, command);
}

// Load event handler files from the events directory
const eventFiles = fs
  .readdirSync("./events")
  .filter((file) => file.endsWith(".js"));

// Register each event handler
for (const file of eventFiles) {
  const event = require(`./events/${file}`);
  if (event.once) {
    // For events that should only trigger once
    client.once(event.name, (...args) => event.execute(...args, client));
  } else {
    // For events that can trigger multiple times
    client.on(event.name, (...args) => event.execute(...args, client));
  }
}

// moonlink debug logs
client.manager.on("debug", console.log);

// Node connection events
client.manager.on("nodeConnect", (node) => {
  console.log(`Node ${node.identifier} connected`);
});

client.manager.on("nodeDisconnect", (node) => {
  console.log(`Node ${node.identifier} disconnected`);
});

client.manager.on("nodeError", (node, error) => {
  console.error(`Node ${node.identifier} encountered an error:`, error);
});

// Playback events
client.manager.on("trackStart", (player, track) => {
  // Send a message when a track starts playing
  const channel = client.channels.cache.get(player.textChannelId);
  if (channel) {
    channel.send(`Now playing: **${track.title}**`);
  }
});

client.manager.on("trackEnd", (player, track) => {
  console.log(`Track ended: ${track.title}`);
});

client.manager.on("queueEnd", (player) => {
  // Send a message when the queue ends
  const channel = client.channels.cache.get(player.textChannelId);
  if (channel) {
    channel.send(
      "Queue ended. Disconnecting in 30 seconds if no new tracks are added."
    );
  }

  // Disconnect after a delay if no new tracks are added
  // This helps save resources when the bot is not in use
  setTimeout(() => {
    if (!player.playing && player.queue.size === 0) {
      player.destroy();
      if (channel) {
        channel.send("Disconnected due to inactivity.");
      }
    }
  }, 30000); // 30 seconds
});

// Handle raw events for voice state updates
// This is crucial for Moonlink.js to work properly
client.on("raw", (packet) => {
  client.manager.packetUpdate(packet);
});

// Login to Discord with your bot token
client.login(config.token);
