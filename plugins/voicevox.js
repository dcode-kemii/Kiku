const fetch = require('node-fetch')

let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) return conn.reply(m.chat, `• *Example :* ${usedPrefix + command} Hello Sir`, m)
  
  let a = await fetch(`https://api.lolhuman.xyz/api/translate/auto/ja?apikey=${global.lolkey}&text=${text}`)
  conn.sendMessage(m.chat, { react: { text: "🕒", key: m.key } });
  let js = await a.json()

  if (js.result.translated) {
    let b = `https://api.yanzbotz.my.id/api/tts/aoi?query=${js.result.translated}`
    conn.sendFile(m.chat, b, '', null, m, true)
  }
}

handler.help = ['voicevox *<text>*']
handler.tags = ['ai', 'internet']
handler.command = /^(voicevox)$/i
handler.limit = true

module.exports = handler