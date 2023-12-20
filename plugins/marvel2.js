let fetch = require('node-fetch')
let handler = async (m, { conn, args, text, command, usedPrefix, isCreator, isPrems }) => {
  let response = args.join(' ').split('|')
  if (!args[0]) return conn.reply(m.chat, `• *Example :* ${usedPrefix}${command} Takashi|Kemii`, m)
	conn.sendMessage(m.chat, {
		react: {
			text: '🕒',
			key: m.key,
		}
	})
  let res = `https://api.betabotz.org/api/textpro/marvel-logo3?text=${response[0]}&text2=${response[1]}&apikey=${global.btc}`
  conn.sendFile(m.chat, res, 'marvel2.jpg', '```Success...\nDont forget to donate```', m, false)
}
handler.help = ['marvel2'].map(v => v + ' *<text>|<text>*')
handler.tags = ['maker']
handler.command = /^(marvel2)$/i
handler.register = true
handler.limit = true

module.exports = handler