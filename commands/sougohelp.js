const Discord = require("discord.js");

module.exports.run = async (bot,message, args) => {

  let guideembed = new Discord.RichEmbed()
  .setDescription("Do not include < > when using commands.")
  .setColor("#825aae")
  .addField("s!commands:", "mafia (alias:maf) ||  c - ss rank || smooch || tiddy ")
  .addField("Other commands:", "I love you Sougo || I would die for you sougo || Good morning Sougo || Good night Sougo")
  .addField("8ball command:", "s!sougo <question>")
  .addField("Send DM:", "s!send @user <message>");

  message.channel.send(guideembed);
}

module.exports.help = {
  name: "sougohelp"
}
