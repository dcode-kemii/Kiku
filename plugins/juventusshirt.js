let fetch = require('node-fetch')
let handler = async (m, { conn, args, text, command, usedPrefix, isCreator, isPrems }) => {
  let response = args.join(' ').split('|')
  if (!args[0]) return conn.reply(m.chat, `• *Example :* ${usedPrefix}${command} kemii|99`, m)
	conn.sendMessage(m.chat, {
		react: {
			text: '🕒',
			key: m.key,
		}
	})
  let res = `https://api.lolhuman.xyz/api/ephoto2/juventusshirt?apikey=${global.lolkey}&text1=${response[0]}&text2=${response[1]}
`
  conn.sendFile(m.chat, res, 'juventusshirt.jpg', '```Success...\nDont forget to donate```', m, false)
}
handler.help = ['juventusshirt'].map(v => v + ' *<text>|<text>*')
handler.tags = ['maker']
handler.command = /^(juventusshirt)$/i
handler.register = true
handler.limit = true

module.exports = handler