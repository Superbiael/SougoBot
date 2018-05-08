const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
   if(!args[1]) return message.reply("I never learned how to read.");
   let replies = ["Yes", "No", "Maybe..."];

   let result = Math.floor((Math.random() * replies.length));
   let question = args.slice(0).join(" ");

   let ballembed = new Discord.RichEmbed()
   .setAuthor(message.author.tag)
   .setColor("#825aae")
   .addField("Question:", question)
   .addField("Answer:", replies[result]);

   message.channel.send(ballembed);
}

module.exports.help = {
  name:"sougo"
}
