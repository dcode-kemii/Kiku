let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
conn.sendMessage(m.chat, { react: { text: "🕒", key: m.key } });
  let res = await fetch('https://api.waifu.pics/sfw/megumin')
  if (!res.ok) return conn.reply(m.chat, 'Error Website sedang down', m)
  let json = await res.json()
  if (!json.url) return conn.reply(m.chat, 'Error!', m)
  conn.sendFile(m.chat, json.url, '', done, m, 0, { thumbnail: Buffer.alloc(0) })
}
handler.help = ['megumin']
handler.tags = ['anime']
handler.command = /^(megumin)$/i

handler.limit = true

module.exports = handler