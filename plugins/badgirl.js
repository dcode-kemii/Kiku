let fetch = require('node-fetch')
let handler = async (m, { conn, text }) => {
  if (!text) return conn.reply(m.chat, '• *Example :* .badgirl kemii', m)
  conn.sendMessage(m.chat, { react: { text: '🕐', key: m.key }})
  let res = `https://api.lolhuman.xyz/api/badgirl?apikey=${global.lolkey}&name=${text}`
  conn.sendFile(m.chat, res, 'badgirl.jpg', '```Success...\nDont forget to donate```', m, false)
}
handler.help = ['badgirl *<text>*']
handler.tags = ['maker']
handler.command = /^badgirl$/i
handler.limit = false

module.exports = handler