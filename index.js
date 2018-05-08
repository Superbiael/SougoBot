const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});
const fs = require("fs");
bot.commands = new Discord.Collection();

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
  console.log(`${bot.user.username} is online!`);
  bot.user.setPresence({game:{name:'Satsujin love bot',type:0}});﻿
});


bot.on('message', message => {
  if (message.author.bot) return;

     msg = message.content.toLowerCase();
  
//  if (msg.startsWith ("you better watch out")) {
//      message.channel.send ({files:["./images/3.png"]});
//    }
  
  if (msg.startsWith ("i love you yuki")) {
      return message.channel.send("I love you too, Satsujin. <:kissyface:407041007020933131>");
  }
  if (msg.startsWith ("yuppi") === 0) {
    return message.channel.send("Gakkyun");
  }

  if (msg.startsWith ("hey gays")) {
    return message.channel.send("—And Gaku.");
  }
  
  if (msg.startsWith ("i can't believe ryo is dead")) {
    return message.channel.send("Finally.");
  }

  if (msg.startsWith ("i'm gonna munch")) {
    return message.channel.send("I'm gonna crunch.");
  }

  if (msg.startsWith ("yuki if you're out there")) {
    return message.channel.send("I'm right here.");
  }

  if (msg.startsWith ("good morning yuki")) {
    return message.channel.send("Good morning. I wish I could sleep for 8 hours.");
  }

  if (msg.startsWith ("good night yuki")) {
    return message.channel.send("Good kids should head to sleep early.");
  }

  if (msg.startsWith ("pika~")) {
    return message.channel.send("Chu~ <:pika2:383925508683071498>");
  }
  
});

bot.on("message", async message => {
  if(message.author.box) return;
  if(message.channel.type === "dm") return;

  let prefix = 'y!';
  let messageArray = message.content.split( " ");
  let cmd = messageArray[0]
  let args = messageArray.slice(1);

  let commandfile = bot.commands.get(cmd.slice(prefix.length));
  if(commandfile) commandfile.run(bot,message,args);

  if(cmd ===`${prefix}botinfo`){

  let bicon = bot.user.displayAvatarURL;
  let botembed = new Discord.RichEmbed()
    .setDescription("Bot Information")
    .setColor("#00ff67")
    .setThumbnail(bicon)
    .addField("Bot Name", bot.user.username)

  return message. channel.send(botembed);
  }

  if(cmd === `${prefix}comfortme`){
    return message.channel.send("There, there");
  }
  
  if(cmd === `${prefix}mafia` || cmd === `${prefix}maf`){
    return message.channel.send("maf maf");
  }

  if(cmd === `${prefix}leaf`){
    return message.channel.send("Babe, that me leaf 🍃");
  }

  if(cmd === `${prefix}ryo`){
    return message.channel.send("Oh fuck. Bastard spotted.");
  }

  if(cmd === `${prefix}order`){
    return message.channel.send("We're fresh out of Yuki (lol) ");
  }

  if(cmd === `${prefix}car`){
    return message.channel.send("Papa, buy me a new car.");
  }

  if(cmd === `${prefix}crank`){
    return message.channel.send("We're going to have a secret intensive training session together.");
  }
  
  if(cmd === `${prefix}srank`){
    return message.channel.send("I’m going to imitate Momo. Yay~! You did it!");
  }
  
  if(cmd === `${prefix}arank`){
    return message.channel.send("Next time, I expect you to try harder.");
  }
  
    if(cmd === `${prefix}brank`){
    return message.channel.send("What’s wrong, that you can’t do something like this?");
  }
  
   if(cmd === `${prefix}ssrank`){
    return message.channel.send("As expected. I’m also pleased.");
  }
});

bot.login(process.env.token);
