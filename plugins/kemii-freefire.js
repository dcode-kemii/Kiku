let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) return conn.reply(m.chat, `• *Example :* ${usedPrefix + command} Alok`, 
  conn.sendMessage(m.chat, { react: { text: "🕒", key: m.key } });
  let res = API('https://api.lolhuman.xyz', '/api/ephoto1/freefire', { text: text }, 'apikey')
  await conn.sendFile(m.chat, res, 'error.jpg', done, m, false)
}
handler.help = ['freefire *<text>*']
handler.tags = ['maker']
handler.command = /^(freefire)$/i
handler.limit = true
module.exports = handler
