let fetch = require('node-fetch')

let handler = async (m, { conn, text }) => {
  if (!text) return conn.reply(m.chat, '• *Example :* .snack https://snackvidio.com/xxx', m)
  let kemii = await fetch(`https://api.zahwazein.xyz/downloader/snackvideo?apikey=${global.zein}&url=${text}`)
  conn.sendMessage(m.chat, { react: { text: "🕒", key: m.key } });
  let res = await kemii.json()
  conn.sendFile(m.chat, res.result, 'snack.mp4', done, m)
}
handler.help = ['snack'].map(v => v + ' *<url>*')
handler.tags = ['downloader']

handler.command = /^snack$/i
handler.premium = false

module.exports = handler