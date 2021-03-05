const Discord = require('discord.js');
const { ancient_embed } = require('../data/embeds.json');

module.exports = {
	name: "chaos-caster",
	aliases: ['chaoscaster', 'chaos'],
	cooldown: 4,
	execute(message) {

		const embed = new Discord.MessageEmbed()
			.setColor(ancient_embed)
			.setAuthor('Chaos Caster', 'https://media.discordapp.net/attachments/747913618284347527/817100934668484628/oie_g27W8y3zOLJJ.png')
			.setThumbnail('https://media.discordapp.net/attachments/747913618284347527/817515737937477672/Chaos_Caster.png')
			.setDescription('\u200B')
			.addFields(
				{name: "__**Value:**__", value: "5", inline: true},
				{name: "__**Demand:**__", value: "5", inline: true},
				{name: "__**Rarity:**__", value: "4", inline: true},
				{name: "__**Origin:**__", value: "Premium Case", inline: true},
				{name: "__**Obtained:**__", value: "Unboxing", inline: true},
				{name: "\u200B", value: "\u200B"}
			)
			.setFooter("LAST UPDATED: 04/03/21")
		message.channel.send(embed)

	},
};