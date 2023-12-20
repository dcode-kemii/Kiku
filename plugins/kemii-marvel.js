let fetch = require('node-fetch')
let handler = async (m, { conn, args, text, command, usedPrefix, isCreator, isPrems }) => {
  let response = args.join(' ').split('|')
  if (!args[0]) return conn.reply(m.chat, `• *Example :* ${usedPrefix}${command} Takashi|kemii`, m)
	conn.sendMessage(m.chat, {
		react: {
			text: '🕒',
			key: m.key,
		}
	})
  let res = `https://api.betabotz.org/api/textpro/marvel-logo2?text=${response[0]}&text2=${response[1]}&apikey=${global.btc}`
  conn.sendFile(m.chat, res, 'marvel.jpg', '```Success...\nDont forget to donate```', m, false)
}
handler.help = ['marvel'].map(v => v + ' *<text>|<text>*')
handler.tags = ['maker']
handler.command = /^(marvel)$/i
handler.register = true
handler.limit = true

module.exports = handler

