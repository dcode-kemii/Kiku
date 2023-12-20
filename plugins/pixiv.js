var fetch = require("node-fetch")

var handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) return conn.reply(m.chat, `• *Example :* ${usedPrefix + command} loli kawai`, m)
  conn.sendMessage(m.chat, { react: { text: "🕒", key: m.key } });
  try {
  var kemii = await fetch(`https://api.lolhuman.xyz/api/pixiv?apikey=${global.lolkey}&query=${text}`)
  var res = await kemii.json()
  var name = m.sender
  conn.sendFile(m.chat, res.result[0].image, '', done, m)
  } catch (e) {
    console.log(e);
    m.reply(`Failed to search ${text}`);
  }
}

handler.help = ['pixiv'].map(v => v + ' *<teks>*')
handler.command = /^(pixiv)$/i  
handler.tags = ['internet']
handler.limit = true
module.exports = handler