let fetch = require('node-fetch')

let handler = async (m, { conn, text, usedPrefix, command }) => {
	if (!text) return conn.reply(m.chat, `• *Example :* ${usedPrefix + command} 6290150021186841472`, m)
	let kemii = await fetch(`https://api.lolhuman.xyz/api/codm/${text}?apikey=${global.lolkey}`)
	let hasil = await kemii.json()
	m.reply(`${hasil.result}`)
   console.log(hasil)
}
handler.help = ['codstalk *<text>*']
handler.tags = ['stalking']
handler.command = /^(codstalk)$/i
handler.limit = true

module.exports = handler