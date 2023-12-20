const { kbbi } = require('../lib/kbbi')
let handler = async (m, { conn, text }) => {
  if (!text) return conn.reply(m.chat, '• *Example :* .kbbi hai', m)
  conn.sendMessage(m.chat, { react: { text: '🕒', key: m.key }})
  kbbi(text).then(res => {
  let kbbi = JSON.stringify(res)
  let jjson = JSON.parse(kbbi)
  let json = jjson
  let pesan = `${json.lema}\n\n${json.arti.join(', ')}`.trim()
  conn.reply(m.chat, pesan, m)
  })
}
handler.help = ['kbbi *<text>*']
handler.tags = ['internet']
handler.command = /^(kbbi)$/i
handler.limit = true

module.exports = handler