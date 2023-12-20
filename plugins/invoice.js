let fetch = require('node-fetch')
let handler = async (m, { conn, args, text, command, usedPrefix, isCreator, isPrems }) => {
  let response = args.join(' ').split('|')
  if (!args[0]) return conn.reply(m.chat, `• *Example :* ${usedPrefix}${command} 100|12345678|1000|Takashi|kemii|15:10`, m)
	conn.sendMessage(m.chat, {
		react: {
			text: '🕒',
			key: m.key,
		}
	})
  let res = `https://api.lolhuman.xyz/api/creator/invoice?apikey=${global.lolkey}&produk=DM%20${response[0]}&id=${response[1]}&jumlah=${response[2]}&username=${response[3]}%20${response[4]}&refid=${response[5]}&waktu=Hari%20Ini,%2032%20Senin%20Masehi
`
  conn.sendFile(m.chat, res, 'invoice.jpg', `Done`, m, false)
}
handler.help = ['invoice'].map(v => v + ' *<text>|<text>*')
handler.tags = ['maker']
handler.command = /^(invoice)$/i
handler.register = true
handler.limit = true

module.exports = handler