let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   let response = args.join(' ').split('|')
  if (!args[0]) return conn.reply(m.chat, '• *Example :* .gta Takashi|kemii', m)
  conn.sendMessage(m.chat, { react: { text: "🕒", key: m.key } });
  let res = `https://api.lolhuman.xyz/api/gtapassed?apikey=${global.lolkey}&text1=${response[0]}&text2=${response[1]}`
  conn.sendFile(m.chat, res, 'gta.jpg', '```Success...\nDont forget to donate```', m, false)
}
handler.help = ['gta'].map(v => v + ' *<text>*')
handler.tags = ['maker']
handler.command = /^(gta)$/i
handler.limit = true
handler.premium = true

module.exports = handler