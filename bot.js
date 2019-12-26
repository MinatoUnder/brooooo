const Discord = require('discord.js');                 
const db = require('quick.db');        
const client = new Discord.Client();                    
const giphy = require('giphy-api')();                              
const googl = require('goo.gl');           
const translate = require('google-translate-api');     
const fs = require("fs"); 
const getYoutubeID = require('get-youtube-id');                        
const moment = require("moment");                       
const { Client, Util } = require('discord.js');              
const UserBlocked = new Set();            
const jimp = require('jimp');   
const math = require('math-expression-evaluator'); 
const stripIndents = require('common-tags').stripIndents;
const figlet = require('figlet');
const google = require('google-it'); 
const queue = new Map(); 
const zalgo = require('zalgolize');   
const fetchVideoInfo = require('youtube-info');
const YouTube = require('simple-youtube-api');
const ytdl = require('ytdl-core');
const youtube = new YouTube("AIzaSyAdORXg7UZUo7sePv97JyoDqtQVi3Ll0b8");
const sql = require("sqlite");
 const dateFormat = require('dateformat'); 
 const pretty = require('pretty-ms') 
,ti={}  
,spee={};       
const prefix = '.';
                 
client.on('ready', () => {
  console.log('╔[════════════════════════════════════]╗');
  console.log('            ╔[════════════]╗')
  console.log('              Bot Is Online')
  console.log('            ╚[════════════]╝')
  console.log(`Logged in as ${client.user.tag}!`);   
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log('')
  console.log('By ThePrince')
  console.log('')  
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
});




 client.on('message', message => {
if(message.content.startsWith(prefix +'sug')) {
if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
      const A8tra7Room = message.guild.channels.find("name", "suggestions")
      if(!message.channel.guild) return message.reply(`هذا الأمر فقط ل السيرفرات :x:`);
   let a8tra7 = message.content.split(' ').slice(1).join(' ')
   var m8tr7 = message.author.id
if(!message.guild.channels.find("name","suggestions")) return message.channel.send('انشء روم باسم   \`suggestions \`')
   var ThxForSug = new Discord.RichEmbed()
      .setColor('WHITE')
   .setTitle(`:white_check_mark: Success!`)
   .setTimestamp()
   .setDescription(`شكراً على اقتراحك !`)
.setDescription(`**Your Suggestion** : ${a8tra7}`)
   var Sure = new Discord.RichEmbed()
   .setTimestamp()
      .setColor('WHITE')
   .setTitle(`هل انت متأكد من ارسال الاقتراح؟ معك دقيقه قبل الالغاء`)               
.setDescription(`Suggestion : **${a8tra7}**`)
		 .setFooter('Prince Bot' , client.user.avatarURL)
message.channel.sendEmbed(Sure).then(msg => {
    msg.react('❎')
.then(() => msg.react('✅'))

let YesFilter = (reaction, user) => reaction.emoji.name === '✅'  && user.id === message.author.id;
let NoFilter = (reaction, user) => reaction.emoji.name === '❎' && user.id === message.author.id;

let Yes = msg.createReactionCollector(YesFilter, { time: 60000 });
let No = msg.createReactionCollector(NoFilter, { time: 60000 });

Yes.on("collect", r => {
   var ala8tra7 = new Discord.RichEmbed()
   .setTimestamp()
   .setColor('GOLD')
   .setThumbnail(message.author.avatarURL)
   .setTitle(`New Suggestion :bell:`)
   .setDescription(`From : __<@${m8tr7}>__\n\nSuggestion: **${a8tra7}**`)
   .setFooter(`${message.author.username}#${message.author.discriminator}`)
   A8tra7Room.send(ala8tra7)
   message.channel.sendEmbed(ThxForSug).then(message => {message.delete(6000)})
msg.delete();
})
No.on("collect", r => {
message.channel.send('تم الغاء اقتراح بنجاح :white_check_mark: ').then(message => {message.delete(4000)})
msg.delete();
})
})
}			     
});                        
  

 
 
 
 
