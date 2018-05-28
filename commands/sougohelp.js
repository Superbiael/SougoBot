const Discord = require("discord.js");

module.exports.run = async (bot,message, args) => {

  let helpembed = new Discord.RichEmbed()
  .setDescription("Do not include < > when using commands. \nCommand phrases are not caps sensitive")
  .setColor("#825aae")
  .addField("Commands:","**s!sougo** *<question>* | Ask him anything. \n**s!send** *<@user> <message>* | Send a DM to the mentioned user\n**s!scout** | Solo Yolo \n**s!quote** | Random quote\n**s!say** *<message>* | Have the bot say anything you want\n**s!sougohelp** | Displays this help message")
  .addField("Basic s!commands:", "mafia (alias:maf) || smooch || c - ss rank *(ex: s!ssrank)* || tiddy")
  .addField("Command phrases:", "I love you Sougo || I would die for you Sougo || Good morning Sougo || Good night Sougo")

  message.channel.send(helpembed);
}

module.exports.help = {
  name: "sougohelp"
}
