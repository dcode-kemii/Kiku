let qrcode = require("qrcode")
let handler  = async (m, { conn, text }) => {
  if (!text) throw '• *Example :* .qrcode kemii'
  conn.sendFile(m.chat, await qrcode.toDataURL(text.slice(0, 2048), { scale: 8 }), 'qrcode.png', done, m)
}

handler.help = ['', 'code'].map(v => 'qr' + v + ' <teks>')
handler.tags = ['tools']
handler.command = /^qr(code)?$/i

handler.limit = true
handler.fail = null

module.exports = handler