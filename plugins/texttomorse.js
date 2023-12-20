let fetch = require('node-fetch')

let handler = async (m, { conn, text }) => {
  if (!text) {
    conn.reply(m.chat, `Please enter the text you want to convert to Morse code.`, m)
    return
  }
  conn.sendMessage(m.chat, { react: { text: '🕐', key: m.key }})
  let query = encodeURIComponent(text)
  let res = await fetch(`https://api.lolhuman.xyz/api/morse/encrypt?apikey=${global.lolkey}&text=${query}`)
  let json = await res.json()

  conn.reply(m.chat, json.result, m)
}

handler.help = ['textmorse <teks>']
handler.tags = ['tools']
handler.command = /^textmorse/i
handler.register = true
handler.limit = true

module.exports = handler