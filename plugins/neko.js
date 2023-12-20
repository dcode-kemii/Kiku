let fetch = require('node-fetch')
let handler = async(m, { conn }) => {
  conn.sendMessage(m.chat, {
    react: {
      text: '🕒',
      key: m.key,
    }
  });
  let res = await fetch('https://api.waifu.pics/sfw/neko')
  if (!res.ok) throw await res.text()
  let json = await res.json()
  if (!json.url) throw 'Error!'
  conn.sendFile(m.chat, json.url, '', done, m)
}
handler.help = ['neko']
handler.tags = ['internet']
handler.command = /^neko$/i
handler.limit = true

module.exports = handler