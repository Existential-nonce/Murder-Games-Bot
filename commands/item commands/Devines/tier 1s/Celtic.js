const Discord = require('discord.js');
const { divine_embed } = require('../../../../data/embeds.json');

module.exports = {
	name: "celtic",
	aliases: [''],
	cooldown: 4,
	execute(message) {

		const embed = new Discord.MessageEmbed()
			.setColor(divine_embed)
			.setAuthor()
			.setThumbnail()
			.addFields(
				{name: "__**Name:**__", value: "Celtic", inline: true},
				{name: "__**Value:**__", value: "18", inline: true},
				{name: "__**Demand:**__", value: "10", inline: true},
				{name: "__**Rarity:**__", value: "10", inline: true},
				{name: "__**Origin:**__", value: "Crafting Station", inline: true},
				{name: "__**Obtained:**__", value: "Crafting Only", inline: true}
			)
		message.channel.send(embed)
		
	},
};
