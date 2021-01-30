const Discord = require("discord.js"),
client = new Discord.Client();               


exports.run = async (client, message, args) => {

  const voiceChannels = message.guild.channels.filter(c => c.type === 'voice'); 
  let count = 0
  let tag = "Ϯ"
  let erkek = "802930590243356696"
  let kadın = "802930120893136906"
  let kayıtsız = "802930109451206716"
  let booster = "802862429280141354"

  for (const [id, voiceChannel] of voiceChannels) count += voiceChannel.members.size; 

  if (!message.guild) return message.author.send('Bu Komutu Sadece Sunucularda Kulanabilirsiniz!');
  const embed = new Discord.RichEmbed()
  .setColor("#00000")
  .setThumbnail("https://media.discordapp.net/attachments/789929957412831244/793029902101381180/kateria_yeni_gelen.gif")
  .setTitle("Sunucuda;")
  .setDescription(` **\`Toplam Üye Sayısı\`** **:** **${message.guild.memberCount}**\n
 **\`Toplam Bot Sayısı\`** **:** **${message.guild.members.filter(haydar => haydar.user.bot).size}**\n
**\`Çevrimiçi Üye Sayısı\`** **:** **${message.guild.members.filter(hidra => !hidra.user.bot && hidra.user.presence.status !== "offline").size}**\n
 **\`Erkek Üye Sayısı\`** **:** **${message.guild.roles.get(erkek).members.size}**\n
 **\`Kadın Üye Sayısı\`** **:** **${message.guild.roles.get(kadın).members.size}**\n
 **\`Kayıtsız Üye Sayısı\`** **:** **${message.guild.roles.get(kayıtsız).members.size}**\n
 **\`Taglı Üye Sayısı\`** **:** **${message.guild.members.filter(hydra => hydra.user.username.includes(tag)).size}**\n
 **\`Seslideki Üye Sayısı\`** **:** **${count}**\n
 **\`Boost Basan Üye Sayısı\`** **:** **${message.guild.roles.get(booster).members.size}**\n
 **\`Boost Sayısı\`** **:** **${message.guild.premiumSubscriptionCount.toString()}**
`)
  .setImage("https://media.discordapp.net/attachments/793020370512642078/793030975012470794/standard.gif")
  .setFooter(`${message.author.tag} tarafından istendi`, message.author.avatarURL)
  .setTimestamp()
  
  message.channel.send(embed)
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'say',
  description: 'Say',
  usage: 'say'
};