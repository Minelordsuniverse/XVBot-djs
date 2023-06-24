const fs = require('node:fs');
const path = require('node:path');
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
client.cooldowns = new Collection();

const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
	const filePath = path.join(commandsPath, file);
	const command = require(filePath);
	// Set new item in the Collection with the key as the command name & value as exported module
	if ('data' in command && 'execute' in command) {
		client.commands.set(command.data.name, command);
	} else {
		console.log(`[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`);
	}
}

client.on(Events.InteractionCreate, async interaction => {
	console.log(interaction);
	if (!interaction.isChatInputCommand()) return;

	const command = interaction.client.commands.get(interaction.commandName);

	if (!command) {
		console.error(`No command matching ${interaction.commandName} was found.`);
		return;
	}

	try {
		await command.execute(interaction);
	} catch (error) {
		console.error(error);
		if (interaction.replied || interaction.deferred) {
			await interaction.followUp({ content: 'There was an error while executing this command!', ephemeral: true });
		} else {
			await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
		}
	}
});

const { SlashCommandBuilder } = require('discord.js');

// adding no prefix sytem type help in a discord server 
const client = new Client({
  intents: [Object.keys(GatewayIntentBits)],
  partials: [Object.keys(Partials)],
});

// visible response **[TEST FUNCTION]**
module.exports = {
	cooldown: 10,
	data: new SlashCommandBuilder()
		.setName('invite')
		.setDescription('To invite the bot to a server you can add it in.'),
	async execute(interaction) {
		await interaction.reply('Invitation link: https://discord.com/api/oauth2/authorize?client_id=1052198468246052864&permissions=8&scope=bot'); //insert your bot OAuth2 in here.
	},
};

const { cooldowns } = client;

if (!cooldowns.has(command.data.name)) {
	cooldowns.set(command.data.name, new Collection());
}

const now = Date.now();
const timestamps = cooldowns.get(command.data.name);
const defaultCooldownDuration = 3;
const cooldownAmount = (command.cooldown ?? defaultCooldownDuration) * 1000;

if (timestamps.has(interaction.user.id)) {
	const expirationTime = timestamps.get(interaction.user.id) + cooldownAmount;

	if (now < expirationTime) {
		const expiredTimestamp = Math.round(expirationTime / 1000);
		return interaction.reply({ content: `Please wait, you are on a cooldown for \`${command.data.name}\`. You can use it again <t:${expiredTimestamp}:R>.`, ephemeral: true });
	}
}

timestamps.set(interaction.user.id, now);
setTimeout(() => timestamps.delete(interaction.user.id), cooldownAmount);

client.on('messageCreate', async (message) => {
  if (message.author.bot) return; // ignores messages sent by bots

  if (message.content === 'help') { // triggers command when message is sent ig [TEST]
    await message.reply('Hey! For help just type ***/help*** !'); // response
  }
});

module.exports = {
	name: Events.ClientReady,
	once: true,
	execute(client) {
		console.log(`Ready! Logged in as ${client.user.tag}`);
	},

	name: Events.InteractionCreate,
	async execute(interaction) {
		if (!interaction.isChatInputCommand()) return;

		const command = interaction.client.commands.get(interaction.commandName);

		if (!command) {
			console.error(`No command matching ${interaction.commandName} was found.`);
			return;
		}

		try {
			await command.execute(interaction);
		} catch (error) {
			console.error(`Error executing ${interaction.commandName}`);
			console.error(error);
		}
	},
};

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

client.login(token)