const Discord = require('discord.js');
const { normal_embed } = require('../data/embeds.json');
const emojis = require('../data/emojis.json')

module.exports = {
	name: "links",
	aliases: ['link'],
	cooldown: 4,
	execute(message) {

		const embed = new Discord.MessageEmbed()
			.setColor(normal_embed)
			.addFields(
				{name: "__**Discord link:**__", value: "> - [Click here](https://discord.gg/BjZtbPKq3m)"},
				{name: "__**Murder Games! Roblox link**__", value: "> - [Click here](https://www.roblox.com/games/5960616923/UPDATE-Murder-Games?refPageId=8666fd44-86d1-4b04-bcd9-4d390fe404dc)"},
				{name: "__**Royalty Studios! Group link**__", value: "> - [Click here](https://www.roblox.com/groups/7833561/Royalty-Studios#!/about)"},
				{name: "__**Value list site link:**__", value: "> - [Click here](https://sites.google.com/view/murdergamesvalues/home?authuser=0)"},
				{name: "\u200B", value: "\u200B"},
				{ name: '__GitHub repository link:__', value: `> ${emojis.git} - [Click here](https://github.com/Existential-nonce/Murder-Games-Bot)` }
            )
		message.channel.send(embed)

	},
};
