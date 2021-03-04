const Discord = require('discord.js');
const { divine_embed } = require('../../../../data/embeds.json');

module.exports = {
	name: "ban-hammer",
	aliases: ['banhammer', 'hammer'],
	cooldown: 4,
	execute(message) {

		const embed = new Discord.MessageEmbed()
			.setColor(divine_embed)
			.setAuthor()
			.setThumbnail()
			.addFields(
				{name: "__**Name:**__", value: "Ban Hammer", inline: true},
				{name: "__**Value:**__", value: "???", inline: true},
				{name: "__**Demand:**__", value: "???", inline: true},
				{name: "__**Rarity:**__", value: "???", inline: true},
				{name: "__**Origin:**__", value: "Executive Case", inline: true},
				{name: "__**Obtained:**__", value: "Developers Only", inline: true}
			)
		message.channel.send(embed)
		
	},
};

