let fetch = require('node-fetch')
let handler = async (m, { conn, args, text, command, usedPrefix, isCreator, isPrems }) => {
	conn.sendMessage(m.chat, {
		react: {
			text: '🕒',
			key: m.key,
		}
	})
  let res = await fetch(`https://api.lolhuman.xyz/api/random/quotesnime?apikey=${global.lolkey}`)
  let kemii = await res.json()
  conn.reply(m.chat, `”${kemii.result.quote}“ - *${kemii.result.character}* -`, m)
}
handler.help = ['quotesanime']
handler.tags = ['quotes']
handler.command = /^(quotesanime|qanime|quotesa)$/i
handler.register = true
handler.limit = true

module.exports = handler