let fetch = require('node-fetch')

let handler = async (m, { conn, text }) => {
  if (!text) return conn.reply(m.chat, '• *Example :* .xnxxdl https://www.xnxx.com/xxxx', m)
  conn.sendMessage(m.chat, { react: { text: '🕐', key: m.key }})
  let kemii = await fetch(`https://skizo.tech/api/xnxxdl?urlxnxx=${text}&apikey=${global.xzn}`)
  let res = await kemii.json()
  let start = new Date();
  conn.sendFile(m.chat, res.url, 'xnxx.mp4', 'Done', m)
}
handler.help = ['xnxxdl'].map(v => v + ' *<url>*')
handler.tags = ['downloader'];
handler.command = /^(xnxxdl)$/i;
handler.limit = true;
handler.group = false;

module.exports = handler;