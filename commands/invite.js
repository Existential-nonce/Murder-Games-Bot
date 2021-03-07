const Discord = require('discord.js');
const { normal_embed } = require('../data/embeds.json');

module.exports = {
	name: "invite",
	cooldown: 4,
	execute(message) {

		const Embed = new Discord.MessageEmbed()
            .setColor(normal_embed)
			.setDescription(`[**Invite link**](https://discord.com/api/oauth2/authorize?client_id=814852487110328371&permissions=281600&scope=bot)`)
		message.channel.send(Embed)

	},
};
