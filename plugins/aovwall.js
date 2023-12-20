let fetch = require('node-fetch')
let handler = async (m, { conn, args, text, command, usedPrefix, isCreator, isPrems }) => {
  if (!text) return conn.reply(m.chat, `• *Example :* ${usedPrefix}${command} Kemii`, m)
	conn.sendMessage(m.chat, {
		react: {
			text: '🕒',
			key: m.key,
		}
	})
  let res = `https://api.lolhuman.xyz/api/ephoto1/aovwall?apikey=${global.lolkey}&text=${text}`
  conn.sendFile(m.chat, res, 'maskot.jpg', '```Success...\nDont forget to donate```', m, false)
}
handler.help = ['aovwall *<text>*']
handler.tags = ['maker']
handler.command = /^(aovwall)$/i
handler.register = true
handler.limit = true

module.exports = handler