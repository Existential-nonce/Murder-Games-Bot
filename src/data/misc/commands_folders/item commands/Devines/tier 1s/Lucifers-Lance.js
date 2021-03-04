const Discord = require('discord.js');
const { divine_embed } = require('../../../../../embeds.json');

module.exports = {
	name: "lucifers-lance",
	aliases: ['luciferslance', 'lucifer', 'lance'],
	cooldown: 4,
	execute(message) {

		const embed = new Discord.MessageEmbed()
			.setColor(divine_embed)
			.setAuthor()
			.setThumbnail()
			.addFields(
				{name: "__**Name:**__", value: "Lucifer's Lance", inline: true},
				{name: "__**Value:**__", value: "55", inline: true},
				{name: "__**Demand:**__", value: "10", inline: true},
				{name: "__**Rarity:**__", value: "10", inline: true},
				{name: "__**Origin:**__", value: "Executive Case", inline: true},
				{name: "__**Obtained:**__", value: "Unboxing", inline: true}
			)
		message.channel.send(embed)
		
	},
};
