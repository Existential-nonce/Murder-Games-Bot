const Discord = require('discord.js');
const { normal_embed, admin_embed } = require('../data/embeds.json');
const config = require('../config.json')
const p = config.prefix

module.exports = {
	name: "help",
	aliases: ['commands'],
	cooldown: 4,
	execute(message) {

        const embed = new Discord.MessageEmbed()
            .setColor(normal_embed)
            .setTitle("📜 Command List 📜")
            .addFields(
                {name: `__**${p}{item-name}**__`, value: "> - Displays the item's infobox. Make sure to put hyphens instead of spaces."},
                {name: `__**${p}ping**__`, value: "> - Pings the bot"},
                {name: `__**${p}links**__`, value: "> - Displays all the useful links"},
                {name: `__**${p}credits**__`, value: "> - List of credited developers"},
            )
		message.channel.send(embed).then(() => {

            if (config.admin_list.includes(message.author.id)) {
                const embed2 = new Discord.MessageEmbed()
                    .setColor(admin_embed)
                    .setTitle(":hammer_pick: Admin Command List :hammer_pick:")
                    .addFields(
                        {name: `__**${p}reload {command}**__`, value: "> - Refreshes the specified command or item name."},
                        {name: `__**${p}clear-console**__`, value: "> - Clears the console in the code editor"},
                        {name: `__**${p}exit**__`, value: "> - Shuts down the bot in case of an emergency"}
                    ) 
                message.channel.send(embed2)
            }
        })
		
    }
}