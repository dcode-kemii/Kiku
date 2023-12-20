let fetch = require('node-fetch')

let handler = async (m, { conn, text, usedPrefix, command }) => {
	if (!text) return conn.reply(m.chat, `• *Example :* ${usedPrefix + command} magplant`, m)
	let dann = await fetch(`https://api.lolhuman.xyz/api/growstocks?apikey=${global.lolkey}&query=${text}`)
	let res = await dann.json()
	let hasil = `Nama: ${res.result.name}\nDeskripsi: ${res.result.desc}\nPrice: ${res.result.price_status}\nDemand = ${res.result.demand_status}\nEdited: ${res.result.edited}\n\nSource: ${res.result.source}`
	let thumb = `https://api.lolhuman.xyz/api/gimage?apikey=${global.lolkey}&query=growtopia%20${text}`
	conn.sendMessage(m.chat, {
		text: hasil,
		contextInfo: {
		externalAdReply: {
		title: "G r o w - S t o c k",
		thumbnailUrl: 'https://telegra.ph/file/d2ea8bd5edf7c9df7d2a1.jpg',
		mediaType: 1,
		renderLargerThumbnail: true
		}}})
}

handler.help = ['growstock *<text>*']
handler.tags = ['internet']
handler.command = /^(growstock)$/i

module.exports = handler