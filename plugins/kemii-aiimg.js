let fetch = require('node-fetch')
let handler = async (m, { conn, args, text, command, usedPrefix, isCreator, isPrems }) => {
  if (!text) return conn.reply(m.chat, `• *Example :* ${usedPrefix}${command} Car`, m)
	conn.sendMessage(m.chat, {
		react: {
			text: '🕒',
			key: m.key,
		}
	})
  conn.sendFile(m.chat, `https://aemt.me/ai/generator/image?text=${text}`, '', done, m, false)
}
handler.help = ['aiimage *<text>*']
handler.tags = ['ai']
handler.command = /^(aiimg|aiimage)$/i
handler.register = true
handler.limit = true

module.exports = handler