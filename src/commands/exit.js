const Discord = require('discord.js');
const { admin_embed } = require('../data/embeds.json');
const { e_cmd } = require('../data/emojis.json')

module.exports = {
	name: 'exit',
    description: 'shuts down the bot, ig',
    aliases: ['force-exit, kill-process, kill, exit-process'],
    administrator: true,
	cooldown: 4,
	execute(message) {

        const process_shutting = new Discord.MessageEmbed()
            .setColor(admin_embed)
            .setTitle(`${e_cmd} Admin panel ${e_cmd}`)
            .setDescription("\`\`\`>Shutting down process...\`\`\`")
        message.channel.send(process_shutting).then(msg => {
            const process_shutting2 = new Discord.MessageEmbed()
                .setColor(admin_embed)
                .setTitle(`${e_cmd} Admin panel ${e_cmd}`)
                .setDescription(`\`\`\`>Shutting down process...\n   - Process has been shut down.\`\`\``)    
            msg.edit(process_shutting2).then(msg2 => {
                const process_shutting3 = new Discord.MessageEmbed()
                    .setColor(admin_embed)
                    .setTitle(`${e_cmd} Admin panel ${e_cmd}`)
                    .setDescription(`\`\`\`>Shutting down process...\n   - Process has been shut down.\n\n>Shutting down client... This may take a few minutes.\`\`\``)
                msg2.edit(process_shutting3).then(() => {
                    console.error("Client has been manually shut down");
                    process.exit();
                });
            });
        });
    }
}

    

