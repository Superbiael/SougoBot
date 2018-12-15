const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});
const fs = require("fs");
const prefix = "s!";
bot.commands = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {

  if(err) console.log(err);
  let jsfile = files.filter(f => f.split(".").pop() === "js");
  if(jsfile.length <= 0){
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
  bot.user.setActivity("My 10plate", {type:"LISTENING"});
});


bot.on('message', message => {
  if (message.author.bot) return;
  if(message.channel.type === "dm") return;

  let prefix = 's!';
  let messageArray = message.content.split( " ");
  let cmd = messageArray[0]
  let args = messageArray.slice(1);

  let commandfile = bot.commands.get(cmd.slice(prefix.length));
  if(commandfile) commandfile.run(bot,message,args);

    let botschannel = message.guild.channels.find(`name`, "bot-channel");
    if(!botschannel) return;

  mention = message.mentions.users.first();
  msg = message.content.toLowerCase();

  if(msg.startsWith (prefix + "quote")) {
     number = 35;
     var random = Math.floor (Math.random() * (number)) + 1;
     switch (random) {
        case 1: botschannel.send ("I wonder if you’ll watch over me from by my side."); break;
      case 2: botschannel.send ("I'm glad that I didn't give up on my dreams."); break;
      case 3: botschannel.send ("I want to become a little bit more manly."); break;
      case 4: botschannel.send ("While you were busy fucking around, I studied the blade."); break;
      case 5: botschannel.send ("I'll have Yamato-san and Mitsuki-san educate me on how to be sexy again."); break;
      case 6: botschannel.send ("I'm seeing the word *HELL* all around me."); break;
      case 7: botschannel.send ("This is so nice. I hope we'll be able to keep going like this. Since I used to collect TRIGGER's merchandise a lot, seeing people wearing ours made me feel nostalgic."); break;
      case 8: botschannel.send ("I wonder if it's alright for me to be this happy..."); break;
      case 9: botschannel.send ("There's a certain kind of pepper that's said to be the spiciest in the world. I'd like to try it."); break;
      case 10: botschannel.send ("I wasn't sure about what I like about myself... \nBut I think it's that there are so many things I care about. My fellow members, my friends from work, my favorite songs, my concert memories."); break;
      case 11: botschannel.send ("I like how happy I am when I'm surrounded by the things I love."); break;
      case 12: botschannel.send ("I was feeling a little restless, so I'm happy you messaged me."); break;
      case 13: botschannel.send ("I've been reminiscing about all that's happened up until now, too! Like the day I first came to Takanashi Productions."); break;
      case 15: botschannel.send ("Maybe I really am too much of a fanboy..."); break;
      case 16: botschannel.send ("In the world I used to live in, only those with the power to control large amounts of cash were taken seriously. I understand that it's not easy for someone to focus on each of us equally as you have done."); break;
      case 17: botschannel.send ("I'm really happy that everyone's speaking so  highly of me... It makes me feel that no matter how far I must go, I can keep going."); break;
      case 18: botschannel.send ("I'm perfectly fine with Re:vale casting magic on me!"); break;
      case 19: botschannel.send ("Now is a perfect time for me to put my book on dealing with teens to use."); break;
      case 20: botschannel.send ("There's a ton of things I want to be perfect at, but I'm still working on that. It's like I'm the very personification of the phrase \"Jack of all trades, master of mone\"..."); break;
      case 21: botschannel.send ("I tend to neglect my health by being too focused on work, and Yamato-san tells me using too much tabasco is ba for me, so I'm not sure if I know of anything that could help...."); break;
      case 22: botschannel.send ("Visiting Re:vale's golden show was a great experience. There's a great lot I could learn from them."); break;
      case 23: botschannel.send ("I was at a total loss when I realized I was talking to Tsunashi-san on the phone, during a live broadfast... It was such a shock that I fumbled my greeting..."); break;
      case 24: botschannel.send ("The burning light gave me the courage to step out into the road of dawn. If I hold onto this light I can go anywhere. When your feet freezes with fear, I will shine the light."); break;
      case 25: botschannel.send ("Thank you for always doing your best for us. We'll be sure to make it possible to meet your expectations, so I'm happy to give you my support from now on as well."); break;
      case 26: botschannel.send ("Thank you for always working hard for us. I’ll do my best to answer the expectations, so I'd be happy if you continued supporting us"); break;
      case 27: botschannel.send ("I'd have to know myself in order to make a song about myself... I thought I did, but I'm always learning new things when I'm with the others.\nI don't think I can make sogns about myself just yet. I'll have to make all kinds of songs before that."); break;
      case 28: botschannel.send ("\"Maybe\" is the best..."); break;
      case 29: botschannel.send ("This unbearable feeling of happiness and motivation is true bliss. I'm glad I found something I love. \nI'm glad I met friends who ackowledge the things I love.\nI think I'm too escited to sleep tonight."); break;
      case 30: botschannel.send ("I think my feelings may have changed quite a bit. I became an idol because it was my dream to do so, but back whe nI'd just joined IDOLiSH7, I don't think I understood myself, or what it meant to make my dream come true. \nI forgot what was really important, because I was only concerned with succeeding in the tasks given to me, and not causing anyone trouble. \nEven thought I'd supposedly become an idol to live true to myself."); break;
      case 31: botschannel.send ("Tonight we'll practive all night"); break;
      case 32: botschannel.send ("I wanted to do a bit more..."); break;
      case 33: botschannel.send ("I can still keep going!"); break;
      case 34: botschannel.send ("This is the best feeling ever!"); break;
      case 35: botschannel.send ("I was able to shine because of you."); break;
    }
   }

//    if (msg.startsWith (prefix + "scout")) {
//      number = 72;
//      imageNumber = Math.floor (Math.random() * (number)) + 1;
//      return botschannel.send ({files: ["./scout/" + imageNumber + ".png"]})
//     }

   if (msg.startsWith (prefix + "scout")) {
    return botschannel.send ({files:["./scout/72.png"]});
  }
  
   if(msg.startsWith (prefix + "smooch")) {
     if(message.author.id != "239834856727642121") return;
     return botschannel.send("Fufu... I'm getting a little embarrassed. I hope you don't mind if I return the favor~");
 }

   if (msg.startsWith (prefix + "send")) {
     if (mention == null) { return; }
     message.delete();
     mentionMessage = message.content.slice(6);
     mention.send (mentionMessage);
      }

   if (msg.startsWith ("i love you sougo")) {
     if(message.author.id != "239834856727642121") return;
     number = 7;
     var random = Math.floor (Math.random() * (number)) + 1;
     switch (random) {
        case 1: botschannel.send ("I love you too, Haru. Spending time with you is like a dream come true. I'm so happy!\n<:sougo:454123472256237600>"); break;
        case 2: botschannel.send ("If you would allow me to be selfish, I'd like to say that I love you more."); break;
        case 3: botschannel.send ("I really love you too. I'd like to nuture this feeling forever, and I hope you will keep loving me, too."); break;
        case 4: botschannel.send ("I'm not sure if I'm worthy enough for your affection... but it makes me happy that you think I am!"); break;
        case 5: botschannel.send ("Thank you, I feel comfortable spending time with you. <:sougo:454123472256237600>"); break;
        case 6: botschannel.send ("Lift your face, please. You'll regret it later if you don’t look me in the face now"); break;
        case 7: botschannel.send ("Thank you for caring about me, and loving me. I love you so much, too.\nLet's continue to make irreplacable memories together."); break;
    }
   }

   if(cmd ===`${prefix}help`){
     let helpembed = new Discord.RichEmbed()
        .setDescription("Do not include < > when using commands. \nCommand phrases are not caps sensitive")
        .setColor("#825aae")
        .addField("Commands:","**s!sougo** *<question>* | Ask him anything. \n**s!send** *<@user> <message>* | Send a DM to the mentioned user\n**s!scout** | Solo Yolo \n**s!quote** | Random quote\n**s!say** *<message>* | Have the bot say anything you want\n**s!help** | Displays this help message")
        .addField("Basic s!commands:", "mafia (alias:maf) || smooch || tiddy")
        .addField("Command phrases:", "I love you Sougo || I would die for you Sougo || Good morning Sougo || Good night Sougo")
     return botschannel.send(helpembed);
    }

   if (msg.startsWith ("good night sougo")) {
     number = 2;
    var random = Math.floor (Math.random() * (number)) + 1;
    switch (random) {
        case 1: botschannel.send ("Good night. I look forward to seeing you again tomorrow morning!"); break;
        case 2: botschannel.send ("If you're still awake, then maybe I'll stay up too."); break;
    }
   }

   if (msg.startsWith (prefix + "cat")) {
    return botschannel.send ({files:["./images/nya.png"]});
  }
  
   if (msg.startsWith ("i would die for you sougo")) {
     message.react(`🔪`);
      return botschannel.send("You will.");
    }

   if (msg.startsWith ("good morning sougo")) {
     return botschannel.send("Good morning. Let's do our best today!");
    }

   if(cmd === `${prefix}mafia` || cmd === `${prefix}maf`){
    return botschannel.send("maf maf");
    }

   if(msg.startsWith (prefix + "tiddy")) {
    return botschannel.send ("Tsunashi-san!", {files:["./images/icons306.png"]});
    }

   if(msg.startsWith (prefix + "dickgrab")) {
    return botschannel.send ("Sorry Tsunashi-san if this looks gay to the viewers.", {files:["./images/dickgrab.png"]});
    }

   if(msg.startsWith (prefix + "say")) {
     let botmessage = args.join(" ");
     message.delete().catch();
     return message.channel.send(botmessage);
    }
});

bot.login(process.env.token);
