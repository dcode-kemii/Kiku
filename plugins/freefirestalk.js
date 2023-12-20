let fetch = require('node-fetch')

let handler = async (m, { conn, text, usedPrefix, command }) => {
	if (!text) return conn.reply(m.chat,  `• *Example :* ${usedPrefix + command} 12345678`, m)
	let kemii = await fetch(`https://api.lolhuman.xyz/api/freefire/${text}?apikey=${global.lolkey}`)
	let hasil = await kemii.json()
	conn.reply(m.chat, `${hasil.result}`, m)
   console.log(hasil)
}
handler.help = ['ffstalk *<text>*']
handler.tags = ['stalking']
handler.command = /^(ffstalk)$/i
handler.limit = true

module.exports = handler