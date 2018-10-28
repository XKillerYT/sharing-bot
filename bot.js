const Discord = require('discord.js');
const client = new Discord.Client();

console.log("BOT ONLINE");
 
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
client.login("NDk3NTQ1NjUzMTk1NjM2NzU5.DrTeTA.kh4g1YE9clU9iDtz4EjJsEAuwT0");
