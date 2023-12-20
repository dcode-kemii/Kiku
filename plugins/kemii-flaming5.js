let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
  let response = args.join(' ').split('|')
  if (!args[0]) return conn.reply(m.chat, '• *Example :* .flaming5 kemii', m)
  conn.sendMessage(m.chat, { react: { text: "🕒", key: m.key } });
  let res = `https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text=${response[0]}`
  conn.sendFile(m.chat, res, 'gura.jpg', `ꜱᴜᴅᴀʜ ᴊᴀᴅɪ`, m, false)
}
handler.help = ['flaming5'].map(v => v + ' *<text>*')
handler.tags = ['maker']
handler.command = /^(flaming5)$/i
module.exports = handler