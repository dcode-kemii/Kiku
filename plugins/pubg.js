let fetch = require('node-fetch')
let handler = async (m, { conn, args, usedPrefix, command }) => {
   let response = args.join(' ').split('|')
  if (!args[0]) return conn.reply(m.chat, `• *Example :* ${usedPrefix}${command} Takashi|kemii`, m)
  conn.sendMessage(m.chat, { react: { text: '🕐', key: m.key }})
  let res = `https://api.betabotz.org/api/photooxy/pubg?text1=${response[0]}&text2=${response[1]}&apikey=${global.btc}`
  conn.sendFile(m.chat, res, 'pubg.jpg', '```Success...\nDont forget to donate```', m, false)
}
handler.help = ['pubg'].map(v => v + ' *<text>*')
handler.tags = ['maker']
handler.command = /^(pubg)$/i
handler.limit = false

module.exports = handler