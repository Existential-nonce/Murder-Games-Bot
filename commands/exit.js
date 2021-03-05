const Discord = require('discord.js');
const { admin_embed, admin_title } = require('../data/embeds.json');

module.exports = {
	name: 'exit',
    description: 'shuts down the bot (only use this command in emergency situations just in case',
    aliases: ['force-exit', 'kill-process', 'kill', 'exit-process', 'shutdown', 'shut-down'],
    administrator: true,
	cooldown: 4,
	execute(message) {

        const process_shutting = new Discord.MessageEmbed()
            .setColor(admin_embed)
            .setTitle(admin_title)
            .setDescription("\`\`\`>Shutting down client...\`\`\`")
        message.channel.send(process_shutting).then(msg => {
            
            //figure out a way to change the bot's status here
            const process_shutting2 = new Discord.MessageEmbed()
                .setColor(admin_embed)
                .setTitle(admin_title)
                .setDescription(`\`\`\`>Shutting down client...\n   - Client has been shut down.\`\`\``)    
            msg.edit(process_shutting2).then(msg2 => {

                const process_shutting3 = new Discord.MessageEmbed()
                    .setColor(admin_embed)
                    .setTitle(admin_title)
                    .setDescription(`\`\`\`>Shutting down client...\n   -  Client has been shut down.\n\n>Shutting down process... This may take a few minutes.\`\`\``)
                msg2.edit(process_shutting3).then(() => {
                    console.error("Client has been manually shut down");
                    process.exit();
                });
            });
        });

    }
}

    

