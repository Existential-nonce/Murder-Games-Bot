const Discord = require('discord.js');
const { divine } = require('../data/embeds.json');

module.exports = {
	name: "lucifers-lance",
	aliases: ['luciferslance', 'lucifer', 'lance', 'lucifers-lance', 'lucifer-lance'],
	cooldown: 4,
	execute(message) {

		const embed = new Discord.MessageEmbed()
			.setColor(divine)
			.setAuthor("Lucifer's Lance", 'https://media.discordapp.net/attachments/747913618284347527/817100934668484628/oie_g27W8y3zOLJJ.png')
			.setThumbnail('https://cdn.discordapp.com/attachments/801794541236781057/817512884715782214/Lucifers_Lance.png')
			.setDescription('\u200B')
			.addFields(
				{name: "__**Value:**__", value: "55", inline: true},
				{name: "__**Demand:**__", value: "10", inline: true},
				{name: "__**Rarity:**__", value: "10", inline: true},
				{name: "__**Origin:**__", value: "Executive Case", inline: true},
				{name: "__**Obtained:**__", value: "Unboxing", inline: true},
				{name: "\u200B", value: "\u200B"}
			)
			.setFooter("LAST UPDATED: 05/03/21")
		message.channel.send(embed)
		
	},
};
