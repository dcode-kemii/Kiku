let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) return conn.reply(m.chat, `• *Example :* ${usedPrefix + command} Elaina`, m)
  conn.sendMessage(m.chat, { react: { text: "🕒", key: m.key } });
  let res = API('https://api.lolhuman.xyz', '/api/textprome/icecold', { text: text }, 'apikey')
 await conn.sendFile(m.chat, res, 'error.jpg', done, m, false)
}
handler.help = ['ice *<text>*']
handler.tags = ['maker']
handler.command = /^(ice)$/i
handler.limit = true
module.exports = handler