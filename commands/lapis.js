const Discord = require('discord.js');
const { legendary } = require('../data/embeds.json');

module.exports = {
	name: "lapis",
	cooldown: 4,
	execute(message) {

		const embed = new Discord.MessageEmbed()
			.setColor(legendary)
			.setAuthor('Lapis', 'https://media.discordapp.net/attachments/747913618284347527/817100934668484628/oie_g27W8y3zOLJJ.png')
			.setThumbnail('https://media.discordapp.net/attachments/747913618284347527/817842435929014312/Lapis.png')
			.setDescription('\u200B')
			.addFields(
				{name: "__**Value:**__", value: "5 Rares", inline: true},
				{name: "__**Demand:**__", value: "3", inline: true},
				{name: "__**Rarity:**__", value: "3", inline: true},
				{name: "__**Origin:**__", value: "Classic Case/Craft", inline: true},
				{name: "__**Obtained:**__", value: "Unboxing/Crafting", inline: true},
				{name: "\u200B", value: "\u200B"}
			)
			.setFooter("LAST UPDATED: 05/03/21")
		message.channel.send(embed)

	},
};