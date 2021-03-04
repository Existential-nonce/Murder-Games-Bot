const Discord = require('discord.js');
const { divine_embed } = require('../data/embeds.json');

module.exports = {
	name: "lucifer's-lance",
	aliases: ['luciferslance', 'lucifer', 'lance', 'lucifers-lance'],
	cooldown: 4,
	execute(message) {

		const embed = new Discord.MessageEmbed()
			.setColor(divine_embed)
			.setAuthor('', 'https://media.discordapp.net/attachments/747913618284347527/817100934668484628/oie_g27W8y3zOLJJ.png')
			.setTitle("Lucifer's Lance")
			.setThumbnail()
			.addFields(
				{name: "__**Value:**__", value: "55", inline: true},
				{name: "__**Demand:**__", value: "10", inline: true},
				{name: "__**Rarity:**__", value: "10", inline: true},
				{name: "__**Origin:**__", value: "Executive Case", inline: true},
				{name: "__**Obtained:**__", value: "Unboxing", inline: true},
				{name: "\u200B", value: "\u200B"}
			)
			.setFooter("LAST UPDATED: ")
		message.channel.send(embed)
		
	},
};
