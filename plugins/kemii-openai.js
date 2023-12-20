let { openai } = require('betabotz-tools')

let handler = async (m, { conn, usedPrefix, command, text }) => {
  if (!text) return conn.reply(m.chat, '• *Example :* .ai hello', m)
  let kemii = await conn.reply(m.chat, '```Sedang mencari jawaban...🔍```', m)
  let hasil = await openai(text)
  await conn.sendMessage(m.chat, { text: `${hasil.result}`.trim(), edit: kemii })
}
handler.command = /^ai$/i
handler.help = ['ai *<text>*']
handler.tags = ['tools','ai']
handler.register = false
handler.limit = true

module.exports = handler