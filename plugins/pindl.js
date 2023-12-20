const fetch = require("node-fetch");

let handler = async (m, { conn, text, usedPrefix, command }) => {
	if (!text) return conn.reply(m.chat, '• *Example :* .pindl https://i.pinimg.com/xxxx', m)
	conn.sendMessage(m.chat, { react: { text: "🕒", key: m.key } });
	let kemii = await fetch(`https://api.lolhuman.xyz/api/pinterestvideo?apikey=${global.lolkey}&url=${text}`)
	let res = await kemii.json()
	conn.sendFile(m.chat, res.result, 'pinterest.mp4', done, m)
}
handler.help = ['pindl'].map(v => v + ' *<url>*')
handler.tags = ['downloader']
handler.command = /^(pindl)$/i

module.exports = handler
