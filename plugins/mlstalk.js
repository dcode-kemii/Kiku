let fetch = require('node-fetch')

let handler = async (m, { conn, text, usedPrefix, command }) => {
	if (!text) return conn.reply(m.chat, `• *Example :* ${usedPrefix + command} 84830127/2169`, m)
	let kemii = await fetch(`https://api.lolhuman.xyz/api/mobilelegend/${text}?apikey=${global.lolkey}`)
	let hasil = await kemii.json()
	conn.reply(m.chat, `${hasil.result}`, m)
   console.log(hasil)
}
handler.help = ['mlstalk *<text>*']
handler.tags = ['stalking']
handler.command = /^(mlstalk)$/i
handler.limit = true

module.exports = handler