client.on("message", message => {
    var args = message.content.split(' ').slice(1);
    var msg = message.content.toLowerCase();
    if( !message.guild ) return;
    if( !msg.startsWith( prefix + 'role' ) ) return;
	    if (!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send(`:x: **| ${message.author.username} you need \`MANAGE_ROLES\` Permission to use this Command !**`)
    if(!message.guild.member(client.user).hasPermission('MANAGE_ROLES'))return message.channel.send(`**:x: | ${message.author.username}  I require the \`MANAGE_ROLES\` permission to give roles**`)
    if( msg.toLowerCase().startsWith( prefix + 'rerole ;' ) ){
        if( !args[0] ) return message.reply( '**:x: يرجى وضع الشخص المراد سحب منه الرتبة**' );
        if( !args[1] ) return message.reply( '**:x: يرجى وضع الرتبة المراد سحبها من الشخص**' );
        var role = msg.split(' ').slice(2).join(" ").toLowerCase();
        var role1 = message.guild.roles.filter( r=>r.name.toLowerCase().indexOf(role)>-1 ).first();
        if( !role1 ) return message.reply( '**:x: يرجى وضع الرتبة المراد سحبها من الشخص**' );if( message.mentions.members.first() ){
            message.mentions.members.first().removeRole( role1 );
            return message.reply('**:white_check_mark: [ '+role1.name+' ] رتبة [ '+args[0]+' ] تم سحب من **');
        }
        if( args[0].toLowerCase() == "all" ){
			    if (!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send(`:x: **| ${message.author.username} you need \`MANAGE_ROLES\` Permission to use this Command !**`)
    if(!message.guild.member(client.user).hasPermission('MANAGE_ROLES'))return message.channel.send(`**:x: | ${message.author.username}  I require the \`MANAGE_ROLES\` permission to give roles**`)
            message.guild.members.forEach(m=>m.removeRole( role1 ))
            return  message.reply('**:white_check_mark: [ '+role1.name+' ] تم سحب من الكل رتبة**');
        } else if( args[0].toLowerCase() == "bots" ){
            message.guild.members.filter(m=>m.user.bot).forEach(m=>m.removeRole(role1))
            return  message.reply('**:white_check_mark: [ '+role1.name+' ] تم سحب من البوتات رتبة**');
        } else if( args[0].toLowerCase() == "humans" ){
            message.guild.members.filter(m=>!m.user.bot).forEach(m=>m.removeRole(role1))
            return  message.reply('**:white_check_mark: [ '+role1.name+' ] تم سحب من البشريين رتبة**');
        }  
    } else {
        if( !args[0] ) return message.reply( '**:x: يرجى وضع الشخص المراد اعطائها الرتبة**' );
        if( !args[1] ) return message.reply( '**:x: يرجى وضع الرتبة المراد اعطائها للشخص**' );
        var role = msg.split(' ').slice(2).join(" ").toLowerCase();
        var role1 = message.guild.roles.filter( r=>r.name.toLowerCase().indexOf(role)>-1 ).first();
        if( !role1 ) return message.reply( '**:x: يرجى وضع الرتبة المراد اعطائها للشخص**' );if( message.mentions.members.first() ){
            message.mentions.members.first().addRole( role1 );
            return message.reply('** بواسطة  [ '+role1.name+' ] رتبة [ '+args[0]+' ] تم اعطاء **');
        }
        if( args[0].toLowerCase() == "all" ){
			    if (!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send(`:x: **| ${message.author.username} you need \`MANAGE_ROLES\` Permission to use this Command !**`)
    if(!message.guild.member(client.user).hasPermission('MANAGE_ROLES'))return message.channel.send(`**:x: | ${message.author.username}  I require the \`MANAGE_ROLES\` permission to give roles**`)
            message.guild.members.forEach(m=>m.addRole( role1 ))
            return  message.reply('** بواسطة  [ '+role1.name+' ] تم اعطاء الكل رتبة**');
        } else if( args[0].toLowerCase() == "bots" ){
            message.guild.members.filter(m=>m.user.bot).forEach(m=>m.addRole(role1))
            return  message.reply('** بواسطة  [ '+role1.name+' ] تم اعطاء البوتات رتبة**');
        } else if( args[0].toLowerCase() == "humans" ){
            message.guild.members.filter(m=>!m.user.bot).forEach(m=>m.addRole(role1))
            return  message.reply('** بواسطة  [ '+role1.name+' ] تم اعطاء البشريين رتبة**');
        }
    }
});





    client.on("guildMemberAdd", member => {
let welcomer = member.guild.channels.find("name","welcome");
      if(!welcomer) return;
      if(welcomer) {
         moment.locale('ar-ly');
         var h = member.user;
        let norelden = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(h.avatarURL)
        .setAuthor(h.username,h.avatarURL)
        .addField(': تاريخ دخولك الدسكورد',`${moment(member.user.createdAt).format('D/M/YYYY h:mm a')} **\n** \`${moment(member.user.createdAt).fromNow()}\``,true)
         .setFooter(`${h.tag}`,"https://images-ext-2.discordapp.net/external/JpyzxW2wMRG2874gSTdNTpC_q9AHl8x8V4SMmtRtlVk/https/orcid.org/sites/default/files/files/ID_symbol_B-W_128x128.gif")
     welcomer.send({embed:norelden});        
               
 
      }
    });

client.on('guildCreate', guild => {
  client.channels.get("469493683683590156")
const embed = new Discord.RichEmbed()
   .setAuthor(`Joined New Server ✅`)
   .setDescription(`
Server name: __${guild.name}__
Server owner: __${guild.owner}__
Guild Count : __${client.guilds.size}__`)
         .setColor("#09fa2a")
         .setFooter('Prince BOT' , client.user.avatarURL)
           client.channels.get("469493683683590156").send({embed});
}

);

         
client.on('guildDelete', guild => {
  client.channels.get("469493683683590156")
const embed = new Discord.RichEmbed()
   .setAuthor(`Left From Server ❌`)
   .setDescription(`
Server name: __${guild.name}__
Server owner: __${guild.owner}__
Guild Count : __${client.guilds.size}__`)
         .setColor("#ff0000")
         .setFooter('Prince BOT' , client.user.avatarURL)
           client.channels.get("469493683683590156").send({embed});
}

);





client.on('message', msg => {
  if (msg.content === 'برب') {
    msg.reply('تيت يا قلبي بس لا تطول');
  }   
}); 

 client.on('message', msg => {
  if (msg.content === 'هاي') {
    msg.reply('هايات');
  }
});
 
   




   client.on('message', message => {
    if(message.content === '.help') {
    let embed = new Discord.RichEmbed()
            .setColor("RANDOM")
            .setDescription(`**تفضل قائمة الأوامر**
            .help-admin = كل الأوامر الإدارية مع التفاصيل
            .help-music = قريبا...
            .help-games = كل الأوامر الألعاب مع التفاصيل 
            .support = للحصول على سيرفر الدعم
            `)

            message.channel.sendEmbed(embed);
    }

});

client.on("message", message => {
    if (message.content === ".help-admin") {
     const embed = new Discord.RichEmbed() 
         .setColor("#ffff00")
         .setFooter('Bot Owner : @The Prince#2981 ')
         .setThumbnail(message.author.avatarURL)
         .setDescription(`
      كل الأوامر الإدارية
	 
	  
  .help : لمعرفت كل الأوامر
  .invite : لدعوة البوت لسرفرك
  .support : :gear:  للحصول على رابط سرفر الدعم الخاص بالبوت :gear: 
  
  .id : الأيدي حقك
  .allroles : يعرض لك كل رتب السرفر بالترتيب
  .role @user [role-name] : يعطي الشخص الي منشنته رتبة

  .server : معلومات عن السرفر 
  .mute : إعطاء ميوت كتابي
  .unmute : إزالة الميوت
  .mutechannel : ميوت شانل
  .unmutechannel : فك الميوت عن الشانل
  .hchannel : يخفي الرووم يعني ولا احد يقدر يشوف الرووم
  .schannel : يزهر الرووم ويصير يقدر الكل يشوف الرووم
  .clear : لحذف الشات  
  .addrole : لإنشاء رتبة بالسيرفر

  .ban : إعطاء بان 
  .kick : إعطاء كيك      

  .members : يعرض لك حالت كل اعضاء السيرفر
  .image : لرأية شعار السرفر
  .ping : لرأية سرعة إتصال البوت
  .channelname : يغير إسم الرووم الي انت تكتب فيها
  
  إنشاء الله سيتم إضافت أوامر أخرى
  
  رابط إضافة البوت :  https://goo.gl/VddrDM 
  
Our Discord Serveur For Support : https://discord.gg/DNJ8Q2B


Bot Owner : @The Prince#2981 | <@314845344313901057>

   `)
   message.author.sendEmbed(embed)
   
   }
   }); 

client.on('message', message => {
     if(!message.channel.guild) return;
var prefix = ".";
                if(message.content.startsWith(prefix + 'allbots')) {

    
    if (message.author.bot) return;
    let i = 1;
        const botssize = message.guild.members.filter(m=>m.user.bot).map(m=>`${i++} - <@${m.id}>`);
          const embed = new Discord.RichEmbed()
          .setAuthor(message.author.tag, message.author.avatarURL)
          .setDescription(`**Found ${message.guild.members.filter(m=>m.user.bot).size} bots in this Server**
${botssize.join('\n')}`)
.setFooter(client.user.username, client.user.avatarURL)
.setTimestamp();
message.channel.send(embed)

}


});



client.on("message", message => {
    if (message.content === ".games") {
     const embed = new Discord.RichEmbed()           
         .setColor("#ffff00")
         .setFooter('Bot Owner : @The Prince#2981 ')
         .setThumbnail(message.author.avatarURL)
         .setDescription(`
  
     َ  **-----Games Commands-----**

  .rps : لعبة حجرة ورقة مقص :video_game: 
  .sara7a : لبدأ لعبة الصراحة :video_game: 
  .cuttweet : لبدأ لعبة كت تويت :video_game: 
  .reverse (الكلام الي تبي تعكسه ) :video_game: 
  .emoji : يحول كلامك لإيموجي :video_game: 
  .mention : لعبة منشن لي شخص :video_game: 
  .cal : الألة الحاسبة  :video_game: 
  .لعبة العقاب العشوائي : عقاب  :video_game: 
  .kiki : لعبة Kiki Do You Love Me [New!!!]

  **إنشاء الله سيتم إضافت أوامر أخرى**...      
  
  رابط إضافة البوت :  https://goo.gl/VddrDM  
Our Discord Serveur For Support : https://discord.gg/DNJ8Q2B
Bot Owner : @The Prince#2981 | <@314845344313901057>

   `)
   message.author.sendEmbed(embed)
   
   }
   }); 
   
   client.on("message", message => {
    if (message.content === ".help-games") {
     const embed = new Discord.RichEmbed()           
         .setColor("#ffff00")
         .setFooter('Bot Owner : @The Prince#2981 ')
         .setThumbnail(message.author.avatarURL)
         .setDescription(`
  
     َ  **-----Games Commands-----**

  .rps : لعبة حجرة ورقة مقص :video_game: 
  .sara7a : لبدأ لعبة الصراحة :video_game: 
  .cuttweet : لبدأ لعبة كت تويت :video_game: 
  .reverse (الكلام الي تبي تعكسه ) :video_game: 
  .emoji : يحول كلامك لإيموجي :video_game: 
  .mention : لعبة منشن لي شخص :video_game: 
  .cal : الألة الحاسبة  :video_game: 
  .لعبة العقاب العشوائي : عقاب  :video_game: 
  .kiki : لعبة Kiki Do You Love Me [New!!!]

  **إنشاء الله سيتم إضافت أوامر أخرى**...      
  
  رابط إضافة البوت :  https://goo.gl/VddrDM  
Our Discord Serveur For Support : https://discord.gg/DNJ8Q2B
Bot Owner : @The Prince#2981 | <@314845344313901057>

   `)
   message.author.sendEmbed(embed)
   
   }
   }); 





   client.on('message', message => {
     if (message.content === ".support") {
     let embed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor("#9B59B6")
  .addField(" ** :gear: Server Support **" , "  ** https://discord.gg/DNJ8Q2B  **")
     
     
     
  message.channel.sendEmbed(embed);
    }
});

client.on('message', message => {
     if (message.content === ".invite") {
	let embed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor("#9B59B6")
  .addField(" **INVITE LINK : https://goo.gl/VddrDM **"," Prince Bot ")
     
     
     
  message.channel.sendEmbed(embed);
    }
});
 
client.on('message', message => {
     if (message.content === ".inv") {
	let embed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor("#9B59B6")
  .addField(" **INVITE LINK : https://goo.gl/VddrDM **"," Prince Bot ")
     
     
     
  message.channel.sendEmbed(embed);
    }
});

 
client.on('message', message => {
     if (message.content === ".add") {
	let embed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor("#9B59B6")
  .addField(" **INVITE LINK : https://goo.gl/VddrDM **"," Prince Bot ")
     
     
     
  message.channel.sendEmbed(embed);
    }
});


client.on('message', message => {
	    var prefix = ".";
  if (!message.content.startsWith(prefix)) return;
  const verifed = ["314845344313901057"];
if (message.content.startsWith(prefix + 'owner')) {
if( verifed.some(word => message.author.id.includes(word)) ) {    return message.channel.sendMessage(`**انت صاحب البوت تم اثبات ملكية البوت لكـ**` + `:white_check_mark:`)
} else {
   message.reply('**انت لست صاحب البوت** ' + ':x:');   
}
}
});



client.on('message', message => {
  if (message.content.startsWith(".avatar")) {

      var mentionned = message.mentions.users.first();
  var client;
    if(mentionned){
        var client = mentionned;
    } else {
        var client = message.author;
        
    }
      const embed = new Discord.RichEmbed()
      .setColor("RANDOM")
        .setAuthor(message.author.username, message.author.avatarURL)
      .setImage(`${client.avatarURL}`)
    message.channel.sendEmbed(embed);

  }
});


const Sra7a = [
     'صراحه  |  صوتك حلوة؟',
     'صراحه  |  التقيت الناس مع وجوهين؟',
     'صراحه  |  شيء وكنت تحقق اللسان؟',
     'صراحه  |  أنا شخص ضعيف عندما؟',
     'صراحه  |  هل ترغب في إظهار حبك ومرفق لشخص أو رؤية هذا الضعف؟',
     'صراحه  |  يدل على أن الكذب مرات تكون ضرورية شي؟',
     'صراحه  |  أشعر بالوحدة على الرغم من أنني تحيط بك كثيرا؟',
     'صراحه  |  كيفية الكشف عن من يكمن عليك؟',
     'صراحه  |  إذا حاول شخص ما أن يكرهه أن يقترب منك ويهتم بك تعطيه فرصة؟',
     'صراحه  |  أشجع شيء حلو في حياتك؟',
     'صراحه  |  طريقة جيدة يقنع حتى لو كانت الفكرة خاطئة" توافق؟',
     'صراحه  |  كيف تتصرف مع من يسيئون فهمك ويأخذ على ذهنه ثم ينتظر أن يرفض؟',
     'صراحه  |  التغيير العادي عندما يكون الشخص الذي يحبه؟',
     'صراحه  |  المواقف الصعبة تضعف لك ولا ترفع؟',
     'صراحه  |  نظرة و يفسد الصداقة؟',
     'صراحه  |  ‏‏إذا أحد قالك كلام سيء بالغالب وش تكون ردة فعلك؟',
     'صراحه  |  شخص معك بالحلوه والمُره؟',
     'صراحه  |  ‏هل تحب إظهار حبك وتعلقك بالشخص أم ترى ذلك ضعف؟',
     'صراحه  |  تأخذ بكلام اللي ينصحك ولا تسوي اللي تبي؟',
     'صراحه  |  وش تتمنى الناس تعرف عليك؟',
     'صراحه  |  ابيع المجرة عشان؟',
     'صراحه  |  أحيانا احس ان الناس ، كمل؟',
     'صراحه  |  مع مين ودك تنام اليوم؟',
     'صراحه  |  صدفة العمر الحلوة هي اني؟',
     'صراحه  |  الكُره العظيم دايم يجي بعد حُب قوي " تتفق؟',
     'صراحه  |  صفة تحبها في نفسك؟',
     'صراحه  |  ‏الفقر فقر العقول ليس الجيوب " ، تتفق؟',
     'صراحه  |  تصلي صلواتك الخمس كلها؟',
     'صراحه  |  ‏تجامل أحد على راحتك؟',
     'صراحه  |  اشجع شيء سويتة بحياتك؟',
     'صراحه  |  وش ناوي تسوي اليوم؟',
     'صراحه  |  وش شعورك لما تشوف المطر؟',
     'صراحه  |  غيرتك هاديه ولا تسوي مشاكل؟',
     'صراحه  |  ما اكثر شي ندمن عليه؟',
     'صراحه  |  اي الدول تتمنى ان تزورها؟',
     'صراحه  |  متى اخر مره بكيت؟',
     'صراحه  |  تقيم حظك ؟ من عشره؟',
     'صراحه  |  هل تعتقد ان حظك سيئ؟',
     'صراحه  |  شـخــص تتمنــي الإنتقــام منـــه؟',
     'صراحه  |  كلمة تود سماعها كل يوم؟',
     'صراحه  |  **هل تُتقن عملك أم تشعر بالممل؟',
     'صراحه  |  هل قمت بانتحال أحد الشخصيات لتكذب على من حولك؟',
     'صراحه  |  متى آخر مرة قمت بعمل مُشكلة كبيرة وتسببت في خسائر؟',
     'صراحه  |  ما هو اسوأ خبر سمعته بحياتك؟',
     '‏صراحه | هل جرحت شخص تحبه من قبل ؟',
     'صراحه  |  ما هي العادة التي تُحب أن تبتعد عنها؟',
     '‏صراحه | هل تحب عائلتك ام تكرههم؟',
     '‏صراحه  |  من هو الشخص الذي يأتي في قلبك بعد الله – سبحانه وتعالى- ورسوله الكريم – صلى الله عليه وسلم؟',
     '‏صراحه  |  هل خجلت من نفسك من قبل؟',
     '‏صراحه  |  ما هو ا الحلم  الذي لم تستطيع ان تحققه؟',
     '‏صراحه  |  ما هو الشخص الذي تحلم به كل ليلة؟',
     '‏صراحه  |  هل تعرضت إلى موقف مُحرج جعلك تكره صاحبهُ؟',
	  '‏صراحه  |  هل قمت بالبكاء أمام من تُحب؟',
     '‏صراحه  |  ماذا تختار حبيبك أم صديقك؟',
     '‏صراحه  | هل حياتك سعيدة أم حزينة؟',
     'صراحه  |  ما هي أجمل سنة عشتها بحياتك؟',
     '‏صراحه  |  ما هو عمرك الحقيقي؟',
     '‏صراحه  |  ما اكثر شي ندمن عليه؟',
	 'صراحه  |  ما هي أمنياتك المُستقبلية؟‏',
]
   client.on('message', message => {
 if (message.content.startsWith('.sara7a')) {
     if(!message.channel.guild) return message.reply('** This command only for servers **');
  var client= new Discord.RichEmbed()
  .setTitle("لعبة صراحة ..")
  .setColor('RANDOM')
  .setDescription(`${Sra7a[Math.floor(Math.random() * Sra7a.length)]}`)
  .setImage("https://cdn.discordapp.com/attachments/371269161470525444/384103927060234242/125.png")
                  .setTimestamp()
//By iFzx
   message.channel.sendEmbed(client);
   message.react("By iFzx")
 }
});


 const cuttweet = [
     'كت تويت ‏| تخيّل لو أنك سترسم شيء وحيد فيصبح حقيقة، ماذا سترسم؟',
     'كت تويت | أكثر شيء يُسكِت الطفل برأيك؟',
     'كت تويت | الحرية لـ ... ؟',
     'كت تويت | قناة الكرتون المفضلة في طفولتك؟',
     'كت تويت ‏| كلمة للصُداع؟',
     'كت تويت ‏| ما الشيء الذي يُفارقك؟',
     'كت تويت | موقف مميز فعلته مع شخص ولا يزال يذكره لك؟',
     'كت تويت ‏| أيهما ينتصر، الكبرياء أم الحب؟',
     'كت تويت | بعد ١٠ سنين ايش بتكون ؟',
     'كت تويت ‏| مِن أغرب وأجمل الأسماء التي مرت عليك؟',
     '‏كت تويت | عمرك شلت مصيبة عن شخص برغبتك ؟',
     'كت تويت | أكثر سؤال وجِّه إليك مؤخرًا؟',
     '‏كت تويت | ما هو الشيء الذي يجعلك تشعر بالخوف؟',
     '‏كت تويت | وش يفسد الصداقة؟',
     '‏كت تويت | شخص لاترفض له طلبا ؟',
     '‏كت تويت | كم مره خسرت شخص تحبه؟.',
     '‏كت تويت | كيف تتعامل مع الاشخاص السلبيين ؟',
     '‏كت تويت | كلمة تشعر بالخجل اذا قيلت لك؟',
     '‏كت تويت | جسمك اكبر من عٌمرك او العكسّ ؟!',
     '‏كت تويت |أقوى كذبة مشت عليك ؟',
     '‏كت تويت | تتأثر بدموع شخص يبكي قدامك قبل تعرف السبب ؟',
     'كت تويت | هل حدث وضحيت من أجل شخصٍ أحببت؟',
     '‏كت تويت | أكثر تطبيق تستخدمه مؤخرًا؟',
     '‏كت تويت | ‏اكثر شي يرضيك اذا زعلت بدون تفكير ؟',
     '‏كت تويت | وش محتاج عشان تكون مبسوط ؟',
     '‏كت تويت | مطلبك الوحيد الحين ؟',
     '‏كت تويت | هل حدث وشعرت بأنك ارتكبت أحد الذنوب أثناء الصيام؟',
]

 client.on('message', message => {
   if (message.content.startsWith(".cuttweet")) {
                if(!message.channel.guild) return message.reply('** This command only for servers**');
  var embed = new Discord.RichEmbed()
  .setColor('RANDOM')
   .setThumbnail(message.author.avatarURL) 
 .addField('لعبه كت تويت' ,
  `${cuttweet[Math.floor(Math.random() * cuttweet.length)]}`)
  message.channel.sendEmbed(embed);
  console.log('[id] Send By:  ' + message.author.username)
    }
});



client.on('message', message => {
			    var prefix = ".";
var args = message.content.split(" ").slice(1);    
if(message.content.startsWith(prefix + 'id')) {
var year = message.author.createdAt.getFullYear()
var month = message.author.createdAt.getMonth()
var day = message.author.createdAt.getDate()
var men = message.mentions.users.first();  
let args = message.content.split(' ').slice(1).join(' ');
if (args == '') {
var z = message.author;
}else {
var z = message.mentions.users.first();
}

let d = z.createdAt;          
let n = d.toLocaleString();   
let x;                       
let y;                        

if (z.presence.game !== null) {
y = `${z.presence.game.name}`;
} else {
y = "No Playing... |💤.";
}
if (z.bot) {
var w = 'بوت';
}else {
var w = 'عضو';
}
let embed = new Discord.RichEmbed()
.setColor("#502faf")
.addField(':new_moon_with_face: | اسمك:',`**<@` + `${z.id}` + `>**`, true)
.addField(':id: | ايدي:', "**"+ `${z.id}` +"**",true)
.addField('♨| Playing:','**'+y+'**' , true)
.addField('🤖| نوع حسابك:',"**"+ w + "**",true)    
.addField('📛| الكود حق حسابك:',"**#" +  `${z.discriminator}**`,true)
.addField('**التاريح الذي انشئ فيه حسابك | 📆 **: ' ,year + "-"+ month +"-"+ day)    
.addField("**تاريخ دخولك للسيرفر| ⌚   :**", message.member.joinedAt.toLocaleString())    

.addField('**⌚ | تاريخ انشاء حسابك الكامل:**', message.author.createdAt.toLocaleString())
.addField("**اخر رسالة لك | 💬  :**", message.author.lastMessage)            

.setThumbnail(`${z.avatarURL}`)
.setFooter(message.author.username, message.author.avatarURL)

message.channel.send({embed});
    if (!message) return message.reply('**ضع المينشان بشكل صحيح  ❌ **').catch(console.error);

}

});







client.on('message', message => {
    if(message.content == '.members') {
    const embed = new Discord.RichEmbed()
    .setDescription(`**Members info
اونلاين:   ${message.guild.members.filter(m=>m.presence.status == 'online').size}
ممنوع الازعاج:       ${message.guild.members.filter(m=>m.presence.status == 'dnd').size}
اصفر:      ${message.guild.members.filter(m=>m.presence.status == 'idle').size}   
قافلين:   ${message.guild.members.filter(m=>m.presence.status == 'offline').size} 
الجميع:  ${message.guild.memberCount}**`)   
         message.channel.send({embed});
    }
});



client.on("message", message => {
  if (message.author.bot) return;
  
  let command = message.content.split(" ")[0];
  
  if (command === ".mute") {
        if (!message.member.hasPermission('MANAGE_ROLES')) return message.reply("** لا يوجد لديك برمشن 'Manage Roles' **").catch(console.error);
  let user = message.mentions.users.first();
  let modlog = client.channels.find('name', 'mute-log');
  let muteRole = client.guilds.get(message.guild.id).roles.find('name', 'Muted');
  if (!muteRole) return message.reply("** لا يوجد رتبة الميوت 'Muted' **").catch(console.error);
  if (message.mentions.users.size < 1) return message.reply('** يجب عليك منشنت شخص اولاً**').catch(console.error);
  
  const embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .addField('الأستعمال:', 'اسكت/احكي')
    .addField('تم ميوت:', `${user.username}#${user.discriminator} (${user.id})`)
    .addField('بواسطة:', `${message.author.username}#${message.author.discriminator}`)
   
   if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply('** لا يوجد لدي برمشن Manage Roles **').catch(console.error);
 
  if (message.guild.member(user).roles.has(muteRole.id)) {
return message.reply("**:white_check_mark: .. تم اعطاء العضو ميوت**").catch(console.error);
} else {
    message.guild.member(user).addRole(muteRole).then(() => {
return message.reply("**:white_check_mark: .. تم اعطاء العضو ميوت كتابي**").catch(console.error);
});
  }

};

});



client.on("message", message => {
  if (message.author.bot) return;
  
  let command = message.content.split(" ")[0];
  
  if (command === ".unmute") {
        if (!message.member.hasPermission('MANAGE_ROLES')) return message.reply("** لا يوجد لديك برمشن 'Manage Roles' **").catch(console.error);
  let user = message.mentions.users.first();
  let modlog = client.channels.find('name', 'mute-log');
  let muteRole = client.guilds.get(message.guild.id).roles.find('name', 'Muted');
  if (!muteRole) return message.reply("** لا يوجد لديك رتبه الميوت 'Muted' **").catch(console.error);
  if (message.mentions.users.size < 1) return message.reply('** يجب عليك منشنت شخص اولاً**').catch(console.error);
  const embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .addField('الأستعمال:', 'اسكت/احكي')
    .addField('تم فك الميوت عن:', `${user.username}#${user.discriminator} (${user.id})`)
    .addField('بواسطة:', `${message.author.username}#${message.author.discriminator}`)

  if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply('** لا يوجد لدي برمشن Manage Roles **').catch(console.error);

  if (message.guild.member(user).removeRole(muteRole.id)) {
return message.reply("**:white_check_mark: .. تم فك الميوت عن الشخص **").catch(console.error);
} else {
    message.guild.member(user).removeRole(muteRole).then(() => {
return message.reply("**:white_check_mark: .. تم فك الميوت عن الشخص **").catch(console.error);
});
  }

};

});




client.on('message', message => {
    if (message.author.bot) return;
    if (message.content.indexOf('.reverse') === 0) {
        var text = message.content.substring(1);
        var reversed = '';
        var i = text.length;
        while (i > 0) {
            reversed += text.substring(i - 1, i);
            i--;
        }
        message.reply(reversed);
    }
});



  client.on("message", message => {
    const prefix = "."
              
          if(!message.channel.guild) return;
   if(message.author.Prince) return;
      if(message.content === prefix + "image"){ 
          const embed = new Discord.RichEmbed()
  
      .setTitle(`This is  ** ${message.guild.name} **  Photo !`)
  .setAuthor(message.author.username, message.guild.iconrURL)
    .setColor(0xffffff)
    .setImage(message.guild.iconURL)
    .setURL(message.guild.iconrURL)
                    .setTimestamp()

   message.channel.send({embed});
      }
  });


client.on('message', function(msg) {
         var prefix = "."
    if(msg.content.startsWith (prefix  + 'server')) {
      let embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setThumbnail(msg.guild.iconURL)
      .setTitle(`Showing Details Of  **${msg.guild.name}*`)
      .addField(':globe_with_meridians:** نوع السيرفر**',`[** __${msg.guild.region}__ **]`,true)
      .addField(':medal:** __الرتب__**',`[** __${msg.guild.roles.size}__ **]`,true)
      .addField(':red_circle:**__ عدد الاعضاء__**',`[** __${msg.guild.memberCount}__ **]`,true)
      .addField(':large_blue_circle:**__ عدد الاعضاء الاونلاين__**',`[** __${msg.guild.members.filter(m=>m.presence.status == 'online').size}__ **]`,true)
      .addField(':pencil:**__ الرومات الكتابية__**',`[** __${msg.guild.channels.filter(m => m.type === 'text').size}__** ]`,true)
      .addField(':microphone:**__ رومات الصوت__**',`[** __${msg.guild.channels.filter(m => m.type === 'voice').size}__ **]`,true)
      .addField(':crown:**__ الأونـر__**',`**${msg.guild.owner}**`,true)
      .addField(':id:**__ ايدي السيرفر__**',`**${msg.guild.id}**`,true)
      .addField(':date:**__ تم عمل السيرفر في__**',msg.guild.createdAt.toLocaleString())
      msg.channel.send({embed:embed});
    }
  });


client.on('message', message => {
    if (message.content.startsWith(".stats")) {
    message.channel.send({
        embed: new Discord.RichEmbed()
            .addField('Uptime', timeCon(process.uptime()), true)
            .addField('RAM Usage', `${(process.memoryUsage().rss / 1048576).toFixed()}MB`, true)
            .addField('Guild Count', client.guilds.size, true)
    })
}
});

function timeCon(time) {
    let days = Math.floor(time % 31536000 / 86400)
    let hours = Math.floor(time % 31536000 % 86400 / 3600)
    let minutes = Math.floor(time % 31536000 % 86400 % 3600 / 60)
    let seconds = Math.round(time % 31536000 % 86400 % 3600 % 60)
    days = days > 9 ? days : '0' + days
    hours = hours > 9 ? hours : '0' + hours
    minutes = minutes > 9 ? minutes : '0' + minutes
    seconds = seconds > 9 ? seconds : '0' + seconds
    return `${days > 0 ? `${days}:` : ''}${(hours || days) > 0 ? `${hours}:` : ''}${minutes}:${seconds}`
}


 


client.on('message', message => {
    if(message.content.includes('discord.gg')){
                                            if(!message.channel.guild) return message.reply('** advertising me on DM ? :thinking:   **');
        if (!message.member.hasPermissions(['ADMINISTRATOR'])){
        message.delete()
    return message.reply(`** Not allowed to advertising Here :angry: ! **`)
    }
}
});

client.on('message',function(message) {
                  if(!message.channel.guild) return;

  const prefix = ".";
                    if (message.content === prefix + "discrim") {
    let messageArray = message.content.split(" ");
    let args = messageArray.slice(1);
    
    if (message.author.bot) return;
    
    var discri = args[0]
    let discrim
    if(discri){
    discrim = discri;
    }else{
    discrim = message.author.discriminator;
    }
    if(discrim.length == 1){
        discrim = "000"+discrim
    }
    if(discrim.length == 2){
        discrim = "00"+discrim
    }
    if(discrim.length == 3){
        discrim = "0"+discrim
    }

        const users = client.users.filter(user => user.discriminator === discrim).map(user => user.username);
        return message.channel.send(`
            **Found ${users.length} users with the discriminator #${discrim}**
            ${users.join('\n')}
        `);

/*if(command == "emoji-img"){
        let emojis = msg.guild.emojis
  msg.channel.send({ files: [emoji.url] });
}*/
}
});






client.on('message', message => {
    if (message.author.id === client.user.id) return;
    if (message.content === '.ping') {
        message.channel.sendMessage(':ping_pong: Pong! In `' + `${client.ping}` + ' ms`');
    }
});


client.on('message', message => {
     if (message.content === "...bot") {
            if(!message.channel.guild) return message.reply('** This command only for servers **');
     let embed = new Discord.RichEmbed()
  .setColor('RANDOM')
  .addField(" **اسم السيرفر** ", message.guild.name)
  .addField(" **عدد السيرفرات الي فيها البوت:** " , client.guilds.size)
  .addField(" **المستخدمين:** ", client.users.size)
  .addField(" **قنوات:** ", client.channels.size)
message.channel.sendEmbed(embed);
    }
});



client.on('message', message => {

  if (message.content === ".sug") {
  if (!message.channel.guild) return;
  let args = message.content.split(" ").slice(1).join(' ');
  client.users.get("314845344313901057").send(
      "\n" + "**" + "● السيرفر :" + "**" +
      "\n" + "**" + "» " + message.guild.name + "**" +
      "\n" + "**" + " ● المرسل : " + "**" +
      "\n" + "**" + "» " + message.author.tag + "**" +
      "\n" + "**" + " ● الرسالة : " + "**" +
      "\n" + "**" + args + "**")
  }
  });




client.on('message', message =>{
    if(message.content == "role"){
        var roles = '',
        ros=message.guild.roles.size,
        role = [];
        for(let i =0;i<ros;i++){
            if(message.guild.roles.array()[i].id !== message.guild.id){
  role.push(message.guild.roles.filter(r => r.position == ros-i).map(r => `${i}- ${r.name}`));  
        }}
        message.channel.send(role.join("\n"));
    }
});






client.on("message",  message => {
    var prefix = ".";
    let args = message.content.split(' ').slice(1);
if(message.content.startsWith(prefix + 'nickname')) {
   if (!message.member.hasPermission("MANAGE_NICKNAMES")) {
       message.channel.send("ضع الاسم")
   } else {
       if (!message.guild.member(client.user).hasPermission('MANAGE_NICKNAMES')) return message.reply(' ❌البوت ما عنده خاصية MANAGE_NICKNAMES.').catch(console.error);
       let changenick = message.mentions.users.first();
       let username = args.slice(1).join(' ')
       if (username.length < 1) return message.reply('ضع الاسم').catch(console.error);
       if (message.mentions.users.size < 1) return message.author.send('You must mention a user to change their nickname. ❌').catch(console.error);
       message.guild.member(changenick.id).setNickname(username);
       message.channel.send("تم تغيير الاسم الى: " + changenick + "")
   }
}});



client.on('message', message => {
    if (message.content === ".croles") {
    if(!message.channel.guild) return message.channel.send('**This Command Only For Servers !**')
            if (!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send(`**${message.author.username} You Dont Have** ``MANAGE_ROLES`` **Premission**`);

                     message.guild.createRole({ name: "Owner", color: "#ec00d9", permissions: [] })
                     message.guild.createRole({ name: "Co-Owner", color: "#ec0064", permissions: [] })
                     message.guild.createRole({ name: "Leader", color: "#310b3f", permissions: [] })
                     message.guild.createRole({ name: "Staff", color: "#00deee", permissions: [] })
                     message.guild.createRole({ name: "Queen", color: "#f7008e", permissions: [] })
                     message.guild.createRole({ name: "Support", color: "#b8cf1a", permissions: [] })
                     message.guild.createRole({ name: "MVP+", color: "#ddf700", permissions: [] })
                     message.guild.createRole({ name: "MVP", color: "#00f7d9", permissions: [] })
                     message.guild.createRole({ name: "VIP+", color: "#07c740", permissions: [] })
                     message.guild.createRole({ name: "VIP", color: "#75b167", permissions: [] })
                     message.guild.createRole({ name: "Active", color: "#bd9c11", permissions: [] })
                     message.guild.createRole({ name: "Members", color: "#ffffff", permissions: [] })
        

message.channel.sendMessage('**الرجاء الانتظار ريث ما يتم صناعه الرتب بدون برمشنات**')
}
});

client.on('message', message => {
    if (message.content === ".crooms") {
    if(!message.channel.guild) return message.channel.send('**This Command Only For Servers !**')
            if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.channel.send(`**${message.author.username} You Dont Have** ``MANAGE_CHANNELS`` **Premission**`);

        
     message.guild.createChannel('「 O W N E R 」', 'voice')
     message.guild.createChannel('「 C O - L E A D E R 」', 'voice')
     message.guild.createChannel('「ADMINSTRATOR」', 'voice')
     message.guild.createChannel('𖦲₁PARTY | بارتي𖦲', 'voice')
     message.guild.createChannel('𖦲₂PARTY | بارتي𖦲', 'voice')
     message.guild.createChannel('𖦲₂PARTY | بارتي𖦲', 'voice')
     message.guild.createChannel('✬ʝuşτ-1✬', 'voice')
     message.guild.createChannel('✬ʝuşτ-2✬', 'voice')
     message.guild.createChannel('✬ʝuşτ-3✬', 'voice')
     message.guild.createChannel('✬ʝuşτ-4✬', 'voice')
     message.guild.createChannel('✬ʝuşτ-5✬', 'voice')
     message.guild.createChannel('😴sleep', 'voice')
     message.guild.createChannel('༆كَبّـآرَ آلَشّـخٌـصِـيّآتُ༆', 'voice')
     message.guild.createChannel('welcome', 'text')
     message.guild.createChannel('info', 'text')
     message.guild.createChannel('bot', 'text')
     message.guild.createChannel('chat', 'text')
     message.guild.createChannel('Youtube', 'text')
     message.guild.createChannel('bo7', 'text')
     message.guild.createChannel('party', 'text')
     message.guild.createChannel('pic', 'text')


message.channel.sendMessage('**الرجاء الانتظار ريث ما يتم صناعة الرومات  بدون برمشن**')
}
});


client.on('message', function(message) {
    const myID = "314845344313901057";
    let args = message.content.split(" ").slice(1).join(" ");
    if(message.content.startsWith(prefix + "setname")) {
                if(message.author.id !== myID) return;
            if(!args) return message.reply('اكتب الحالة اللي تريدها.');
        client.user.setUsername(args);
        message.channel.send(':white_check_mark: Done!').then(msg => {
           msg.delete(5000);
          message.delete(5000);
        });
    } else if(message.content.startsWith(prefix + "setstream")) {
                if(message.author.id !== myID) return;
            if(!args) return message.reply('اكتب الحالة اللي تريدها.');
        client.user.setGame(args , 'https://twitch.tv/6xlez1');
        message.channel.send(':white_check_mark: Done!').then(msg => {
           msg.delete(5000);
          message.delete(5000);
        });
    } else if(message.content.startsWith(prefix + "setplay")) {
                        if(message.author.id !== myID) return;
            if(!args) return message.reply('اكتب الحالة اللي تريدها.');
        client.user.setGame(args);
        message.channel.send(':white_check_mark: Done!').then(msg => {
           msg.delete(5000);
          message.delete(5000);
        });
    } else if(message.content.startsWith(prefix + "setlisten")) {
                        if(message.author.id !== myID) return;
            if(!args) return message.reply('اكتب الحالة اللي تريدها.');
        client.user.setActivity(args, {type:'LISTENING'});
        message.channel.send(':white_check_mark: Done!').then(msg => {
           msg.delete(5000);
          message.delete(5000);
        });
    } else if(message.content.startsWith(prefix + "setwatch")) {
                        if(message.author.id !== myID) return;
            if(!args) return message.reply('اكتب الحالة اللي تريدها.');
        client.user.setActivity(args, {type:'WATCHING'});
        message.channel.send(':white_check_mark: Done!').then(msg => {
           msg.delete(5000);
          message.delete(5000);
        });
    } else if(message.content.startsWith(prefix + "setavatar")) {
                        if(message.author.id !== myID) return;
        client.user.setAvatar(args);
        message.channel.send(':white_check_mark: Done!').then(msg => {
                if(!args) return message.reply('اكتب الحالة اللي تريدها.');
           msg.delete(5000);
          message.delete(5000);
        });
    }
});


  client.on("message", message => {
    var prefix = "."; 
 
            var args = message.content.substring(prefix.length).split(" ");
            if (message.content.startsWith(prefix + "clear")) {
   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('⚠ | **ليس لديك صلاحيات**');
        var msg;
        msg = parseInt();
      
      message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
      message.channel.sendMessage("", {embed: {
        title: "** :white_check_mark: Done | تــم**",
        color: 0x06DF00,
        description: "تم مسح الرسائل بنجاح",
        footer: {
          text: "Prince Bot" // غير هنا حط اسم البوت
        }
      }}).then(msg => {msg.delete(3000)});
                          }

     
});


  

   client.on('message', message => {
     if (message.content === ".prince") {
     let embed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor("#fffc00")
  .addField(" **هلا انا برنس بوت بوت عربي شامل طبعا فريق البوت يشتغل على إضافة المزيد من الاوامر لإسعاددكم و مساعدتكم لإيجاد كل ما حتاجونه في بوتنا شكرا لإهتمامك بالبوت لإضافتي إلى سيرفرك اكتب .invite :heart:  **", " Prince Bot ")

         
  message.channel.sendEmbed(embed);
    }
});




client.on('message', message => {
if (message.content.startsWith(".addrole")) {
             if(!message.channel.guild) return message.reply('**Commands in the server**');
        if (!message.member.hasPermission('MANAGE_ROLES')) return message.reply('⚠ **You do not have permissions**');
        let args = message.content.split(" ").slice(1);
            message.guild.createRole({
                name : args.join(' '),
                color : "RANDOM", 
            }).then(function(role){
                message.member.addRole(role)
            })

}
});


client.on('message', msg => {
  if (msg.content === 'prince') {
    msg.reply('هلا انا برنس بوت بوت عربي شامل طبعا فريق البوت يشتغل على إضافة المزيد من الاوامر لإسعاددكم و مساعدتكم لإيجاد كل ما تحتاجونه في بوتنا شكرا لإحتمامك بالبوت لإضافتي إلى سيرفرك اكتب .invite :heart:  ');
  }
});


client.on('message', message => {
    if (message.content.startsWith("رابط")) {

  message.channel.createInvite({
        thing: true,
        maxUses: 100,
        maxAge: 86400
    }).then(invite =>
      message.author.sendMessage(invite.url)
    )
    const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setDescription(" ** ✅    تم ارسال الرابط على الخاص  **")
      message.channel.sendEmbed(embed).then(message => {message.delete(10000)})
              const Embed11 = new Discord.RichEmbed()
        .setColor("RANDOM")
                .setAuthor(message.guild.name, message.guild.iconURL)
        .setDescription(`
**

-${message.guild.name}  Link
**`)
      message.author.sendEmbed(Embed11)
    }
});

client.on('message',function(message) {
    let w = ['حجرة','ورقة','مقص'];
   if(message.content.startsWith(prefix + "rps")) {
       message.channel.send(`\`\`\`css
Choose one of the following.
#1 ( حجرة )
#2 ( ورقة )
#3 ( مقص )
\`\`\`

__**امامك  5 توان للاختيار**__`)
.then(() => {
  message.channel.awaitMessages(response => response.content === '1', {
    max: 1,
    time: 5000,
    errors: ['time'],
  })
  .then((collected) => {
      if(message.author !== message.author)return;
     message.channel.send('🏵 ' + w[Math.floor(Math.random() * w.length)]);
    });
});
  message.channel.awaitMessages(response => response.content === '2', {
    max: 1,
    time: 5000,
    errors: ['time'],
  })
  .then((collected) => {
     message.channel.send('🏵 ' + w[Math.floor(Math.random() * w.length)]);
    });
      message.channel.awaitMessages(response => response.content === '3', {
    max: 1,
    time: 5000,
    errors: ['time'],
  })
  .then((collected) => {
     message.channel.send('🏵 ' + w[Math.floor(Math.random() * w.length)]);
    });
   } 
});


client.on('ebnklb',function(ebnklb) {
    
    if(ebnklb.content.startsWith("<@463779411070812180>")) {
        ebnklb.channel.send('Hey Im **Prince Bot!**  A Nice Bot Developed By:`@The Prince#2981 `')
        ebnklb.channel.send('My Prefix `.`')

    }
});

       



const codes = {
    ' ': '   ',
    '0': '0⃣',
    '1': '1⃣',
    '2': '2⃣',
    '3': '3⃣',
    '4': '4⃣',
    '5': '5⃣',
    '6': '6⃣',
    '7': '7⃣',
    '8': '8⃣',
    '9': '9⃣',
    '!': '❕',
    '?': '❔',
    '#': '#⃣',
    '*': '*⃣'
  };
  
  'abcdefghijklmnopqrstuvwxyz'.split('').forEach(c => {
    codes[c] = codes[c.toUpperCase()] = ` :regional_indicator_${c}:`;
  });
  
  
  client.on('message' , async message => {
         if(message.content.startsWith(prefix + "emoji")) {
            let args = message.content.split(" ").slice(1);
    if (args.length < 1) {
      message.channel.send('You must provide some text to emojify!');
  }
  
  message.channel.send(
      args.join(' ')
          .split('')
          .map(c => codes[c] || c)
          .join('')
  );
  };
  });


	
	

client.on("message", async message => {
           let args = message.content.split(' ').slice(1)
if(message.content.startsWith(prefix + 'channelname')) {
    if (!args) return message.reply("مرجو كتابت اسم  الجديد للقناة");
  message.channel.setName(`${args}`)
  .then(newChannel => message.channel.send(`الاسم الجديد ***${args}***`))
  .catch(console.error);
};
   });

function timeCon(time) {
    let days = Math.floor(time % 31536000 / 86400)
    let hours = Math.floor(time % 31536000 % 86400 / 3600)
    let minutes = Math.floor(time % 31536000 % 86400 % 3600 / 60)
    let seconds = Math.round(time % 31536000 % 86400 % 3600 % 60)
    days = days > 9 ? days : '0' + days
    hours = hours > 9 ? hours : '0' + hours
    minutes = minutes > 9 ? minutes : '0' + minutes
    seconds = seconds > 9 ? seconds : '0' + seconds
    return `${days > 0 ? `${days}:` : ''}${(hours || days) > 0 ? `${hours}:` : ''}${minutes}:${seconds}`
}
client.on('message', message => {
    if (message.content.startsWith(".bot")) {
    message.channel.send({
        embed: new Discord.RichEmbed()
            .setAuthor(client.user.username,client.user.avatarURL)
            .setThumbnail(client.user.avatarURL)
            .setColor('RANDOM')
            .setTitle('``INFO : Prince Bot`` ')
            .addField('``Uptime``', [timeCon(process.uptime())], true)
            .addField('``My Ping``' , [`${Date.now() - message.createdTimestamp}` + 'MS'], true)
            .addField('``RAM Usage``', `[${(process.memoryUsage().rss / 1048576).toFixed()}MB]`, true)
            .addField('``servers``', [client.guilds.size], true)
            .addField('``channels``' , `[ ${client.channels.size} ]` , true)
            .addField('``Users``' ,`[ ${client.users.size} ]` , true)
            .addField('``My Name``' , `[ ${client.user.tag} ]` , true)
            .addField('``My ID``' , `[ ${client.user.id} ]` , true)
                  .addField('``My Prefix``' , `[ . ]` , true)
                  .addField('``My Language``' , `[ Java Script ]` , true)
                  .setFooter('By | The Prince')
    })
}
});

  
             
    


client.on('message', function(message) {
    if(message.content.startsWith(prefix + "report")) {
        let messageArgs = message.content.split(" ").slice(1).join(" ");
        let messageReason = message.content.split(" ").slice(2).join(" ");
        if(!messageReason) return message.reply("**منشن الشخص الذي تريد التبليغ عنه و اكتب السبب**");
    let mUser = message.mentions.users.first();
    if(!mUser) return message.channel.send("Couldn't find user.");
message.channel.send("__**هل أنت متأكد من أنك تريد إرسال هذا إلى صاحب السيرفر ؟؟**__").then(msg => {
    msg.react("✅")
    msg.react("❌")
.then(() => msg.react('❌'))
.then(() =>msg.react('✅'))
let reaction1Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;
    let Rembed = new Discord.RichEmbed()
    .setTitle("`New Report!`")
    .setThumbnail(message.author.avatarURL)
    .addField("**# - Reported User:**",mUser,true)
    .addField("**# - Reported User ID:**",mUser.id,true)
    .addField("**# - Reason:**",messageReason,true)
    .addField("**# - Channel:**",message.channel,true)
    .setFooter("لو ان الابلاغ فيه مزح راح يتعرض صاحب الابلاغ لقوبات")
message.channel.send(Rembed)

let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 10000 });
reaction1.on("collect", r => {
    `${message.guild.owner.send(Rembed)}`
    message.reply("**# - Done! 🎇**");
})
reaction2.on("collect", r => {
    message.reply("**# - Canceled!**");
})
})
}
});

client.on('message', message => {
if(!message.channel.guild) return;
if (message.content.startsWith(".ping")) {
    message.channel.sendMessage(`Pong ! \`${Date.now() - message.createdTimestamp} ms\`:watch:`);
    }
});



client.on('message', message => {

    if (message.content === ".mutechannel") {
                        if(!message.channel.guild) return message.reply(' This command only for servers');

if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(' ليس لديك صلاحيات');
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: false
           }).then(() => {
               message.reply("تم تقفيل الشات :white_check_mark: ")
           });
             }
if (message.content === ".unmutechannel") {
    if(!message.channel.guild) return message.reply(' This command only for servers');

if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('ليس لديك صلاحيات');
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: true

           }).then(() => {
               message.reply("تم فتح الشات:white_check_mark:")
           });
             }



});





  client.on('message', message => {
if(message.content == '<@314845344313901057>') {
message.channel.startTyping()
setTimeout(() => { 
message.channel.stopTyping()
}, 7000);
}
});
  client.on('message', message => {

    if (message.content === ".schannel") {
                        if(!message.channel.guild) return message.reply(' This command only for servers');

if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(' ليس لديك صلاحيات');
           message.channel.overwritePermissions(message.guild.id, {
         READ_MESSAGES: true
           }).then(() => {
               message.reply("تم اظهار الشات✅ ")
})
}
});

  
   client.on('message', message => {

    if (message.content === ".hchannel") {
                        if(!message.channel.guild) return message.reply(' This command only for servers');

if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(' ليس لديك صلاحيات');
           message.channel.overwritePermissions(message.guild.id, {
         READ_MESSAGES: false
           }).then(() => {
               message.reply("تم اخفاء الشات✅ ")
 })
}
});

