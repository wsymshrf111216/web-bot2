const fs = require("node:fs");
const path = require("node:path");
const db = require("pro.db");
const express = require('express');


const app = express();

app.get('/', (req, res) => {
  res.send('Hello Express app!')
});

app.listen(3000, () => {
  console.log('Dev Bot By I_N7R');
});

require('events').EventEmitter.defaultMaxListeners = 9999999;
const { Client, Events, EmbedBuilder, GatewayIntentBits,AttachmentBuilder, Collection, ActionRowBuilder, ButtonBuilder, ButtonStyle, Message } = require('discord.js');
const client = new Client({
	intents: [
  	GatewayIntentBits.Guilds,
  	GatewayIntentBits.GuildBans,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.GuildPresences,
		GatewayIntentBits.MessageContent,
  	GatewayIntentBits.GuildVoiceStates,
	]
})

process.on("uncaughtException" , error => {
return;
})

process.on("unhandledRejection" , error => {
return;
})

process.on("rejectionHandled", error => {
return;
})

client.Success = '<:Success:1060203853108219936>';
client.Failed  = '<:Failed:1060203668869234748>';

client.ŚÇ  = new Collection();
client.Çɱɗ = new Collection()

module.exports = client;

fs.readdirSync('./Handlers').forEach(async Handler => {
	require(`./Handlers/${Handler}`)(client)
})

 


client.on('messageCreate', async Message => {
  try {
    if (db.get(`whitelist_${Message.guild.id}`).includes(Message.author.id)) return;
    let Db = db.get(`ANTILINKS_${Message.guild.id}`)
    if (Db === true) {
      if (Message.content.includes('discord.gg') || Message.content.includes('discord.gg') || Message.content.includes('discord.gg') || Message.content.includes('discord.gg') ||
        Message.content.includes('discord.gg') ||
        Message.content.includes('discord.gge')
        || Message.content.includes('discord.gg')) {
        await Message.member.timeout(60_0000)
        Message.delete()
        Message.channel.send({ content: `Links is Blocked Here ${Message.author}` })
        Message.author.send('You have been given as much time as possible due to sending links')
      }
    }
  } catch (err) { return; }
})

client.on('guildMemberAdd', async Member => {
  if (db.get(`whitelist_${Member.guild.id}`).includes(Member.author.id)) return;
  const Antibot = await db.fetch(`Antibots_${Member.guild.id}`)
  if (Antibot !== true) return;
  if (Member.user.bot) return Member.ban({ reason: 'Protection By WebBot' });
});

client.on("messageCreate", async (message) => {
  try {
    if (db.get(`whitelist_${message.guild.id}`).includes(message.author.id)) return;
    if (db.get(`AntiBadwords_${message.guild.id}`) === true) {
      let Badwords = await db.fetch(`badwords_${message.guild.id}`);
      if (!Badwords || Badwords === null) return;
      for (let i = 0; i < Badwords.length; i++) {
        if (message.content.toLowerCase().includes(Badwords[i].trim())) {
          message.member.timeout(60_0000)
          return message.delete();
        }
      }
    }
  }
  catch (err) { return; }
})

client.on("messageCreate", message => {
  if (message.content === `<@${client.user.id}>`) {
    const embed = new EmbedBuilder()
      .setDescription(`**Welcome im ${client.user.username} My Slash Command /**`)
      .setTitle(`Bot Info My ${client.user.username}`)
      .setColor(`#143f67`)
      .setAuthor({ name: message.guild.name, iconURL: message.guild.iconURL({ dynamic: true }) })
      .setFooter({
        text: `Requested by ${message.author.tag}`, iconURL:
          message.author.displayAvatarURL({ dynamic: true })
      })
      .setTimestamp()
    message.reply({ embeds: [embed] })
  }
});

client.on("messageCreate", message => {
  if (message.mentions.members.size > 0) {
    if (message.author.bot) return;
    message.mentions.members.forEach(member => {
      if (member.nickname && member.nickname.startsWith("[AFK] ")) {
        const reason = db.get(`AFK_${member.id}`)
        message.channel.send(`**${member.displayName} is Reason : ${reason}.**`);
      }
    });
  }
});

client.on("messageCreate", async message => {
  if (!message.guild || message.author.bot) return;
  if (message.member.displayName && message.member.displayName.startsWith("[AFK] ")) {
    message.member.setNickname(message.member.displayName.replace("[AFK] ", ""));
    const welcome = await message.reply("👋 Welcome Back, you're no Longer AFK");
    setTimeout(() => {
      db.delete(`AFK_${message.member.id}`)
      welcome.delete()
    }, 5000)
  }
});

client.on('messageCreate', async message => {
  if (message.content.startsWith('join')) {
    if (!message.member.permissions.has('ManageGuild')) return message.channel.send({ content: `:x: ${message.author}, This Command Required **ManageGuild** Permission` })
    await client.emit('guildMemberAdd', message.member)
    message.react('✅');
  }
});



client.on('messageCreate', async message => {
  if (message.content.startsWith('leave')) {
    if (!message.member.permissions.has('ManageGuild')) return message.channel.send({ content: `:x: ${message.author}, This Command Required **ManageGuild** Permission` })
    await client.emit('guildMemberRemove', message.member)
    message.react('✅')
  }
});

let channelid = ['1077367145710768128'];

client.on("messageCreate", message => {
 if(message.ChannelType === "dm" || 
  message.author.bot) return
    
if(channelid.includes(message.channel.id)){   
 message.delete()

let args = message.content.split(',')

  let embed = new EmbedBuilder()
    .setAuthor({ name: `${message.author.username}`, iconURL: message.author.displayAvatarURL({ dynamic: true }) })
    .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
    .setDescription(`${args}`)      
    .setColor("Random")
    .setImage(lineURL)
    .setTimestamp()
    .setFooter({ text: `${message.guild.name}` })
  
  message.channel.send({embeds: [embed] }).then((emoji) =>{    
    emoji.react(`👍`)
    emoji.react(`👎`)
    })
   }
});

const time = 100000 // كل ساعه ينشر
const ch = "1096775199879352351" // ايدي الشانل الي هينشر فيه
client.on('ready', () => {
        setInterval(() => {
        function getRandom(min, max) {
                return Math.floor(Math.random() * (max - min + 1) + min)
        }
        const number = getRandom(1, 604)
        const url = `http://www.islamicbook.ws/2/${number}.jpg`
        client.channels.cache.get(ch).send({files: [url]}).then(m => {
m.react("🤲")
})
        }, time) 
})

const { MessageEmbed } = require('discord.js');

module.exports = {
  name: 'guildMemberAdd', //اسم الايفينت الي هيتشغل لما حد يدخل السيرفر
  execute(member) {

 
    const embed = new MessageEmbed()
      .setColor('#0099ff')
      .setTitle('**Welcome** to our server!')
      .setDescription(`Hello <@${member.user.id}>! Welcome to our server!`)
      .setThumbnail(member.user.displayAvatarURL({ dynamic: true }))
      .setFooter('We are happy to see you here!');

    
    member.guild.channels.cache.get('1077318106076172351').send({ embeds: [embed] });
  },
};

client.login("MTA3MzU4NjAxMDc4MjQ0NTY5OQ.Gwev_z.DI2mgY59ZPot8Ot0JlcCaPpUi6j43ZivNHNClk").catch((err) => {
  console.log(err)
});