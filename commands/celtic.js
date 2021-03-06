const Discord = require('discord.js');
const { divine } = require('../data/embeds.json');

module.exports = {
	name: "celtic",
	cooldown: 4,
	execute(message) {

		const embed = new Discord.MessageEmbed()
			.setColor(divine)
			.setAuthor('Celtic', 'https://media.discordapp.net/attachments/747913618284347527/817100934668484628/oie_g27W8y3zOLJJ.png')
			.setThumbnail('https://media.discordapp.net/attachments/801794541236781057/817513137838358528/Celtic.png')
			.setDescription('\u200B')
			.addFields(
				{name: "__**Value:**__", value: "18", inline: true},
				{name: "__**Demand:**__", value: "10", inline: true},
				{name: "__**Rarity:**__", value: "10", inline: true},
				{name: "__**Origin:**__", value: "Crafting Station", inline: true},
				{name: "__**Obtained:**__", value: "Crafting Only", inline: true},
				{name: "\u200B", value: "\u200B"}
			)
			.setFooter("LAST UPDATED: 04/03/21")
		message.channel.send(embed)
		
	},
};
