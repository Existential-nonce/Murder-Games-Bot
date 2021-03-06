const Discord = require('discord.js');
const { legendary } = require('../data/embeds.json');

module.exports = {
	name: "gilded",
	aliases: ['glided'],
	cooldown: 4,
	execute(message) {

		const embed = new Discord.MessageEmbed()
			.setColor(legendary)
			.setAuthor('Gilded', 'https://media.discordapp.net/attachments/747913618284347527/817100934668484628/oie_g27W8y3zOLJJ.png')
			.setThumbnail('https://media.discordapp.net/attachments/747913618284347527/817843080002535504/Gilded.png')
			.setDescription('\u200B')
			.addFields(
				{name: "__**Value:**__", value: "0", inline: true},
				{name: "__**Demand:**__", value: "0", inline: true},
				{name: "__**Rarity:**__", value: "0", inline: true},
				{name: "__**Origin:**__", value: "Royalty Studios", inline: true},
				{name: "__**Obtained:**__", value: "Joining the Roblox Group", inline: true},
				{name: "\u200B", value: "\u200B"}
			)
			.setFooter("LAST UPDATED: 05/03/21")
		message.channel.send(embed)

	},
};