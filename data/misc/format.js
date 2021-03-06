const Discord = require('discord.js');
const { _embed } = require('../data/embeds.json');

module.exports = {
	name: "",
	aliases: ['', ''],
	cooldown: 4,
	execute(message) {

		const embed = new Discord.MessageEmbed()
			.setColor(_embed)
			.setAuthor('', 'https://media.discordapp.net/attachments/747913618284347527/817100934668484628/oie_g27W8y3zOLJJ.png')
			.setThumbnail()
			.setDescription('\u200B')
			.addFields(
				{name: "__**Value:**__", value: "", inline: true},
				{name: "__**Demand:**__", value: "", inline: true},
				{name: "__**Rarity:**__", value: "", inline: true},
				{name: "__**Origin:**__", value: "", inline: true},
				{name: "__**Obtained:**__", value: "", inline: true},
				{name: "\u200B", value: "\u200B"}
			)
			.setFooter("LAST UPDATED: ")
		message.channel.send(embed)

	},
};







const Discord = require('discord.js');
const { legendary } = require('../data/embeds.json');

module.exports = {
	name: "",
	aliases: [''],
	cooldown: 4,
	execute(message) {

		const embed = new Discord.MessageEmbed()
			.setColor(legendary)
			.setAuthor('', 'https://media.discordapp.net/attachments/747913618284347527/817100934668484628/oie_g27W8y3zOLJJ.png')
			.setThumbnail('')
			.setDescription('\u200B')
			.addFields(
				{name: "__**Value:**__", value: "", inline: true},
				{name: "__**Demand:**__", value: "", inline: true},
				{name: "__**Rarity:**__", value: "", inline: true},
				{name: "__**Origin:**__", value: "Premium Case/Craft", inline: true},
				{name: "__**Obtained:**__", value: "Unboxing/Crafting", inline: true},
				{name: "\u200B", value: "\u200B"}
			)
			.setFooter("LAST UPDATED: 05/03/21")
		message.channel.send(embed)

	},
};



var fs = require('fs');

function readLines(input, func) {
  var remaining = '';

  input.on('data', function(data) {
    remaining += data;
    var index = remaining.indexOf('\n');
    while (index > -1) {
      var line = remaining.substring(0, index);
      remaining = remaining.substring(index + 1);
      func(line);
      index = remaining.indexOf('\n');
    }
  });

  input.on('end', function() {
    if (remaining.length > 0) {
      func(remaining);
    }
  });
}

function func(data) {
  console.log('Line: ' + data);
}

var input = fs.createReadStream('lines.txt');
readLines(input, func);