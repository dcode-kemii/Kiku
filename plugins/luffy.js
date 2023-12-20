let fetch = require('node-fetch')
let handler = async (m, { conn, args, text, command, usedPrefix, isCreator, isPrems }) => {
  if (!text) return conn.reply(m.chat, `• *Example :* ${usedPrefix}${command} kemii`, m)
	conn.sendMessage(m.chat, {
		react: {
			text: '🕒',
			key: m.key,
		}
	})
  let res = `https://skizo.tech/api/onepiece?text=${text}&apikey=${global.xzn}`
  conn.sendFile(m.chat, res, 'pubg.jpg', '```Success...\nDont forget to donate```', m, false)
}
handler.help = ['luffy'].map(v => v + ' *<text>*')
handler.tags = ['maker']
handler.command = /^(luffy)$/i
handler.register = true
handler.limit = true

module.exports = handler