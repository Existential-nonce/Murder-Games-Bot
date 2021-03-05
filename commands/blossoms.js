const Discord = require('discord.js');
const { mystic_embed } = require('../data/embeds.json');

module.exports = {
	name: "blossoms",
	aliases: ['blossom'],
	cooldown: 4,
	execute(message) {

		const embed = new Discord.MessageEmbed()
			.setColor(mystic_embed)
			.setAuthor('Blossoms', 'https://media.discordapp.net/attachments/747913618284347527/817100934668484628/oie_g27W8y3zOLJJ.png')
			.setThumbnail('')
			.setDescription('\u200B')
			.addFields(
				{name: "__**Value:**__", value: "8", inline: true},
				{name: "__**Demand:**__", value: "8", inline: true},
				{name: "__**Rarity:**__", value: "7", inline: true},
				{name: "__**Origin:**__", value: "Prize Wheel", inline: true},
				{name: "__**Obtained:**__", value: "Spinning the Wheel", inline: true},
				{name: "\u200B", value: "\u200B"}
			)
			.setFooter("LAST UPDATED: 05/03/21")
		message.channel.send(embed)

	},
};