client.on('message', message => {
    var prefix = "."
    if (message.content === prefix + "date") {
        var currentTime = new Date(),
            السنة = currentTime.getFullYear(),
            الشهر = currentTime.getMonth() + 1,
            اليوم = currentTime.getDate();
        message.channel.sendMessage( "التاريخ : " + اليوم + "-" + الشهر + "-" +السنة)
    }
});



 const mention = [
     'منشن لي شخص تحبه',
     'منشن لي شخص تكرهه',
     'منشن لي اقرب صديق لك',
     'منشن لي شخص قريب منك',
     'منشن لي البنت الي تحبها',
     'منشن لي الشخص الي تغار عليه',
     'منشن لي شخص تعتبره اخوك الاكبر',
     'منشن لي شخص يعجبك',
     'منشن لي شخص حاقد عليه',
     'منشن لي صاحب السيرفر',
     '‏منشن لي احسن إداري بالسيرفر',
     'منشن لي اغبا شخص بالسيرفر',
     '‏منشن لي اذكى شخص بالسيرفر',
     'منشن حبيبتك/حبيبك',
     'منشن لي شخص تبي تتعرف عليه',
     '‏منشن لي شخص ودك تقتله',
     'منشن لي برنس بوت',
     'منشن لي شخص ترتاح له',
     'منشن لي نفسك',
     '‏منشن لي اخر شخص كلمته بالخاص',
     'منشن لي شخص ما تكلمه',
     'منشن لي شخص ودك تسبه',
]

 client.on('message', message => {
   if (message.content.startsWith(".mention")) {
                if(!message.channel.guild) return message.reply('** This command only for servers**');
  var embed = new Discord.RichEmbed()
  .setColor('RANDOM')
   .setThumbnail(message.author.avatarURL) 
 .addField('لعبة منشن شخص' ,
  `${mention[Math.floor(Math.random() * mention.length)]}`)
  message.channel.sendEmbed(embed);
  console.log('[id] Send By: The Prince  ' + message.author.username)
    }
});

