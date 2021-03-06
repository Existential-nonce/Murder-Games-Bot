const Discord = require('discord.js');
const { mystic } = require('../data/embeds.json');

module.exports = {
	name: "gem-gazer",
	aliases: ['gemgazer', 'gazer', 'gem'],
	cooldown: 4,
	execute(message) {

		const embed = new Discord.MessageEmbed()
			.setColor(mystic)
			.setAuthor('Gem Gazer', 'https://media.discordapp.net/attachments/747913618284347527/817100934668484628/oie_g27W8y3zOLJJ.png')
			.setThumbnail('https://media.discordapp.net/attachments/747913618284347527/817826721624883250/Gem_Gazer.png')
			.setDescription('\u200B')
			.addFields(
				{name: "__**Value:**__", value: "2", inline: true},
				{name: "__**Demand:**__", value: "5", inline: true},
				{name: "__**Rarity:**__", value: "4", inline: true},
				{name: "__**Origin:**__", value: "Crafting Station", inline: true},
				{name: "__**Obtained:**__", value: "Craft from 4 certain legends", inline: true},
				{name: "\u200B", value: "\u200B"}
			)
			.setFooter("LAST UPDATED: 05/03/21")
		message.channel.send(embed)

	},
};