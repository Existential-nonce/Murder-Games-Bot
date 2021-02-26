const { admin_embed } = require('../../data/embeds.json');
const Discord = require('discord.js');

module.exports = {
    name: 'clear-console',
    aliases: ["console-clear, clear"],
    description: "clears the console in vs code, idk why you'd want to use this command but ok",
    administrator: true,
	cooldown: 4,
	execute(message) {

        if (message.author.id != "699310549573435423") {
            return message.reply("You need to be a bot administrator to access this command!")
        }

        const console_clearing = new Discord.MessageEmbed()
            .setColor(admin_embed)
            .setDescription(`\`\`\`>Clearing console...\`\`\``)

        message.channel.send(console_clearing).then(msg => {
            const console_cleared = new Discord.MessageEmbed()
                .setColor(admin_embed)
                .setDescription(`\`\`\`>Clearing console...\n   - Done!\`\`\``)
        
            msg.edit(console_cleared).then(() => {
                console.clear();
                console.log(` - "clear-console" command used by ${message.author.tag}`)
            });
                
        });
		
	},
};