client.on('message', msg => {
  if (msg.content === 'هلا') {
    msg.reply('اهلين');
  }
});

client.on('message', msg => {
  if (msg.content === 'back') {
    msg.reply('ولكم');
  }
});

client.on('message', msg => {
  if (msg.content === 'باك') {
    msg.reply('ولكم!');
  }
});



client.on('message', msg => {
  if (msg.content === 'السلام عليكم') {
    msg.reply('**وعليكم السلام ورحمة الله تعالى وبركاته :heart: **');
  }
});




client.on('message',function(message) {
   if(message.content.startsWith(prefix + "guilds")) {
       message.channel.send(`Guilds: \`\`${client.guilds.size}\`\``);
   } 
});


client.on('message',function(message) {
   if(message.content.startsWith(prefix + "users")) {
       message.channel.send(`Users: \`\`${client.users.size}\`\``);
   } 
});

client.on('message',function(message) {
   if(message.content.startsWith(prefix + "channels")) {
       message.channel.send(`channels: \`\`${client.channels.size}\`\``);
   } 
});





  var AsciiTable = require('ascii-data-table').default
client.on('message', message =>{

    if(message.content == ".allroles"){
        var 
        ros=message.guild.roles.size,
        data = [['Rank', 'RoleName']]
        for(let i =0;i<ros;i++){
            if(message.guild.roles.array()[i].id !== message.guild.id){
         data.push([i,`${message.guild.roles.filter(r => r.position == ros-i).map(r=>r.name)}`])
        }}
        let res = AsciiTable.table(data)

        message.channel.send(`**\`\`\`xl\n${res}\`\`\`**`);
    }
});
  

      



