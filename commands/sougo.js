const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
   if(!args[1]) return message.reply("I never learned how to read.");
   let replies = ["I think...?","Yes...?", "Of course, I'm a big fan.", "Um, I think it's better if you ask Yamato-san..?", "That's no good, you know.", "I strongly advise you to do so. I'll be cheering you on.", "I'm sorry, I don't think I can help with that.", "Fufu, why not go for it?", "Do your best.","Absolutely not.", "I don't think so"];

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
