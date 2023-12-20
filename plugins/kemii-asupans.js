let fetch = require('node-fetch')

let handler = async (m, { conn, text, command }) => {
  if (!text) return conn.reply(m.chat, `• *Example :* .${command} senyamiku`, m)
  conn.sendMessage(m.chat, { react: { text: '🕒', key: m.key }})
  let kemii = await fetch(`https://api.betabotz.org/api/asupan/tiktok?query=${text}&apikey=${global.btc}`)
  try {
  let res = await kemii.json()
  let te = `乂  *ASUPAN - SEARCH*

◦ *Author:* @${res.result.data.author.username}
◦ *Caption:* ${res.result.data.caption}`;
  conn.sendFile(m.chat, res.result.data.video, 'asupans.mp4', te, m)
   } catch (e) {
    console.log(e);
    m.reply(`Failed :(`);
  }
}
handler.help = ['asupansearch'].map(v => v + ' *<text>*')
handler.tags = ['asupan']

handler.command = /^asupans|tasupansearch$/i
handler.premium = false

module.exports = handler