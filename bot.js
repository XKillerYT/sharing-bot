const Discord = require('discord.js');
const client = new Discord.Client();

console.log("Welcome Again !");
 
 client.on("guildMemberRemove", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**
اقدح على هواك قدحتتا فوق مستواك :crown:
سيرفرنا الجميل يفتح لكم أبوابه :blush:
ويسعدنا وجودك بالسيرفر ياعسل :penguin:
https://discord.gg/V7QJNaw
الدعوة خاصة لك يقلبي :fire:  [ ${member}  ]
**`) 
}).catch(console.error)

})
 
client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**
اقدح على هواك قدحتتا فوق مستواك :crown:
سيرفرنا الجميل يفتح لكم أبوابه :blush:
ويسعدنا وجودك بالسيرفر ياعسل :penguin:
https://discord.gg/V7QJNaw
الدعوة خاصة لك يقلبي :fire:  [ ${member}  ]
**`) 
}).catch(console.error)
})
client.login(process.env.BOT_TOKEN);
