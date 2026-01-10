// events/ready.js
module.exports = {
  name: 'clientReady',
  once: true,
  execute(client) {
    console.log(`Logged in as ${client.user.tag}`);
    
    // Initialize the Moonlink Manager with the bot's user ID
    // This is required for the manager to function correctly
    client.manager.init(client.user.id);
    console.log('Moonlink Manager initialized');
  },
};
