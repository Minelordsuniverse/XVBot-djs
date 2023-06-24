const { Client, Events, Partials, Collection, GatewayIntentBits } = require('discord.js');
const { token } = require('./config.json');

const client = new Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent,
	],
});

client.once(Events.ClientReady, c => {
	console.log(`W rizz, running as ${c.user.tag}`);
});

client.commands = new Collection();
client.subCommands = new Collection(); //sub commands

const { SlashCommandBuilder } = require('discord.js');

// adding no prefix sytem type help in a discord server 
const client = new Client({
  intents: [Object.keys(GatewayIntentBits)],
  partials: [Object.keys(Partials)],
});

// visible response **[TEST FUNCTION]**
module.exports = {
	data: new SlashCommandBuilder()
		.setName('invite')
		.setDescription('To invite the bot to a server you can add it in.'),
	async execute(interaction) {
		await interaction.reply('Invitation link: https://discord.com/api/oauth2/authorize?client_id=1052198468246052864&permissions=8&scope=bot'); //insert your bot OAuth2 in here.
	},
};

client.on('messageCreate', async (message) => {
  if (message.author.bot) return; // ignores messages sent by bots

  if (message.content === 'help') { // triggers command when message is sent ig [TEST]
    await message.reply('Hey! For help just type ***/help*** !'); // response
  }
});

//nodejs-events
process.on("unhandledRejection", e => {
	console.log(e)
  })
  process.on("uncaughtException", e => {
	console.log(e)
  })
  process.on("uncaughtExceptionMonitor", e => {
	console.log(e)
  })

module.exports = client;

client.config = require("./config.json");
logs(client, {
  debug: true,
});
