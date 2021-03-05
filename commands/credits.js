const Discord = require('discord.js');
const { normal_embed } = require('../data/embeds.json');
const { e_dev, e_mod, e_bug, e_git } = require('../data/emojis.json')

module.exports = {
	name: "credits",
	description: "displays all the credits",
	cooldown: 4,
	execute(message) {

        const creditEmbed = new Discord.MessageEmbed()
            .setColor(normal_embed)
            .addFields(
                { name: '__Developers :__', value: `> ${e_dev}  - nonce#7570` },
                { name: '__Moderators :__', value: `> ${e_mod}  - None` },
                { name: '__Bug Hunters :__', value: `> ${e_bug}  - None` },
                { name: '\u200B', value: '\u200B' },
                { name: '__Visit our Github page!__', value: `> ${e_git}  - Add link here` }
            )
        message.channel.send(creditEmbed)

	},
};