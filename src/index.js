/* eslint-disable no-unused-vars */
const fs = require('fs');
const Discord = require('discord.js');
const { prefix, token } = require('./data/config.json');
const { error_embed } = require('./data/embeds.json');

const client = new Discord.Client();
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
    
for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	// set a new item in the Collection
	// with the key as the command name and the value as the exported module
	client.commands.set(command.name, command);
}
const cooldowns = new Discord.Collection()


// bot startup + misc stuff
client.once('ready', () => {
	client.user.setActivity(`${prefix}help`)
	console.log('Ready!');
});

client.on('message', message => {

	// if message doesn't start with prefix or message author = bot, exit early.
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	// prefix slicing functionality
	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const commandName = args.shift().toLowerCase();
	const command = client.commands.get(commandName) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

	// if there's no command, exit early.
	if (!command) return;

	// guildonly dm functionality
	if (command.guildOnly && message.channel.type === 'dm') {
		return message.reply("I can't execute that command inside DMs!");
	}

	//bot admin perm functionality
	if (command.administrator == true) {
		if (message.author.id != "699310549573435423") {
			return message.reply("You need to be a bot administrator to access this command!");
		}
		else {
			console.log(` - "${commandName}" command used by ${message.author.tag}`)
		}	
	}

	// permission functionality
	if (command.permissions) {
		const authorPerms = message.channel.permissionsFor(message.author);
		if (!authorPerms || !authorPerms.has(command.permissions)) {
			return message.reply('You can not do this!');
		}
	}

	// argument provider check functionality
	if (command.args && !args.length) {
		let reply = `You didn't provide any arguments, ${message.author}!`;

		// proper command usage functionality
		if (command.usage) {
			reply += `\nThe proper usage would be: \`${prefix}${command.name} ${command.usage}\``;
		}
		return message.channel.send(reply);
	}

	if (!cooldowns.has(command.name)) {
		cooldowns.set(command.name, new Discord.Collection());
	}

	// cooldown functionality
	const now = Date.now();
	const timestamps = cooldowns.get(command.name);
	const cooldownAmount = (command.cooldown || 3) * 1000;
	if (timestamps.has(message.author.id)) {
		const expirationTime = timestamps.get(message.author.id) + cooldownAmount;
		if (now < expirationTime) {
			const timeLeft = (expirationTime - now) / 1000;
			const cooldownEmbed = new Discord.MessageEmbed()
				.setColor(error_embed)
				.setDescription(`\`\`\`Please wait ${timeLeft.toFixed(1)} more second(s) before reusing the "${command.name}" command.\`\`\``)
			message.channel.send(cooldownEmbed)
			return;
		}
	}

	timestamps.set(message.author.id, now);
	setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);

	// error functionality
	try {
		command.execute(message, args);
	} catch (error) {
		console.error(error);
		const errorEmbed = new Discord.MessageEmbed()
			.setColor(error_embed)
			.setDescription(`\`\`\`There was an error trying to execute that command!\`\`\``)
		message.channel.send(errorEmbed);
	}

});

client.login(token);
