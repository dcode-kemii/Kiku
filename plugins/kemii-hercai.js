let { Hercai } = require('hercai')

let handler = async (m, { conn, usedPrefix, command, text }) => {
  if (!text) return conn.reply(m.chat, '• *Example :* .hercai hello', m)
  let kemii = await conn.reply(m.chat, '```Sedang mencari jawaban...🔍```', m)
  let herc = new Hercai()
  let hasil = await herc.question({model:"v3-beta",content:`${text}`})
  await conn.sendMessage(m.chat, { text: `${hasil.reply}`, edit: kemii })
}
handler.command = /^hercai$/i
handler.help = ['hercai *<text>*']
handler.tags = ['tools','ai']
handler.register = false
handler.limit = true

module.exports = handler