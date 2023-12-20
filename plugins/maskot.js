let fetch = require('node-fetch')
let handler = async (m, { conn, args, text, command, usedPrefix, isCreator, isPrems }) => {
  if (!text) return conn.reply(m.chst, `• *Example :* ${usedPrefix}${command} kemii`, m)
	conn.sendMessage(m.chat, {
		react: {
			text: '🕒',
			key: m.key,
		}
	})
  let res = `https://skizo.tech/api/mascot-game?text=${text}&apikey=${global.xzn}`
  conn.sendFile(m.chat, res, 'maskot.jpg', '```Success...\nDont forget to donate```', m, false)
}
handler.help = ['maskot'].map(v => v + ' *<text>*')
handler.tags = ['maker']
handler.command = /^(maskot)$/i
handler.register = true
handler.limit = true

module.exports = handler