//-----------------------------------------------------------------------------------------------


const adminprefix = ".vip";
client.on('message', message => {
	var devs = ['314845344313901057'];
  var argresult = message.content.split(` `).slice(1).join(' ');
    if (!devs.includes(message.author.id)) return;
    
if (message.content.startsWith(adminprefix + 'setgame')) {
  client.user.setGame(argresult);
    message.channel.sendMessage(`**${argresult} تم تغيير بلاينق البوت إلى **`)
} else 
  if (message.content.startsWith(adminprefix + 'setname')) {
client.user.setUsername(argresult).then
    message.channel.sendMessage(`**${argresult}** : تم تغيير أسم البوت إلى`)
return message.reply("**لا يمكنك تغيير الاسم يجب عليك الانتظآر لمدة ساعتين . **");
} else
  if (message.content.startsWith(adminprefix + 'setavatar')) {
client.user.setAvatar(argresult);
  message.channel.sendMessage(`**${argresult}** : تم تغير صورة البوت`);
      } else     
if (message.content.startsWith(adminprefix + 'setT')) {
  client.user.setGame(argresult, "https://www.twitch.tv/idk");
    message.channel.sendMessage(`**تم تغيير تويتش البوت إلى  ${argresult}**`)
}

});

client.on("message", message => {
	var prefix = ".";
  if (message.content === ".help-music") {
  const embed = new Discord.RichEmbed() 
      .setColor("#000000")
      .setDescription(`

تم نقل الميوك إلا بوت "برنس ميوزك" و تم إضافة الميوزك به بشكل احلى
https://goo.gl/m7ABrj
Prince Muisc Prefix [ !! ] 
عشان تعرف كل شيء عن برنس ميوزك
ضيف البوت لسيرفر واكتب
!!help 
 `)
   message.channel.sendEmbed(embed)
    
   }
   }); 


