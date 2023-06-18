const { Client, Events, Partials, Collection, GatewayIntentBits } = require('discord.js');
const { token } = require('./config.json');

const client = new Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent,
	],
});

client.on('ready', () => {
	console.log('W rizz, no code error')
});

client.commands = new Collection();

const { SlashCommandBuilder } = require('discord.js');

const client = new Client({
  intents: [Object.keys(GatewayIntentBits)],
  partials: [Object.keys(Partials)],
});
// adding no prefix sytem type help in a discord server 
const client = new Client({
  intents: [Object.keys(GatewayIntentBits)],
  partials: [Object.keys(Partials)],
});

// visible response **[TEST FUNCTION]**
module.exports = {
	data: new SlashCommandBuilder()
		.setName('help')
		.setDescription('Commands list'),
	async execute(interaction) {
		await interaction.reply('[slash] commands you can do: `ping` , `im depressed`');
	},
};

client.on('messageCreate', async (message) => {
  if (message.author.bot) return; // ignores messages sent by bots

  if (message.content === 'help') { // triggers command when message is sent ig [TEST]
    await message.reply('Hey! For help just type ***/help*** !'); // response
  }
});

// hidden response **[TEST FUNCTION]**
client.on(Events.InteractionCreate, async interaction => {
	if (!interaction.isChatInputCommand()) return;

	if (interaction.commandName === 'ping') {
		await interaction.reply({ content: 'Secret Pong!', ephemeral: true });
		if (!interaction.isChatInputCommand()) return;

	if (interaction.commandName === 'im depressed') {
		await interaction.reply('aww dont be! There are many reasons to be alive.');
		await interaction.followUp({ content: 'you should kill yourself immediately.', ephemeral: true });
	}
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

client.commands = new Collection();
client.subCommands = new Collection(); //sub commands

module.exports = client;

client.config = require("./config.json");
logs(client, {
  debug: true,
});