const { admin_embed } = require('../../../embeds.json');
const Discord = require('discord.js');

module.exports = {
    name: 'clear-console',
    aliases: ["console-clear, clear"],
    description: "clears the console, idk why you'd want to use this command but ok",
    administrator: true,
	cooldown: 4,
	execute(message) {

        const console_clearing = new Discord.MessageEmbed()
            .setColor(admin_embed)
            .setDescription(`\`\`\`>Clearing console...\`\`\``)
        message.channel.send(console_clearing).then(msg => {
            const console_cleared = new Discord.MessageEmbed()
                .setColor(admin_embed)
                .setDescription(`\`\`\`>Clearing console...\n   - Done!\`\`\``)
            msg.edit(console_cleared).then(() => {
                console.clear();
            });
        });
		
	},
};