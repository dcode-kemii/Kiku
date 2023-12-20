let handler = async (m, { conn, text }) => {
  if (!text) {
    return conn.reply(m.chat, '• *Example :* .audiosurah 1', m)
  }
  conn.sendMessage(m.chat, { react: { text: "🕒", key: m.key } });
  let url = `https://api.lolhuman.xyz/api/quran/audio/${encodeURIComponent(text)}?apikey=${global.lolkey}`
  conn.sendFile(m.chat, url, 'audio.mp3', '', m, true)
}

handler.help = ['audiosurah *<text>*']
handler.tags = ['islami']
handler.command = /^audiosurah$/i
handler.register = true
handler.limit = true

module.exports = handler