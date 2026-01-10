---
title: Upgrade v4 to v5
description: The definitive and detailed guide for migrating your Moonlink.js application from version 4 to version 5.
icon: lucide:arrow-up-circle
---

Moonlink.js v5 is a monumental update that redefines how the library handles internal requests and state management. This version focuses on **100% reliability** for player commands by making them asynchronous and providing a much cleaner, more modular architecture.

::api-section{title="1. Manager: Initialization & Setup"}
::

The initialization process in v5 is more flexible, offering a low-boilerplate approach via Connectors while maintaining the classic manual setup for granular control.

### sendPayload ➜ send
In manual mode, the property used to send packets to Discord has been renamed from `sendPayload` to **`send`**.

### Manual Mode vs. Connectors

#### Option A: Manual Mode (Classic)
If you prefer full control, manual mode is still fully supported. You must manually listen to `ready` and `raw` events and call `manager.init()`.

```javascript
// v5 Manual Setup
const { Manager } = require("moonlink.js");

const manager = new Manager({
    nodes: [...],
    options: { ... },
    // Renamed from v4's 'sendPayload'
    send: (guildId, payload) => {
        const guild = client.guilds.cache.get(guildId);
        if (guild) guild.shard.send(payload);
    }
});

// Manual listeners are still REQUIRED in this mode:
client.on("ready", () => manager.init(client.user.id));
client.on("raw", (packet) => manager.packetUpdate(packet));
```

#### Option B: Connector Mode (Recommended)
Connectors are a new v5 feature that automates the boilerplate. They handle `init()`, `raw` packet updates, and the `send` function internally.

```javascript
const { Manager, Connectors } = require("moonlink.js");
const manager = new Manager({ nodes: [...] });

// Automates init and raw event handling
manager.use(new Connectors.DiscordJs(), client);
```

### Options Structure Refactoring
To improve clarity, root-level options from v4 have been grouped into logical category objects.

| Option | v4 Location | v5 Location |
| :--- | :--- | :--- |
| **Max Queue Size** | `options.maxQueueSize` | `options.queue.maxSize` |
| **Auto Play** | `options.autoPlay` | `options.defaultPlayer.autoPlay` |
| **Auto Leave** | `options.autoLeave` | `options.defaultPlayer.autoLeave` |
| **Retry Amount** | `options.retryAmount` | `options.node.retryAmount` |
| **Retry Delay** | `options.retryDelay` | `options.node.retryDelay` |
| **Source Limit** | `options.playlistLoadLimit` | `options.search.playlistLoadLimit` |

::api-section{title="2. Player: The Async Revolution"}
::

In version 5, **all playback control methods on the Player class are now asynchronous**. This change was made to ensure that the library waits for a confirmation from the Lavalink/NodeLink server before proceeding, guaranteeing that your requests are processed with **100% reliability**.

### Updated Method Signatures
Every control method now returns a `Promise`. You **must** use `await` or `.then()` to ensure stable state management.

::api-card{name="Async Player Control"}
#description
Methods that were synchronous in v4 but are now asynchronous in v5.

#example
```javascript
// v5 - Always await these for 100% reliability!
await player.play(track);
await player.pause();
await player.resume();
await player.stop();
await player.skip();
await player.seek(30000);
await player.connect({ selfDeaf: true });
await player.disconnect();
await player.destroy();
await player.restart();
await player.transferNode(node);
await player.replay();
await player.back();
```
::

### The `Voice` Class
The logic for managing voice states and gateway handshakes has been moved from the `Player` class into a dedicated `Voice` class, accessible via `player.voice`. This separation makes the player lighter and the voice handling more robust.

::api-section{title="3. Track Object Changes"}
::

To align with standard Lavalink API naming conventions, the property representing the track URL has been changed.

*   **v4**: `track.url`
*   **v5**: `track.uri` (Breaking Change!)

::api-card{name="Updated Property Access"}
#description
Update your embeds and logging logic to use 'uri'.

#example
```javascript
// v4
console.log(track.url);

// v5
console.log(track.uri); // Use this now
```
::

### `track.thumbnail`
In v5, `track.thumbnail` is a smart getter. If the track object doesn't have an `artworkUrl` from the source, the getter will automatically attempt to generate a valid YouTube thumbnail URL if the source is identified as YouTube.

::api-section{title="4. Synchronous Queue"}
::

In **v4**, Queue methods were asynchronous and returned Promises. In **v5**, they have been changed to be **synchronous** because the state is managed in-memory and synchronized with the internal database in background operations. You MUST remove `await` from these calls.

```javascript
// v4 (Old)
await player.queue.add(track);
await player.queue.shuffle();

// v5 (New)
player.queue.add(track);    // Synchronous
player.queue.shuffle();     // Synchronous
player.queue.clear();       // Synchronous
```

::api-section{title="5. Filters: The New Preset System"}
::

In **v4**, filters were just raw data structures. In **v5**, we introduced a powerful preset system and a new way to apply effects.

### Preset Support
You can now enable popular effects by name without knowing the underlying Lavalink configuration.

```javascript
// v5 Built-in Presets
player.filters.enable("8d");
player.filters.enable("nightcore");
player.filters.enable("bassboost-high");

await player.filters.apply();
```

### Custom Filter Definitions
You can define your own filters using a simple string-based syntax or objects in the Manager options.

```javascript
const manager = new Manager({
    options: {
        customFilters: {
            "low-and-slow": "pitch=0.8,speed=0.8,lowpass=15"
        }
    }
});
```

