const Discord = require('discord.js');
const { mystic } = require('../data/embeds.json');

module.exports = {
	name: "emerald-enchanter",
	aliases: ['emerald', 'enchanter'],
	cooldown: 4,
	execute(message) {

		const embed = new Discord.MessageEmbed()
			.setColor(mystic)
			.setAuthor('Emerald Enchanter', 'https://media.discordapp.net/attachments/747913618284347527/817100934668484628/oie_g27W8y3zOLJJ.png')
			.setThumbnail('https://media.discordapp.net/attachments/747913618284347527/817834377379577876/Emerald_Enchanter.png')
			.setDescription('\u200B')
			.addFields(
				{name: "__**Value:**__", value: "1", inline: true},
				{name: "__**Demand:**__", value: "3", inline: true},
				{name: "__**Rarity:**__", value: "2", inline: true},
				{name: "__**Origin:**__", value: "Knife Case 1", inline: true},
				{name: "__**Obtained:**__", value: "Unboxing", inline: true},
				{name: "\u200B", value: "\u200B"}
			)
			.setFooter("LAST UPDATED: 05/03/21")
		message.channel.send(embed)

	},
};