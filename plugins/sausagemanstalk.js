let fetch = require('node-fetch')

let handler = async (m, { conn, text, usedPrefix, command }) => {
	if (!text) return conn.reply(m.chat, `• *Example :* ${usedPrefix + command} 40vimt`, m)
	let kemii = await fetch(`https://api.lolhuman.xyz/api/sausageman/${text}?apikey=${global.lolkey}`)
	let hasil = await kemii.json()
	conn.reply(m.chat, `${hasil.result}`, m)
   console.log(hasil)
}
handler.help = ['sausagestalk *<text>*']
handler.tags = ['stalking']
handler.command = /^(sausagestalk)$/i
handler.limit = true

module.exports = handler