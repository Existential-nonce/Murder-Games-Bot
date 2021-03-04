const Discord = require('discord.js');
const { normal_embed } = require('../data/embeds.json');

module.exports = {
	name: "links",
	aliases: ['link'],
	cooldown: 4,
	execute(message) {

		const embed = new Discord.MessageEmbed()
			.setColor(normal_embed)
			.setDescription('\u200B')
			.addFields(
				{name: "__**Discord link:**__", value: "https://discord.gg/BjZtbPKq3m"},
				{name: "__**Murder Games! Roblox link**__", value: "https://www.roblox.com/games/5960616923/UPDATE-Murder-Games?refPageId=8666fd44-86d1-4b04-bcd9-4d390fe404dc"},
				{name: "__**Royalty Studios! Group link**__", value: "https://www.roblox.com/groups/7833561/Royalty-Studios#!/about"},
				{name: "__**Value list site link:**__", value: "https://sites.google.com/view/murdergamesvalues/home?authuser=0"},
				{name: "\u200B", value: "\u200B"}
            )
		message.channel.send(embed)

	},
};
