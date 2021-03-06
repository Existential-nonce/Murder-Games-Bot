const Discord = require('discord.js');
const { normal_embed } = require('../data/embeds.json');
const emojis = require('../data/emojis.json')

module.exports = {
	name: "credits",
	description: "displays all the credits",
	cooldown: 4,
	execute(message) {

        const creditEmbed = new Discord.MessageEmbed()
            .setColor(normal_embed)
            .addFields(
                //{ name: '__Game developers :__', value: `> ` },
                { name: '__Bot Developers :__', value: `> ${emojis.dev}  - nonce#7570` },
                { name: '__Administrators :__', value: `> ${emojis.mod}  - None` },
                { name: '__Bug Hunters :__', value: `> ${emojis.bug}  - None` }
            )
        message.channel.send(creditEmbed)

	},
};