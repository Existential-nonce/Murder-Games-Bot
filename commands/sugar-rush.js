const Discord = require('discord.js');
const { mystic } = require('../data/embeds.json');

module.exports = {
	name: "sugar-rush",
	aliases: ['sugar', 'sugarrush'],
	cooldown: 4,
	execute(message) {

		const embed = new Discord.MessageEmbed()
			.setColor(mystic)
			.setAuthor('Sugar Rush', 'https://media.discordapp.net/attachments/747913618284347527/817100934668484628/oie_g27W8y3zOLJJ.png')
			.setThumbnail('https://media.discordapp.net/attachments/747913618284347527/817518716865478666/Suugar_Rush.png')
			.setDescription('\u200B')
			.addFields(
				{name: "__**Value:**__", value: "6", inline: true},
				{name: "__**Demand:**__", value: "7", inline: true},
				{name: "__**Rarity:**__", value: "5", inline: true},
				{name: "__**Origin:**__", value: "Valentines 2021 Pack\n(Limited)", inline: true},
				{name: "__**Obtained:**__", value: "Buying from the Shop", inline: true},
				{name: "\u200B", value: "\u200B"}
			)
			.setFooter("LAST UPDATED: 05/03/21")
		message.channel.send(embed)

	},
};