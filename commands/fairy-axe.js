const Discord = require('discord.js');
const { mystic_embed } = require('../data/embeds.json');

module.exports = {
	name: "fairy-axe",
	aliases: ['fairy', 'fairyaxe'],
	cooldown: 4,
	execute(message) {

		const embed = new Discord.MessageEmbed()
			.setColor(mystic_embed)
			.setAuthor('Fairy Axe', 'https://media.discordapp.net/attachments/747913618284347527/817100934668484628/oie_g27W8y3zOLJJ.png')
			.setThumbnail('https://media.discordapp.net/attachments/801794541236781057/817512482465382403/Fairy_Axe.png')
			.setDescription('\u200B')
			.addFields(
				{name: "__**Value:**__", value: "9", inline: true},
				{name: "__**Demand:**__", value: "9", inline: true},
				{name: "__**Rarity:**__", value: "8", inline: true},
				{name: "__**Origin:**__", value: "Item Pack (Expired)", inline: true},
				{name: "__**Obtained:**__", value: "Trading Only", inline: true},
				{name: "\u200B", value: "\u200B"}
			)
			.setFooter("LAST UPDATED: 05/03/21")
		message.channel.send(embed)

	},
};