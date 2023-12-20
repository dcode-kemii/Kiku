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
  let res = `https://api.betabotz.org/api/textpro/pornhub?text=${response[0]}&text2=${response[1]}&apikey=${global.btc}`
  conn.sendFile(m.chat, res, 'pornhub.jpg', done, m, false)
}
handler.help = ['pornhub'].map(v => v + ' *<text>|<text>*')
handler.tags = ['maker']
handler.command = /^(pornhub)$/i
handler.register = true
handler.limit = true

module.exports = handler

