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
  bot.user.setActivity("Oh No", {type:0});
});

bot.on('message', message => {
  if (message.author.bot) return;
  // if(message.channel.type === "dm") return;

  let prefix = 's!';
  let messageArray = message.content.split( " ");
  let cmd = messageArray[0]
  let args = messageArray.slice(1);

  let commandfile = bot.commands.get(cmd.slice(prefix.length));
  if(commandfile) commandfile.run(bot,message,args);

    mention = message.mentions.users.first();
    msg = message.content.toLowerCase();
 
     if(msg.startsWith (prefix + "quote")) {
       number = 18;
       var random = Math.floor (Math.random() * (number)) + 1;
       switch (random) {
         case 1: message.channel.send ("I wonder if you’ll watch over me from by my side."); break;
         case 2: message.channel.send ("I'm glad that I didn't give up on my dreams."); break;
         case 3: message.channel.send ("I want to become a little bit more manly."); break;
         case 4: message.channel.send ("While you were busy fucking around, I studied the blade."); break;
         case 5: message.channel.send ("I'll have Yamato-san and Mitsuki-san educate me on how to be sexy again."); break;
         case 6: message.channel.send ("I'm seeing the word *HELL* all around me."); break;
         case 7: message.channel.send ("This is so nice. I hope we'll be able to keep going like this. Since I used to collect TRIGGER's merchandise a lot, seeing people wearing ours made me feel nostalgic."); break;
         case 8: message.channel.send ("I wonder if it's alright for me to be this happy..."); break;
         case 9: message.channel.send ("There's a certain kind of pepper that's said to be the spiciest in the world. I'd like to try it."); break;
         case 10: message.channel.send ("I wasn't sure abotu what I like about myself... \nBut I think it's that there are so many things I care about. My fellow members, my friends from work, my favorite songs, my concert memories."); break;
         case 11: message.channel.send ("I like how happy I am when I'm surrounded by the things I love."); break;
         case 12: message.channel.send ("I was feeling a little restless, so I'm happy you messaged me."); break;
         case 13: message.channel.send ("I've been reminiscing about all that's happened up until now, too! Like the day I first came to Takanashi Productions."); break;
         case 15: message.channel.send ("Maybe I really am too much of a fanboy..."); break;
         case 16: message.channel.send ("In the world I used to live in, only those with the power to control large amounts of cash were taken seriously. I understand that it's not easy for someone to focus on each of us equally as you have done."); break;
         case 17: message.channel.send ("I'm really happy that everyone's speaking so  highly of me... It makes me feel that no matter how far I must go, I can keep going."); break;
         case 18: message.channel.send ("I'm perfect fine with Re:vale casting magic on me!"); break;
      }
    }
  
    if(msg.startsWith (prefix + "scout")) {
      number = 66;
      var random = Math.floor (Math.random() * (number)) + 1;
      switch (random) {
        case 1: message.channel.send ({files:["./images/soug_xmasmagic_ssr.png"]}); break;
        case 2: message.channel.send ({files:["./images/sougo_ainanapolice_r.png"]}); break;
        case 3: message.channel.send ({files:["./images/sougo_ainanapolice_sr.png"]}); break;
        case 4: message.channel.send ({files:["./images/sougo_ainanapolice_ssr.png"]}); break;
        case 5: message.channel.send ({files:["./images/sougo_dayoff_ssr.png"]}); break;
        case 6: message.channel.send ({files:["./images/sougo_marchen_ssr.png"]}); break;
        case 7: message.channel.send ({files:["./images/sougo_mlullaby_ssr.png"]}); break;
        case 8: message.channel.send ({files:["./images/sougo_sweets_ssr.png"]}); break;
        case 9: message.channel.send ({files:["./images/sougo_unit_ssr.png"]}); break;
        case 10:message.channel.send ({files:["./images/sougo_unit_ur.png"]}); break;
        case 11:message.channel.send ({files:["./images/sougo_valentine_ssr.png"]}); break;
        case 12: message.channel.send ({files:["./images/sougo_whiteday_sr.png"]}); break;
        case 13: message.channel.send ({files:["./images/sougo_whiteday_ssr.png"]}); break;
        case 14: message.channel.send ({files:["./images/sougo_whiteside_ssr.png"]}); break;
        case 15:message.channel.send ({files:["./images/sougo_winterwonderland_sr.png"]}); break;
        case 16: message.channel.send ({files:["./images/sougo_winterwonderland_ssr.png"]}); break;
        case 17: message.channel.send ({files:["./images/sougo_wishvoyage_ur.png"]}); break;
        case 18: message.channel.send ({files:["./images/sougo_work_sr.png"]}); break;
        case 19:message.channel.send ({files:["./images/sougo_work_ssr.png"]}); break;
        case 20:message.channel.send ({files:["./images/sougo_album_ssr.png"]}); break;
        case 21:message.channel.send ({files:["./images/sougo_birthday_sr.png"]}); break;
        case 22:message.channel.send ({files:["./images/sougo_birthday_ssr.png"]}); break;
        case 23:message.channel.send ({files:["./images/sougo_endofyear_sr.png"]}); break;
        case 24:message.channel.send ({files:["./images/sougo_endofyear_ssr.png"]}); break;
        case 25:message.channel.send ({files:["./images/sougo_joker_ssr.png"]}); break;
        case 26:message.channel.send ({files:["./images/sougo_linkedfeelings_ssr.png"]}); break;
        case 27:message.channel.send ({files:["./images/sougo_lovegame_ssr.png"]}); break;
        case 28:message.channel.send ({files:["./images/sougo_monster_sr.png"]}); break;
        case 29:message.channel.send ({files:["./images/sougo_monster_ssr.png"]}); break;
        case 30:message.channel.send ({files:["./images/sougo_nanatsuirorealize_ssr.png"]}); break;
        case 31:message.channel.send ({files:["./images/sougo_ordinarydays_r.png"]}); break;
        case 32:message.channel.send ({files:["./images/sougo_ordinarydays_sr.png"]}); break;
        case 33:message.channel.send ({files:["./images/sougo_ordinarydays_ssr.png"]}); break;
        case 34:message.channel.send ({files:["./images/sougo_outdoorfes_ssr.png"]}); break;
        case 35:message.channel.send ({files:["./images/sougo_outdoorfes_ur.png"]}); break;
        case 36:message.channel.send ({files:["./images/sougo_summermemories_sr.png"]}); break;
        case 37:message.channel.send ({files:["./images/sougo_summermemories_ssr.png"]}); break;
        case 38:message.channel.send ({files:["./images/sougo_taisho_ssr.png"]}); break;
        case 39:message.channel.send ({files:["./images/sougo_whiteday_beat_ssr.png"]}); break;
        case 40:message.channel.send ({files:["./images/sougo_xmasrock_ssr.png"]}); break;
        case 41:message.channel.send ({files:["./images/sougo_zodiac_ssr.png"]}); break;
        case 42:message.channel.send ({files:["./images/sougo_academy_r.png"]}); break;
        case 43:message.channel.send ({files:["./images/sougo_academy_sr.png"]}); break;
        case 44:message.channel.send ({files:["./images/sougo_academy_ssr.png"]}); break;
        case 45:message.channel.send ({files:["./images/sougo_butterfly_ssr.png"]}); break;
        case 46:message.channel.send ({files:["./images/sougo_christmas_ssr.png"]}); break;
        case 47:message.channel.send ({files:["./images/sougo_halloween_sr.png"]}); break;
        case 48:message.channel.send ({files:["./images/sougo_halloween_ssr.png"]}); break;
        case 49:message.channel.send ({files:["./images/sougo_indoorfes_ssr.png"]}); break;
        case 50:message.channel.send ({files:["./images/sougo_kingpudding_ssr.png"]}); break;
        case 51:message.channel.send ({files:["./images/sougo_memomelo_sr.png"]}); break;
        case 52:message.channel.send ({files:["./images/sougo_memomelo_ssr.png"]}); break;
        case 53:message.channel.send ({files:["./images/sougo_newyear_ssr.png"]}); break;
        case 54:message.channel.send ({files:["./images/sougo_pg_ssr.png"]}); break;
        case 55:message.channel.send ({files:["./images/sougo_rabbit_sr.png"]}); break;
        case 56:message.channel.send ({files:["./images/sougo_rabbit_ssr.png"]}); break;
        case 57:message.channel.send ({files:["./images/sougo_respo_ssr.png"]}); break;
        case 58:message.channel.send ({files:["./images/sougo_sakuramessage_sr.png"]}); break;
        case 59:message.channel.send ({files:["./images/sougo_sakuramessage_ssr.png"]}); break;
        case 60:message.channel.send ({files:["./images/sougo_sparkle_ssr.png"]}); break;
        case 61:message.channel.send ({files:["./images/sougo_valentine_ssr.png"]}); break;
        case 62:message.channel.send ({files:["./images/sougo_work_ssr.png"]}); break;
        case 63:message.channel.send ({files:["./images/sougo_teagarden_ssr.png"]}); break;
        case 64:message.channel.send ({files:["./images/yukisougo_shufle_ssr.png"]}); break;
        case 65:message.channel.send ({files:["./images/sougo_12sg_sr.png"]}); break;
        case 66:message.channel.send ({files:["./images/sougo_12sg_ssr.png"]}); break;
      }
    }
  
  if (msg.startsWith (prefix + "send")) {
       if (mention == null) { return; }
        message.delete();
        mentionMessage = message.content.slice(6);
        mention.send (mentionMessage);
//        return message.channel.send("Message sent.");
      }
    
    if(msg.startsWith (prefix + "rank")) {
        number = 5;
        var random = Math.floor (Math.random() * (number)) + 1;
        switch (random) {
          case 1: message.channel.send ("Tonight we'll practive all night"); break;
          case 2: message.channel.send ("I wanted to do a bit more..."); break;
          case 3: message.channel.send ("I can still keep going!"); break;
          case 4: message.channel.send ("This is the best feeling ever!"); break;
          case 5: message.channel.send ("I was able to shine because of you."); break;
       }
     }
  
    if (msg.startsWith ("i love you sougo")) {
    if(message.author.id != "239834856727642121") return;
    number = 3;
    var random = Math.floor (Math.random() * (number)) + 1;
    switch (random) {
      case 1: message.channel.send ("I love you too, Haru. Spending time with you is like a dream come true. I'm so happy!"); break;
      case 2: message.channel.send ("If you would allow me to be selfish, I'd like to say that I love you more."); break;
      case 3: message.channel.send ("I really love you too. I'd like to nuture this feeling forever, and I hope you will keep loving me, too."); break;
   }
 }
  
    if (msg.startsWith ("i would die for you sougo")) {
      message.react(`🔪`);
      return message.channel.send("You will.");
    }
  
    if (msg.startsWith ("good morning sougo")) {
    return message.channel.send("Good morning. Let's do our best today!");
    }

    if (msg.startsWith ("good night sougo")) {
    return message.channel.send("Good night. I look forward to seeing you again tomorrow morning!");
    }
  
  if(cmd ===`${prefix}help`){
  let helpembed = new Discord.RichEmbed()
  .setDescription("Do not include < > when using commands. \nCommand phrases are not caps sensitive")
  .setColor("#825aae")
  .addField("Commands:","**s!sougo** *<question>* | Ask him anything. \n**s!send** *<@user> <message>* | Send a DM to the mentioned user\n**s!scout** | Solo Yolo \n**s!quote** | Random quote\n**s!say** *<message>* | Have the bot say anything you want\n**s!help** | Displays this help message")
  .addField("Basic s!commands:", "mafia (alias:maf) || smooch | rank || tiddy")
  .addField("Command phrases:", "I love you Sougo || I would die for you Sougo || Good morning Sougo || Good night Sougo")
  message.channel.send(helpembed);
}
  
  if(cmd ===`${prefix}botinfo`){
  let bicon = bot.user.displayAvatarURL;
  let botembed = new Discord.RichEmbed()
    .setDescription("Bot Information")
    .setColor("#825aae")
    .setThumbnail(bicon)
    .addField("Bot Name", bot.user.username)
    .addField("Twitter:", "https://twitter.com/Superbiael")
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

   if(cmd === `${prefix}dickgrab`){
    return message.channel.send ("Sorry Tsunashi-san if this looks gay to the viewers.", {files:["./images/dickgrab.png"]});
}
  
   if(cmd === `${prefix}tiddy`){
    return message.channel.send ("Tsunashi-san!", {files:["./images/icons306.png"]});
}

   if(cmd === `${prefix}say`){
  let botmessage = args.join(" ");
  message.delete().catch();
  message.channel.send(botmessage);
}
});

bot.login(process.env.token);
