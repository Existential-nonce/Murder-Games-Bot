//how to ban a user:
    const user = message.mentions.users.first();
    guild.members.ban(user);

//to unban:
    const id = args[0];
    guild.members.unban(id);

//how to kick a user:
    const member = message.mentions.members.first();
    member.kick();

//how to add a role to a guild member:
    const role = guild.roles.cache.find(role => role.name === '<role name>');
    const member = message.mentions.members.first();
    member.roles.add(role);

//special author message reader:
    if (message.author.id === '<id>') {
	    // ...
    }

//server info details
    message.channel.send('Guild name: ' + message.guild.name + '\nTotal members: ' + message.guild.memberCount);

//standard command trigger with reply function
    if (message.content.startsWith(`${prefix}ping`)) {
    	message.channel.send('Pong.');
    } else if (message.content.startsWith(`${prefix}beep`)) {
	    message.channel.send('Boop.');
    }

//standard message logger to console + startup function
    client.on('message', message => {
    	console.log(message.content);
    });

//emoji format
    message.reply("<:idklol:69696969696969696696969>"); //static
    message.reply("<a:whenimutant:793461818205929482>"); //animated

//efficient message reader/filterer
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(' ');
    const command = args.shift().toLowerCase();

//basic "import file" code start with .config file
    const Discord = require('discord.js'),
    client = new Discord.Client(),
    const { prefix, token } = require('../config.json');

//command file list reader import
    const fs = require('fs');

//usual import start
    const fs = require('fs');
    const Discord = require('discord.js');
    const { prefix, token } = require('../config.json');

    const client = new Discord.Client();
    client.commands = new Discord.Collection();

    const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

    for (const file of commandFiles) {
	    const command = require(`./commands/${file}`);
	    client.commands.set(command.name, command);
    }






//change client username
    client.user.setUsername('username');

//change bot avatar
    client.user.setAvatar('url or path');

//change bot status
    client.user.setActivity('activity description')

//change bot status + activity type
    client.user.setActivity('activity description', { type: 'WATCHING'});
    //can be set as "LISTENING" as well

//bot status displayer (all options):
    client.user.setStatus('online');
    client.user.setStatus('idle');
    client.user.setStatus('dnd');
    client.user.setStatus('invisible');

//status and activity both in one command
    client.user.setPresence({ activity: { name: '<activity>' }, status: 'idle' });

//sending a message to a specific channel
    const channel = client.channels.cache.get('id');
    channel.send('content');

//dming a certain user, use message.author.send() to reply to someone
    const user = client.users.cache.get('id');
    user.send('content');

//blacklist a user from using the bot
    const blockedUsers = [ 'id1', 'id2' ];
    client.on('message', message => {
    	if (blockedUsers.includes(message.author.id)) return;
    });

//blacklist users using database for their ids
    client.on('message', async message => {
    	const blockedUsers = await database.query('SELECT user_id FROM blocked_users;');
	    if (blockedUsers.includes(message.author.id)) return;
    });

//react to the message the bot sent
    message.channel.send('My message to react to.').then(sentMessage => {
    	sentMessage.react('👍');
	    sentMessage.react('<emoji id>');
    });

//restart the bot with a command
    //process.exit();
    //i can't fucking use js for this code cuz yeah

//find all online members of a guild 
    guild.members.fetch().then(fetchedMembers => {
    	const totalOnline = fetchedMembers.filter(member => member.presence.status === 'online');
	    // We now have a collection with all online member objects in the totalOnline variable
    	console.log(`There are currently ${totalOnline.size} members online in this guild!`)
    });

//how to check the bot's ping
    message.channel.send(`Websocket heartbeat: ${client.ws.ping}ms.`);

//same thing as above but more detailed and efficient ig
    message.channel.send('Pinging...').then(sent => {
     sent.edit(`Roundtrip latency: ${sent.createdTimestamp - message.createdTimestamp}ms`);
    });

//how to play music from youtube
    //it's in the documentation thing i'm too lazy pasting each element here

