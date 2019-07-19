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
  // bot.user.setActivity("My 10plate", {type:"LISTENING"});
    bot.user.setActivity("Oh No", {type:0});
});


  bot.on("message", async message => {
  // if (message.author.bot) return;
  if(message.channel.type === "dm") return;

  let prefix = 's!';
  let messageArray = message.content.split( " ");
  let cmd = messageArray[0]
  let args = messageArray.slice(1);

  let commandfile = bot.commands.get(cmd.slice(prefix.length));
  if(commandfile) commandfile.run(bot,message,args);

  mention = message.mentions.users.first();
  msg = message.content.toLowerCase();

  if(msg.startsWith (prefix + "quote")) {
     number = 35;
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
      case 10: message.channel.send ("I wasn't sure about what I like about myself... \nBut I think it's that there are so many things I care about. My fellow members, my friends from work, my favorite songs, my concert memories."); break;
      case 11: message.channel.send ("I like how happy I am when I'm surrounded by the things I love."); break;
      case 12: message.channel.send ("I was feeling a little restless, so I'm happy you messaged me."); break;
      case 13: message.channel.send ("I've been reminiscing about all that's happened up until now, too! Like the day I first came to Takanashi Productions."); break;
      case 15: message.channel.send ("Maybe I really am too much of a fanboy..."); break;
      case 16: message.channel.send ("In the world I used to live in, only those with the power to control large amounts of cash were taken seriously. I understand that it's not easy for someone to focus on each of us equally as you have done."); break;
      case 17: message.channel.send ("I'm really happy that everyone's speaking so  highly of me... It makes me feel that no matter how far I must go, I can keep going."); break;
      case 18: message.channel.send ("I'm perfectly fine with Re:vale casting magic on me!"); break;
      case 19: message.channel.send ("Now is a perfect time for me to put my book on dealing with teens to use."); break;
      case 20: message.channel.send ("There's a ton of things I want to be perfect at, but I'm still working on that. It's like I'm the very personification of the phrase \"Jack of all trades, master of mone\"..."); break;
      case 21: message.channel.send ("I tend to neglect my health by being too focused on work, and Yamato-san tells me using too much tabasco is ba for me, so I'm not sure if I know of anything that could help...."); break;
      case 22: message.channel.send ("Visiting Re:vale's golden show was a great experience. There's a great lot I could learn from them."); break;
      case 23: message.channel.send ("I was at a total loss when I realized I was talking to Tsunashi-san on the phone, during a live broadfast... It was such a shock that I fumbled my greeting..."); break;
      case 24: message.channel.send ("The burning light gave me the courage to step out into the road of dawn. If I hold onto this light I can go anywhere. When your feet freezes with fear, I will shine the light."); break;
      case 25: message.channel.send ("Thank you for always doing your best for us. We'll be sure to make it possible to meet your expectations, so I'm happy to give you my support from now on as well."); break;
      case 26: message.channel.send ("Thank you for always working hard for us. I’ll do my best to answer the expectations, so I'd be happy if you continued supporting us"); break;
      case 27: message.channel.send ("I'd have to know myself in order to make a song about myself... I thought I did, but I'm always learning new things when I'm with the others.\nI don't think I can make sogns about myself just yet. I'll have to make all kinds of songs before that."); break;
      case 28: message.channel.send ("\"Maybe\" is the best..."); break;
      case 29: message.channel.send ("This unbearable feeling of happiness and motivation is true bliss. I'm glad I found something I love. \nI'm glad I met friends who ackowledge the things I love.\nI think I'm too escited to sleep tonight."); break;
      case 30: message.channel.send ("I think my feelings may have changed quite a bit. I became an idol because it was my dream to do so, but back whe nI'd just joined IDOLiSH7, I don't think I understood myself, or what it meant to make my dream come true. \nI forgot what was really important, because I was only concerned with succeeding in the tasks given to me, and not causing anyone trouble. \nEven thought I'd supposedly become an idol to live true to myself."); break;
      case 31: message.channel.send ("Tonight we'll practive all night"); break;
      case 32: message.channel.send ("I wanted to do a bit more..."); break;
      case 33: message.channel.send ("I can still keep going!"); break;
      case 34: message.channel.send ("This is the best feeling ever!"); break;
      case 35: message.channel.send ("I was able to shine because of you."); break;
    }
   }

   if (msg.startsWith (prefix + "scout")) {
     number = 77;
     imageNumber = Math.floor (Math.random() * (number)) + 1;
     return message.channel.send ({files: ["./scout/" + imageNumber + ".png"]})
    }

   if(msg.startsWith (prefix + "smooch")) {
     if(message.author.id != "489991012949819392") return;
     return message.channel.send("Fufu... I'm getting a little embarrassed. I hope you don't mind if I return the favor~");
 }

   if (msg.startsWith (prefix + "send")) {
     if (mention == null) { return; }
     message.delete();
     mentionMessage = message.content.slice(6);
     mention.send (mentionMessage);
      }

   if (msg.startsWith ("i love you sougo")) {
     if(message.author.id != "489991012949819392") return;
     number = 7;
     var random = Math.floor (Math.random() * (number)) + 1;
     switch (random) {
        case 1: message.channel.send ("I love you too, Haru. Spending time with you is like a dream come true. I'm so happy!\n<:sougo:454123472256237600>"); break;
        case 2: message.channel.send ("If you would allow me to be selfish, I'd like to say that I love you more."); break;
        case 3: message.channel.send ("I really love you too. I'd like to nuture this feeling forever, and I hope you will keep loving me, too."); break;
        case 4: message.channel.send ("I'm not sure if I'm worthy enough for your affection... but it makes me happy that you think I am!"); break;
        case 5: message.channel.send ("Thank you, I feel comfortable spending time with you. <:sougo:454123472256237600>"); break;
        case 6: message.channel.send ("Lift your face, please. You'll regret it later if you don’t look me in the face now"); break;
        case 7: message.channel.send ("Thank you for caring about me, and loving me. I love you so much, too.\nLet's continue to make irreplacable memories together."); break;
    }
   }

   if (msg.startsWith ("good night sougo")) {
     number = 2;
    var random = Math.floor (Math.random() * (number)) + 1;
    switch (random) {
        case 1: message.channel.send ("Good night. I look forward to seeing you again tomorrow morning!"); break;
        case 2: message.channel.send ("If you're still awake, then maybe I'll stay up too."); break;
    }
   }

   if (msg.startsWith ("i would die for you sougo")) {
     message.react(`🔪`);
      return message.channel.send("You will.");
    }

   if (msg.startsWith ("good morning sougo")) {
     return message.channel.send("Good morning. Let's do our best today!");
    }

   if(cmd === `${prefix}mafia` || cmd === `${prefix}maf`){
    return message.channel.send("maf maf");
    }

   if(msg.startsWith (prefix + "tiddy")) {
    return message.channel.send ("Tsunashi-san!", {files:["./images/icons306.png"]});
    }

   if(msg.startsWith (prefix + "dickgrab")) {
    return message.channel.send ("Sorry Tsunashi-san if this looks gay to the viewers.", {files:["./images/dickgrab.png"]});
    }

   if(msg.startsWith (prefix + "say")) {
     let botmessage = args.join(" ");
     message.delete().catch();
     return message.channel.send(botmessage);
    }

    if(cmd ===`${prefix}help`){
      let helpembed = new Discord.RichEmbed()
         .setDescription("Do not include < > when using commands. \nCommand phrases are not caps sensitive")
         .setColor("#825aae")
         .addField("Commands:","**s!sougo** *<question>* | Ask him anything. \n**s!send** *<@user> <message>* | Send a DM to the mentioned user\n**s!scout** | Solo Yolo \n**s!quote** | Random quote\n**s!say** *<message>* | Have the bot say anything you want\ns!cards | List of cards")
         .addField("Basic s!commands:", "mafia (alias:maf) | smooch | tiddy")
         .addField("Command phrases:", "I love you Sougo | I would die for you Sougo | Good morning Sougo | Good night Sougo")
      return message.channel.send(helpembed);
     }

     if (msg.startsWith (prefix + "cards")) {
       let cardsembed = new Discord.RichEmbed()
         .setDescription("Command usage: y!cardname")
         .setColor("#825aae")
         .addField("SSRs:", "12 Songs Gift\nAinana Roman\nAinana Police | alt: police\nSwaying on the Manami Railway | alt: bno\nConnected Feelings\nDear Butterfly\nGrand Extermination Operation + secret\nHalloween\nIndoor Festival\nLOVE&GAME | alt: l&g\nMemoMelo\nNanatsuiro REALiZE\nOFF/Travel | alt: off\nOutdoor Festival\nRespo\nSakura Message\nSweets\nValetine\nValentine Great Escape | alt : vge\nValentine Live\nWhite Special day | alt: white sp\nWork",true)
         .addField("SSRs:", "Ainana academy | alt: academy\nBirthday Photobook\nChristmas\nCyber Techno | alt: vae \nDay Off\nEnd of Year Live\nHoliday Collection\nJoker Flag\nLight Future\nMonster\nNew Year\nOrdinary Days\nPerfection Gimmick | alt: pg\nPhotogenic Life\nRabbit Ears Parka\nRoad to Infinity | alt: rti\nSummer Memories\nTea Party\nWhite Day\nWinter Wonderland Trip\nXmas Magic\nXmax Rock\nZodiac",true)
         .addField("Ichiban Kuji:", "Celestial Pilgrimage | alt: hoshi\nHappy Sparkle Star | alt: sparkle\nKing Pudding\nMarchen Dream\nMechanical Lullaby | alt: mlullaby\nOrder Please\nWhite Side\nWonderland in the Dark | alt:wonderland\n",true)
         .addField("URs:", "Outdoor Festival\nUnit\nMusic in your Thoughts | alt: walker\nWish Voyage",true)
         .addField("Others", "Album Bonus\nShuffle Talk \n Shuffle Talk 2018")
         .setFooter("add sr/r to the end for other rarities. (ex: y!ordinary sr)");
       return message.channel.send(cardsembed);
     }

});

    bot.on("message", function(message) {
    msg = message.content.toLowerCase();
    if(!msg.startsWith(prefix)) return;
    var args = message.content.substring(prefix.length).split();

    switch (args[0].toLowerCase()) {
// UR cards
      case "outdoor festival":
      case "outdoor":
        return message.channel.send ({files:["./images/cards/ur/outdoor_fes.png"]});
      break;
      case "unit":
        return message.channel.send ({files:["./images/cards/ur/unit.png"]});
      break;
      case "music in your thoughts":
      case "walker":
        return message.channel.send ({files:["./images/cards/ur/walker.png"]});
      break;
      case "wish voyage":
      case "wish":
        return message.channel.send ({files:["./images/cards/ur/wish_voyage.png"]});
      break;
// Ichiban Kuji Cards
      case "celestial pilgrimage":
      case "celestial":
      case "hoshi":
      case "vega":
        return message.channel.send ({files:["./images/cards/ichiban/celestial.png"]});
      break;
      case "mechanical lullaby":
      case "mlullaby":
        return message.channel.send ({files:["./images/cards/ichiban/mechalulla.png"]});
      break;
      case "king pudding":
        return message.channel.send ({files:["./images/cards/ichiban/king_pudding.png"]});
      break;
      case "marchen dream":
      case "marchen":
        return message.channel.send ({files:["./images/cards/ichiban/marchen.png"]});
      break;
      case "happy sparkle star":
      case "sparkle":
        return message.channel.send ({files:["./images/cards/ichiban/sparkle.png"]});
      break;
      case "white side":
        return message.channel.send ({files:["./images/cards/ichiban/white_side.png"]});
      break;
      case "wonderland in the dark":
      case "wonderland":
        return message.channel.send ({files:["./images/cards/ichiban/wonderland_in_the_dark.png"]});
      break;
// Other cards
      case "album abonus":
      case "album":
        return message.channel.send ({files:["./images/cards/ichiban/album_bonus.png"]});
      break;
      case "shufle talk":
      case "shuffle":
        return message.channel.send ({files:["./images/cards/ichiban/shuffle_talk.png"]});
      break;
      case "shuffle talk 2018":
      case "shuffle 2018":
        return message.channel.send ({files:["./images/cards/ichiban/shuffle_talk_18.png"]});
      break;
// R cards
      case "ainana academy r":
      case "academy r":
        return message.channel.send ({files:["./images/cards/r/academy.png"]});
      break;
      case "ordinary days r":
      case "ordinary r":
        return message.channel.send ({files:["./images/cards/r/ordinary_days.png"]});
      break;
      case "ainana police r":
      case "police r":
        return message.channel.send ({files:["./images/cards/r/police.png"]});
      break;
// SR cards
    case "12_songs_gift sr":
    case "12 songs sr":
      return message.channel.send ({files:["./images/cards/sr/12_songs.png"]});
    break;
    case "ainana academy sr":
    case "academy sr":
      return message.channel.send ({files:["./images/cards/sr/academy.png"]});
    break;
    case "birthday photobook sr":
    case "photobook sr":
      return message.channel.send ({files:["./images/cards/sr/birthday_photobook.png"]});
    break;
    case "end of year life sr":
    case "end of year sr":
      return message.channel.send ({files:["./images/cards/sr/end_of_year.png"]});
    break;
    case "halloween sr":
      return message.channel.send ({files:["./images/cards/sr/halloween.png"]});
    break;
    case "memomelo sr":
      return message.channel.send ({files:["./images/cards/sr/memomelo.png"]});
    break;
    case "monster sr":
      return message.channel.send ({files:["./images/cards/sr/monster.png"]});
    break;
    case "police sr":
      return message.channel.send ({files:["./images/cards/sr/police.png"]});
    break;
    case "rabbit ears parka sr":
    case "rabbit ears sr":
      return message.channel.send ({files:["./images/cards/sr/rabbit_ears.png"]});
    break;
    case "sakura message sr":
      return message.channel.send ({files:["./images/cards/sr/sakura_message.png"]});
    break;
    case "white special day sr":
    case "white sp sr":
      return message.channel.send ({files:["./images/cards/sr/white_special_day.png"]});
    break;
    case "winter wonderland trip sr":
    case "winter wonderland sr":
      return message.channel.send ({files:["./images/cards/sr/winter_wonderland.png"]});
    break;
    case "work sr":
      return message.channel.send ({files:["./images/cards/sr/work.png"]});
    break;
// SSR Cards
      case "12 songs gift":
      case "12 songs":
        return message.channel.send ({files:["./images/cards/ssr/12_songs.png"]});
      break;
      case "ainana academy":
      case "academy":
        return message.channel.send ({files:["./images/cards/ssr/academy.png"]});
      break;
      case "ainana roman":
      case "taisho roman":
      case "taisho":
        return message.channel.send ({files:["./images/cards/ssr/ainana_roman.png"]});
      break;
      case "birthday photobook":
      case "photobook":
        return message.channel.send ({files:["./images/cards/ssr/birthday_photobook.png"]});
      break;
      case "bno":
      case "swaying on the manami railway":
        return message.channel.send ({files:["./images/cards/ssr/bno.png"]});
      break;
      case "christmas":
        return message.channel.send ({files:["./images/cards/ssr/christmas.png"]});
      break;
      case "connected feelings":
      case "connected":
        return message.channel.send ({files:["./images/cards/ssr/connected.png"]});
      break;
      case "day off":
        return message.channel.send ({files:["./images/cards/ssr/day_off.png"]});
      break;
      case "dear_butterfly":
        return message.channel.send ({files:["./images/cards/ssr/dear_butterfly.png"]});
      break;
      case "end of year life":
      case "end of year":
        return message.channel.send ({files:["./images/cards/ssr/end_of_year.png"]});
      break;
      case "grand extermination pperation":
      case "extermination":
        return message.channel.send ({files:["./images/cards/ssr/extermination.png"]});
      break;
      case "grand extermination pperation secret":
      case "extermination secret":
        return message.channel.send ({files:["./images/cards/ssr/extermination_secret.png"]});
      break;
      case "valentine great escape":
      case "vge":
        return message.channel.send ({files:["./images/cards/ssr/great_escape.png"]});
      break;
      case "halloween":
        return message.channel.send ({files:["./images/cards/ssr/halloween.png"]});
      break;
      case "holiday collection":
        return message.channel.send ({files:["./images/cards/ssr/holiday_collection.png"]});
      break;
      case "indoor festival":
      case "indoor":
        return message.channel.send ({files:["./images/cards/ssr/indoor_fes.png"]});
      break;
      case "joker flag":
      case "joker":
        return message.channel.send ({files:["./images/cards/ssr/joker_flag.png"]});
      break;
      case "love&game":
      case "l&g":
        return message.channel.send ({files:["./images/cards/ssr/l_g.png"]});
      break;
      case "light future":
        return message.channel.send ({files:["./images/cards/ssr/light_future.png"]});
      break;
      case "memomelo":
        return message.channel.send ({files:["./images/cards/ssr/memomelo.png"]});
      break;
      case "monster":
      return message.channel.send ({files:["./images/cards/ssr/monster.png"]});
      break;
      case "nanatsuiro":
      case "nanatsuiro realize":
        return message.channel.send ({files:["./images/cards/ssr/nanatsuiro.png"]});
      break;
      case "new year":
        return message.channel.send ({files:["./images/cards/ssr/new_year.png"]});
      break;
      case "off/travel":
      case "off":
        return message.channel.send ({files:["./images/cards/ssr/off.png"]});
      break;
      case "ordinary days":
      case "ordinary":
        return message.channel.send ({files:["./images/cards/ssr/ordinary_days.png"]});
      break;
      case "outdoor festival":
      case "outdoor":
        return message.channel.send ({files:["./images/cards/ssr/outdoor_fes.png"]});
      break;
      case "perfection gimmick":
      case "pg":
        return message.channel.send ({files:["./images/cards/ssr/p_g.png"]});
      break;
      case "photogenic life":
      case "photogenic":
        return message.channel.send ({files:["./images/cards/ssr/photogenic_life.png"]});
      break;
      case "ainana police":
      case "police":
        return message.channel.send ({files:["./images/cards/ssr/police.png"]});
      break;
      case "rabbit ears parka":
      case "rabbit ears":
        return message.channel.send ({files:["./images/cards/ssr/rabbit_ears.png"]});
      break;
      case "respo":
        return message.channel.send ({files:["./images/cards/ssr/respo.png"]});
      break;
      case "road to infinity":
      case "rti":
        return message.channel.send ({files:["./images/cards/ssr/rti.png"]});
      break;
      case "sakura message":
        return message.channel.send ({files:["./images/cards/ssr/sakura_message.png"]});
      break;
      case "summer memories":
        return message.channel.send ({files:["./images/cards/ssr/summer_memories.png"]});
      break;
      case "sweets":
        return message.channel.send ({files:["./images/cards/ssr/sweets.png"]});
      break;
      case "tea party":
      case "tea":
        return message.channel.send ({files:["./images/cards/ssr/tea_party.png"]});
      break;
      case "unit ssr":
        return message.channel.send ({files:["./images/cards/ssr/unit.png"]});
      break;
      case "cyber techno":
      case "vae":
        return message.channel.send ({files:["./images/cards/ssr/vae.png"]});
      break;
      case "valentine":
        return message.channel.send ({files:["./images/cards/ssr/valentine.png"]});
      break;
      case "valentine live":
        return message.channel.send ({files:["./images/cards/ssr/valentine_live.png"]});
      break;
      case "white day":
        return message.channel.send ({files:["./images/cards/ssr/white_day.png"]});
      break;
      case "white special day":
      case "white sp":
        return message.channel.send ({files:["./images/cards/ssr/white_special_day.png"]});
      break;
      case "winter wonderland trip":
      case "winter wonderland":
        return message.channel.send ({files:["./images/cards/ssr/winter_wonderland.png"]});
      break;
      case "work":
        return message.channel.send ({files:["./images/cards/ssr/work.png"]});
      break;
      case "xmas magic":
        return message.channel.send ({files:["./images/cards/ssr/xmas_magic.png"]});
        break;
        case "xmas rock":
        return message.channel.send ({files:["./images/cards/ssr/xmas_rock.png"]});
      break;
      case "zodiac":
        return message.channel.send ({files:["./images/cards/ssr/zodiac.png"]});
      break;
  }
});

bot.login(process.env.token);