client.on("message", message => {
  if (message.content === ".viphelp") {
	  if (message.author.id !== '314845344313901057') return message.reply('**هاذا الامر فقط لصاحب البوت فقط**')
 if(!message.author.id === '314845344313901057') return;
  const embed = new Discord.RichEmbed() 
      .setColor("#000000")
      .setDescription(`
.vipsetgame ==> لتغيرر البلايينج حك البوت
.vipsetname ==> لتغيير اسم البوت 
.vipsetavatar ==> لتغيير صورة البوت
.vipsetT ==> لتغيير التويتش حك البوت
`)
   message.author.sendEmbed(embed)
    
   }
   }); 


client.on('message', message => {
    var prefix = "."
  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "kick") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply("**انت لا تملك برمشن ` KICK_MEMBERS ` **");
  if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.reply("**انا لا امتلك صلاحية ` KICK_MEMBERS ` **");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
  if (message.mentions.users.size < 1) return message.reply("**Mention SomeOne**");
  if(!reason) return message.reply ("**اكتب السبب**");
  if (!message.guild.member(user)
  .kickable) return message.reply("**لا استطيع طرد شخص اعلى من رتبتي**");

  message.guild.member(user).kick();

  const kickembed = new Discord.RichEmbed()
  .setAuthor(`KICKED!`, user.displayAvatarURL)
  .setColor("RANDOM")
  .setTimestamp()
  .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
  .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
  .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
  		 .setFooter('Prince Bot' , client.user.avatarURL)
  message.channel.send({
    embed : kickembed
  })
}
});

