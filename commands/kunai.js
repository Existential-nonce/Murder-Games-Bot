const Discord = require('discord.js');
const { mystic } = require('../data/embeds.json');

module.exports = {
	name: "kunai",
	cooldown: 4,
	execute(message) {

		const embed = new Discord.MessageEmbed()
			.setColor(mystic)
			.setAuthor('Kunai', 'https://media.discordapp.net/attachments/747913618284347527/817100934668484628/oie_g27W8y3zOLJJ.png')
			.setThumbnail('https://cdn.discordapp.com/attachments/747913618284347527/817827450041794600/Kunai.png')
			.setDescription('\u200B')
			.addFields(
				{name: "__**Value:**__", value: "2", inline: true},
				{name: "__**Demand:**__", value: "5", inline: true},
				{name: "__**Rarity:**__", value: "5", inline: true},
				{name: "__**Origin:**__", value: "Crafting Station", inline: true},
				{name: "__**Obtained:**__", value: "Crafted from 5 Legends", inline: true},
				{name: "\u200B", value: "\u200B"}
			)
			.setFooter("LAST UPDATED: 05/03/21")
		message.channel.send(embed)

	},
};