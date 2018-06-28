const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
   if(!args[0]) return message.reply("I never learned how to read.");
   let replies = ["Absolutely!", "I think...?","Yes...?", "Of course, I'm a big fan.", "That's no good, you know.", "I strongly advise you to do so. I'll be cheering you on.", "I'm sorry, I don't think I can help with that.", "Fufu, why not go for it?", "Do your best.","Absolutely not.", "I don't think so"];

   let result = Math.floor((Math.random() * replies.length));
   let question = args.slice(0).join(" ");

   let ballembed = new Discord.RichEmbed()
   .setColor("#825aae")
   .addField("Question:", question)
   .addField("Answer:", replies[result]);

   let botschannel = message.guild.channels.find(`name`, "idolbot7");
   if(!botschannel) return message.channel.send("Couldn't find bot channel.");
   botschannel.send(ballembed);
}

module.exports.help = {
  name:"sougo"
}
