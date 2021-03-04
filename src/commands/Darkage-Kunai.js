const Discord = require('discord.js');
const { ancient_embed } = require('../data/embeds.json');

module.exports = {
	name: "darkage-kunai",
	aliases: ['darkage', 'kunai', 'darkagekunai', 'dark-kunai'],
	cooldown: 4,
	execute(message) {

		const embed = new Discord.MessageEmbed()
			.setColor(ancient_embed)
			.setAuthor('Darkage Kunai', 'https://media.discordapp.net/attachments/747913618284347527/817100934668484628/oie_g27W8y3zOLJJ.png')
			.setThumbnail()
			.setDescription('\u200B')
			.addFields(
				{name: "__**Value:**__", value: "5", inline: true},
				{name: "__**Demand:**__", value: "6", inline: true},
				{name: "__**Rarity:**__", value: "6", inline: true},
				{name: "__**Origin:**__", value: "Crafting Station", inline: true},
				{name: "__**Obtained:**__", value: "Crafted from 2 Mystics", inline: true},
				{name: "\u200B", value: "\u200B"}
			)
			.setFooter("LAST UPDATED: 04/03/21")
		message.channel.send(embed)

	},
};