client.on('message', message => {
    var prefix = "."
  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "ban") {
               if(!message.channel.guild) return message.reply('** هذا الأمر فقذ للسيرفرات!**');
         
  if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**انت لا تمتلك برمشن ` BAN_MEMBERS ` **");
  if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**انا لا امتلك صلاحية ` BAN_MEMBERS ` **");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
  if (message.mentions.users.size < 1) return message.reply("**Mention SomeOne**");
  if(!reason) return message.reply ("**اكتب سبب البان**");
  if (!message.guild.member(user)
  .bannable) return message.reply("**انا لا استطيع تبنيد شخص فوق رتبتي**");

  message.guild.member(user).ban(7, user);

  const banembed = new Discord.RichEmbed()
  .setAuthor(`BANNED!`, user.displayAvatarURL)
  .setColor("RANDOM")
  .setTimestamp()
  .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
  .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
  .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
 		 .setFooter('Prince Bot' , client.user.avatarURL)
 message.channel.send({
    embed : banembed
  })
}
});

client.on('mesmessage', msg => {
  if (msg.content.startsWith('.play')) {
    msg.channel.send('**اكتب [ .help-music ] للمزيد من المعلومات**');
  }
});

client.on('mesmesage', msg => {
  if (msg.content.startsWith('.bc')) {
    msg.channel.send('**سيتم إضافته ببوت مستقل**');
  }
});






// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