::api-section{title="6. Architecture: Voice & Node Management"}
::

v5 decouples internal logic into specialized classes for better maintenance and reliability.

### The `Voice` Class
Player voice logic has moved from the Player class to a dedicated `Voice` class.
*   **Access**: `player.voice`
*   **Responsibilities**: Handling `VOICE_SERVER_UPDATE`, `VOICE_STATE_UPDATE`, and connection state (`DISCONNECTED`, `CONNECTING`, `CONNECTED`).

### NodeManager: Graceful Ejection
A new `eject()` method has been added to `NodeManager` to safely remove a node by moving all its players to other healthy nodes before disconnecting.

```javascript
// v5 - Safely shut down a node
await manager.nodes.eject("node-identifier");
```

::api-section{title="7. Removed Getters: Lyrics & Listen"}
::

In **v5**, the specialized getters `player.lyrics` and `player.listen` have been **removed** from the Player class core.

*   **Lyrics**: Access lyrics directly via the `node.rest.getLyrics(trackId)` instance. 
*   **Listen**: Voice receiving logic has been moved to internal `Voice` handling and is no longer exposed through a dedicated getter on the Player.

::api-section{title="7. Event Payload Standardization"}
::

Event signatures have been cleaned up to provide reason strings as direct arguments.

### `trackEnd` Event
*   **v4**: `(player, track, payload)` (reason was hidden inside payload)
*   **v5**: `(player, track, reason, payload)` (reason is now a direct argument)

### New Events
*   `socketClosed`: Emitted when the voice WebSocket connection to Discord is closed.
*   `autoLeaved`: Emitted when the bot automatically leaves a channel due to the `autoLeave` setting.

::api-section{title="8. SearchResult Class Overhaul"}
::

The `SearchResult` class has been completely redesigned for better usability and alignment with the new internal interfaces (`IRESTLoadTracks`).

### New Helper Getters
You no longer need to manually compare strings. v5 introduces boolean getters for all load types:

```javascript
const res = await manager.search({ query: "..." });

if (res.isPlaylist) { 
    console.log(`Playlist: ${res.playlistInfo.name}`);
    console.log(`Tracks: ${res.tracks.length}`);
}
```

### Property Mapping Changes

| Feature | v4 (Old) | v5 (New) |
| :--- | :--- | :--- |
| **Playlist Info** | `res.playlistInfo` | `res.playlistInfo` (Now includes `name`, `selectedTrack`, and total `duration`) |
| **Error Details** | `res.error` | `res.exception` (Matches Lavalink standard) |
| **LoadType** | Loose string | `LoadType` Enum (mapped from `'track'`, `'playlist'`, `'search'`, `'empty'`, `'error'`) |

::api-section{title="9. API Method Comparison"}
::

| Class | v4 Method | v5 Method | Change Type |
| :--- | :--- | :--- | :--- |
| **Manager** | `sendPayload` | `send` | **Renamed** |
| **Player** | `connect()` | `await connect()` | **Async** |
| **Player** | `pause()` | `await pause()` | **Async** |
| **Player** | `resume()` | `await resume()` | **Async** |
| **Player** | `stop()` | `await stop()` | **Async** |
| **Player** | `seek()` | `await seek()` | **Async** |
| **Player** | `destroy()` | `await destroy()` | **Async** |
| **Player** | `filters.setX(...)` | `filters.setX(...)` | **Apply Required** |
| **Queue** | `await add()` | `add()` | **Sync** |
| **Queue** | `await shuffle()` | `shuffle()` | **Sync** |
| **Queue** | `await clear()` | `clear()` | **Sync** |
| **NodeManager**| `sortByUsage` | `findNode` | **Refined** |

::api-section{title="10. Full Implementation Example"}
::

### Complete Bot Migration (v5)

This example combines all the major changes: Connectors, asynchronous Player methods, synchronous Queue methods, and the `uri` property.

```javascript
const { Manager, Connectors } = require("moonlink.js");
const { Client, GatewayIntentBits } = require("discord.js");

const client = new Client({
    intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildVoiceStates, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent]
});

const manager = new Manager({
    nodes: [{ host: "localhost", port: 2333, password: "youshallnotpass" }],
    options: {
        defaultPlayer: { autoPlay: true }
    }
});

// AUTOMATION: Handles manager.init() and raw packet updates
manager.use(new Connectors.DiscordJs(), client);

client.on("messageCreate", async (msg) => {
    if (msg.content.startsWith("!play")) {
        const query = msg.content.split(" ").slice(1).join(" ");
        
        const player = manager.createPlayer({
            guildId: msg.guild.id,
            voiceChannelId: msg.member.voice.channel.id,
            textChannelId: msg.channel.id
        });

        // 1. ASYNC CONNECT: Now returns a Promise for reliability
        await player.connect({ selfDeaf: true });

        const res = await manager.search({ query, requester: msg.author.id });
        
        if (res.isEmpty) return msg.reply("No tunes found!");

        // 2. SYNC QUEUE: Methods no longer return Promises
        player.queue.add(res.tracks[0]);

        // 3. ASYNC PLAY: Guaranteed execution before proceeding
        if (!player.playing) {
            await player.play();
        }

        // 4. URI PROPERTY: url ➜ uri
        msg.reply(`🎸 Now grooving to: **${player.current.title}**\nLink: ${player.current.uri}`);
    }
});

client.login("YOUR_TOKEN");
```