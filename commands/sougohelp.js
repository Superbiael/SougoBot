const Discord = require("discord.js");

module.exports.run = async (bot,message, args) => {

  let guideembed = new Discord.RichEmbed()
  .setColor("#825aae")
  .addField("s!commands", "mafia (alias:maf) ||  c - ss rank || smooch ")
  .setDescription("other commands aren't caps sensitive + must  be the first thing in message. ")
  .addField("Other commands", "I love you Sougo || I would die for you sougo || Good morning Sougo || Good night Sougo")
  .addField("8ball command", "s!sougo <question>");

  message.channel.send(guideembed);
}

module.exports.help = {
  name: "sougohelp"
}
