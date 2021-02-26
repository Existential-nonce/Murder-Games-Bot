const Discord = require('discord.js');
const { normal_embed } = require('../../data/embeds.json');

module.exports = {
	name: 'ping',
	description: 'Ping command',
	cooldown: 4,
	execute(message) {

		const PingEmbed = new Discord.MessageEmbed()
            .setColor(normal_embed)
			.setDescription("Pinging...")
		message.channel.send(PingEmbed).then(sent => {
			const PingResult = new Discord.MessageEmbed()
            	.setColor(normal_embed)
				.setDescription(":ping_pong: **Pong!** - " + `${sent.createdTimestamp - message.createdTimestamp}ms`)
            sent.edit(PingResult);
        });
		
	}
};

 