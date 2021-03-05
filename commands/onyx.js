const Discord = require('discord.js');
const { ancient_embed } = require('../data/embeds.json');

module.exports = {
	name: "onyx",
	aliases: ['onix'],
	cooldown: 4,
	execute(message) {

		const embed = new Discord.MessageEmbed()
			.setColor(ancient_embed)
			.setAuthor('Onyx', 'https://media.discordapp.net/attachments/747913618284347527/817100934668484628/oie_g27W8y3zOLJJ.png')
			.setThumbnail()
			.setDescription('\u200B')
			.addFields(
				{name: "__**Value:**__", value: "10", inline: true},
				{name: "__**Demand:**__", value: "8", inline: true},
				{name: "__**Rarity:**__", value: "8", inline: true},
				{name: "__**Origin:**__", value: "Crafting station", inline: true},
				{name: "__**Obtained:**__", value: "Crafting from Ancient and Mystics", inline: true},
				{name: "\u200B", value: "\u200B"}
			)
			.setFooter("LAST UPDATED: 04/03/2021")
		message.channel.send(embed)

	},
};