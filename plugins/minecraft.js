let fetch = require('node-fetch')

let handler = async (m, { conn, text, usedPrefix, command }) => {
	if (!text) return conn.reply(m.chat, `• *Example :* ${usedPrefix + command} org.mc-complex.com`, m)
	let kemii = await fetch(`https://api.lolhuman.xyz/api/minecraft/${text}?apikey=${global.lolkey}`)
	let res = await kemii.json()
	let hasil = `Version: ${res.result.version}\nPlayers: ${res.result.players.online} & ${res.result.players.max}\nLatency: ${res.result.latency}`
	let thumb = `https://api.lolhuman.xyz/api/gimage?apikey=${global.lolkey}&query=${text}`
	await conn.sendFile(m.chat, thumb, 'minecraft.jpg', `${dann}`, m)
}

handler.help = ['minecraft *<url>*']
handler.tags = ['internet']
handler.command = /^minecraft$/i

module.exports = handler