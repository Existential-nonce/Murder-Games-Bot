const { admin_embed, admin_title } = require('../data/embeds.json');
const Discord = require('discord.js');

module.exports = {
    name: 'clear-console',
    aliases: ["console-clear", "clear"],
    description: "clears the console, idk why you'd want to use this command but ok",
    administrator: true,
	cooldown: 4,
	execute(message) {

        var cc = "> Clearing console...\n"
        const console_clearing = new Discord.MessageEmbed()
            .setColor(admin_embed)
            .setTitle(admin_title)
            .setDescription(`\`\`\`${cc}\`\`\``)
        message.channel.send(console_clearing).then(msg => {
            console.clear()
            const console_cleared = new Discord.MessageEmbed()
                .setColor(admin_embed)
                .setTitle(admin_title)
                .setDescription(`\`\`\`${cc}   - Done!\`\`\``)
            msg.edit(console_cleared);
        });
		
	},
};