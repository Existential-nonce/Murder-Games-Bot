const Discord = require('discord.js');
const { normal_embed } = require('../data/embeds.json');
const { e_dev, e_mod, e_bug } = require('../data/emojis.json')

module.exports = {
	name: "credits",
	description: "displays all the credits",
	cooldown: 4,
	execute(message) {

        const creditEmbed = new Discord.MessageEmbed()
            .setColor(normal_embed)
            .addFields(
                //{ name: '__Game developers :__', value: `> ` },
                { name: '__Bot Developers :__', value: `> ${e_dev}  - nonce#7570` },
                { name: '__Administrators :__', value: `> ${e_mod}  - None` },
                { name: '__Bug Hunters :__', value: `> ${e_bug}  - None` }
            )
        message.channel.send(creditEmbed)

	},
};