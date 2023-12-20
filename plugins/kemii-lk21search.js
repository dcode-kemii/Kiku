let fetch = require('node-fetch')

let handler = async(m, { conn, text, command }) => {
  if (!text) return conn.reply(m.chat, `• *Example :* .${command} JKT48`, m)
  let res = await fetch(`https://wibu-api.eu.org/api/lk21/search?title=${text}`)
  conn.sendMessage(m.chat, {
    react: {
      text: '🕒',
      key: m.key,
    }
  });
  try {
  let json = await res.json()
  json = json.result.map((v) => `*Judul:* ${v.judul}\n*Link:* ${v.link}\n*Kategori:* ${v.kategori}\n*Download:* ${v.dl}\n`).join`\n\n°°°°°°°°°°°°°°°°°°°°°°°°°°°°°\n\n`
  conn.reply(m.chat, json, m)
  } catch (e) {
  conn.reply(m.chat, `Tidak Dapat Menemukan Apa Yang Kamu Cari`, m)
  }
}
handler.help = ['lk21search *<text>*']
handler.tags = ['internet']
handler.command = /^(lk21search|lk21)$/i
handler.limit = true

module.exports = handler