const Discord = require('discord.js');
const { mystic_embed } = require('../data/embeds.json');

module.exports = {
	name: "apex",
	cooldown: 4,
	execute(message) {

		const embed = new Discord.MessageEmbed()
			.setColor(mystic_embed)
			.setAuthor('Apex', 'https://media.discordapp.net/attachments/747913618284347527/817100934668484628/oie_g27W8y3zOLJJ.png')
			.setThumbnail('https://media.discordapp.net/attachments/747913618284347527/817519182593130506/Apex.png')
			.setDescription('\u200B')
			.addFields(
				{name: "__**Value:**__", value: "3", inline: true},
				{name: "__**Demand:**__", value: "6", inline: true},
				{name: "__**Rarity:**__", value: "6", inline: true},
				{name: "__**Origin:**__", value: "Shop Item", inline: true},
				{name: "__**Obtained:**__", value: "Buying from the Shop", inline: true},
				{name: "\u200B", value: "\u200B"}
			)
			.setFooter("LAST UPDATED: 05/03/21")
		message.channel.send(embed)

	},
};