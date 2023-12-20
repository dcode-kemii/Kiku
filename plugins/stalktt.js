let fetch = require('node-fetch')
let handler = async(m, { conn, usedPrefix, text, args, command }) => {
if (!text) return conn.reply(m.chat, `• *Example :* ${usedPrefix + command} salsabila`, m)
let f = await fetch(`https://api.lolhuman.xyz/api/stalktiktok/${text}?apikey=${global.lolkey}`)
let x = await f.json()
let cap = `${htki} Info Detail Tiktok ${htka}
Usename : @${x.result.username}
Name : ${x.result.nickname}
Followers : ${x.result.followers}
Followings : ${x.result.followings}
Likes : ${x.result.likes}
Video : ${x.result.video}
Bio : ${x.result.bio}`
conn.sendFile(m.chat, x.result.user_picture, 'stalk.jpg', `${cap}`, m)
  }
handler.help = ['ttstalk *<text>*']
handler.tags = ['stalking']
handler.command = /^(ttstalk)$/i

module.exports = handler