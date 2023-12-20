let fetch = require('node-fetch')
let handler = async (m, { conn, args, text, command, usedPrefix, isCreator, isPrems }) => {
  if (!text) return conn.reply(m.chat, `• *Example :* ${usedPrefix}${command} kemii`, m)
	conn.sendMessage(m.chat, {
		react: {
			text: '🕒',
			key: m.key,
		}
	})
  let res = `https://api.betabotz.org/api/ephoto/televisi?text=${text}&apikey=${global.btc}`
  conn.sendFile(m.chat, res, 'goldplaybutton.jpg', '```Success...\nDont forget to donate```', m, false)
}
handler.help = ['televisi'].map(v => v + ' *<text>*')
handler.tags = ['maker']
handler.command = /^(televisi)$/i
handler.register = true
handler.limit = true

module.exports = handler