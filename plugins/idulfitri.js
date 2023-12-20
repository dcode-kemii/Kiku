let fetch = require('node-fetch')
let handler = async (m, { conn, args, text, command, usedPrefix, isCreator, isPrems }) => {
  let response = args.join(' ').split('|')
  if (!args[0]) return conn.reply(m.chat, `• *Example :* ${usedPrefix}${command} kemii`, m)
	conn.sendMessage(m.chat, {
		react: {
			text: '🕒',
			key: m.key,
		}
	})
  let res = `https://api.lolhuman.xyz/api/idulfitri?apikey=${global.lolkey}&text=${response[0]}`
  conn.sendFile(m.chat, res, 'idulfitri.jpg', done, m, false)
}
handler.help = ['idulfitri'].map(v => v + ' *<text>*')
handler.tags = ['maker']
handler.command = /^(idulfitri)$/i
handler.register = true
handler.limit = true

module.exports = handler

