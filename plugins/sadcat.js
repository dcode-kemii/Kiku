let fetch = require('node-fetch')
let handler = async (m, { conn, args, text, command, usedPrefix, isCreator, isPrems }) => {
  if (!text) return conn.reply(m.chat, `• *Example :* ${usedPrefix}${command} kemii`, m)
	conn.sendMessage(m.chat, {
		react: {
			text: '🕒',
			key: m.key,
		}
	})
  let res = `https://api.zahwazein.xyz/creator/sadcat?text=${text}&apikey=${global.zein}`
  conn.sendFile(m.chat, res, 'sadcat.jpg', '```Success...\nDont forget to donate```', m, false)
}
handler.help = ['sadcat'].map(v => v + ' *<text>*')
handler.tags = ['maker']
handler.command = /^(sadcat)$/i
handler.register = true
handler.limit = true

module.exports = handler