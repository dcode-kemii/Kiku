let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) return conn.reply(m.chat, `• *Example :* ${usedPrefix + command} Raja Iblis`, m)
  conn.sendMessage(m.chat, { react: { text: "🕒", key: m.key } });
  let res = API('https://api.lolhuman.xyz' , '/api/ephoto1/wetglass', { text: text }, 'apikey')
  conn.sendFile(m.chat, res, 'glass.jpg', done, m, false)
}
handler.help = ['glass *<text>*']
handler.tags = ['maker']
handler.command = /^(glass)$/i
handler.limit = true
module.exports = handler