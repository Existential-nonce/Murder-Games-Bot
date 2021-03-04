const Discord = require('discord.js');
const { admin_embed, error_embed } = require('../data/embeds.json');
const { e_cmd } = require('../data/emojis.json')

module.exports = {
	name: 'reload',
    description: 'Reloads/refreshes a command',
    administrator: true,
	execute(message, args) {
        
        if (!args.length) {
        
            const noReload_embed = new Discord.MessageEmbed()
                .setColor(error_embed)
                .setTitle(`${e_cmd} Admin panel ${e_cmd}`)
                .setDescription(`\`\`\`>You didn't pass any command to reload!\`\`\``)
            message.channel.send(noReload_embed);
            return
        }

        const commandName = args[0].toLowerCase();
        const command = message.client.commands.get(commandName) || message.client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

        if (!command) {
            const noReloadCmd_embed = new Discord.MessageEmbed()
                .setColor(error_embed)
                .setTitle(`${e_cmd} Admin panel ${e_cmd}`)
                .setDescription(`\`\`\`>There is no command with name or alias "${commandName}"!\`\`\``)
            message.channel.send(noReloadCmd_embed);
            return;
        }

        delete require.cache[require.resolve(`./${command.name}.js`)];

        try {
            const newCommand = require(`./${command.name}.js`);
            message.client.commands.set(newCommand.name, newCommand);
        } catch (error) {
            console.error(error);
            const ReloadError_embed = new Discord.MessageEmbed()
                .setColor(error_embed)
                .setTitle(`${e_cmd} Admin panel ${e_cmd}`)
                .setDescription(`\`\`\`>There was an error while reloading the "${command.name}" command:\n${error.message}\`\`\``)
            message.channel.send(ReloadError_embed);
        }

        const reloadEmbed = new Discord.MessageEmbed()
            .setColor(admin_embed)
            .setTitle(`${e_cmd} Admin panel ${e_cmd}`)
            .setDescription(`\`\`\`>Command "${command.name}" was reloaded!\`\`\``)
        message.channel.send(reloadEmbed);
        console.log(`   > Command "${command.name}" was reloaded!`)
    },
};
