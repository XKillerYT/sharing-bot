const Discord = require('discord.js');
const A7MD = new Discord.Client();

console.log("BOT ONLINE");
 
A7MD.on("guildMemberAdd", member => {
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
A7MD.login("NDk3NTQ1NjUzMTk1NjM2NzU5.DrTeTA.kh4g1YE9clU9iDtz4EjJsEAuwT0");
