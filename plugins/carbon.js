let fetch = require('node-fetch')
let handler = async (m, { conn, text }) => {
  if (!text) return conn.reply(m.chat, '• *Example :* .carbon require("kemii")', m)
  conn.sendMessage(m.chat, {
    react: {
      text: '🕒',
      key: m.key,
    }
  });
  let res = `https://api.lolhuman.xyz/api/carbon?apikey=${global.lolkey}&code=${text}&language=python`
  conn.sendFile(m.chat, res, 'carbon.jpg', '```Success...\nDont forget to donate```', m, false)
}
handler.help = ['carbon'].map(v => v + ' *<text>*')
handler.tags = ['maker']
handler.command = /^(carbon)$/i

module.exports = handler