let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) return conn.reply(m.chat, `• *Example :* ${usedPrefix + command} Blackpink`, m)
  conn.sendMessage(m.chat, { react: { text: "🕒", key: m.key } });
  let res = API('https://api.lolhuman.xyz', '/api/textprome/blackpink', { text: text }, 'apikey')
  conn.sendFile(m.chat, res, 'error.jpg', done, m, false)
}
handler.help = ['blackpink *<text>*']
handler.tags = ['maker']
handler.command = /^(blackpink)$/i
handler.limit = true
module.exports = handler