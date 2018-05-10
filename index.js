const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});
const fs = require("fs");
bot.commands = new Discord.Collection();
const prefix = "s!";

fs.readdir("./commands/", (err, files) => {

  if(err) console.log(err);

  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if(jsfile.legnth <= 0){
    console.log("Couldn't find commands.");
    return;
  }

  jsfile.forEach((f, i) =>{
    let props = require(`./commands/${f}`);
    console.log(`${f} loaded!`);
    bot.commands.set(props.help.name, props);
  });

});

bot.on("ready", async () => {
  console.log(`${bot.user.username} is online on ${bot.guilds.size} servers!`);
  bot.user.setActivity("Haru love bot", {type:0});

});


bot.on('message', message => {
  if (message.author.bot) return;

     msg = message.content.toLowerCase();
 
     mention = message.mentions.users.first();

  if (msg.startsWith (prefix + "send")) {
       if (mention == null) { return; }
        message.delete();
        mentionMessage = message.content.slice(6);
        mention.send (mentionMessage);
//        return message.channel.send("Message sent.");
      }
  
  if (msg.startsWith ("i love you sougo")) {
      let modRole = message.guild.roles.find("name","QUEEN.");
      if(message.member.roles.has(modRole.id)) {
        message.channel.send("I love you too, Haru. Spending time with you is like a dream come true. I'm so happy!");
      } else {
        message.channel.send("Thank you, I'm sorry I'm not sure if I can return the favor. I appreciate the sentiment though!");
      }
  }
  
    if (msg.startsWith ("good morning sougo")) {
    return message.channel.send("Good morning. Let's do our best today!");
    }

    if (msg.startsWith ("good night sougo")) {
    return message.channel.send("Good night. I look forward to seeing you again tomorrow morning!");
    }
  
});

bot.on("message", async message => {
  if(message.author.box) return;
  if(message.channel.type === "dm") return;

  let prefix = 's!';
  let messageArray = message.content.split( " ");
  let cmd = messageArray[0]
  let args = messageArray.slice(1);

  let commandfile = bot.commands.get(cmd.slice(prefix.length));
  if(commandfile) commandfile.run(bot,message,args);

  if(cmd ===`${prefix}botinfo`){

  let bicon = bot.user.displayAvatarURL;
  let botembed = new Discord.RichEmbed()
    .setDescription("Bot Information")
    .setColor("#825aae")
    .setThumbnail(bicon)
    .addField("Bot Name", bot.user.username)

  return message. channel.send(botembed);
  }

if(cmd === `${prefix}smooch`){
      let modRole = message.guild.roles.find("name","QUEEN.");
      if(message.member.roles.has(modRole.id)) {
        message.channel.send("Fufu... I'm getting a little embarrassed. I hope you don't mind if I return the favor~");
      } else {
        message.channel.send("O-Oh, that was out of nowhere.");
      }
  }
  
  if(cmd === `${prefix}mafia` || cmd === `${prefix}maf`){
    return message.channel.send("maf maf");
  }

   if(cmd === `${prefix}tiddy`){
    return message.channel.send ("Tsunashi-san!", {files:["./images/icons306.png"]});
}


  if(cmd === `${prefix}crank`){
    return message.channel.send("Tonight we'll practice all night.");
  }

  if(cmd === `${prefix}brank`){
  return message.channel.send("I wanted to do a bit more...");
  }

  if(cmd === `${prefix}arank`){
    return message.channel.send("I can still keep going!");
  }

  if(cmd === `${prefix}srank`){
    return message.channel.send("This is the best feeling ever!");
  }

   if(cmd === `${prefix}ssrank`){
    return message.channel.send("Because of you, I was able to shine.");
  }
});

bot.login(process.env.token);
