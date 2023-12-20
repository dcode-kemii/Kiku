let fetch = require('node-fetch')

let handler = async (m, { conn, text, usedPrefix, command }) => {
	if (!text) return conn.reply(m.chat, `• *Example :* ${usedPrefix + command} magplant`, m)
	let kemii = await fetch(`https://api.lolhuman.xyz/api/growiki?apikey=${global.lolkey}&query=${text}`)
	let res = await kemii.json()
	let hasil = `Name: ${res.result.name}\nDeskripsi: ${res.result.desc}\nRarity: ${res.result.rarity}\nRecipe: ${res.result.recipe}\nSplice: ${res.result.splice}\n\nInfo: ${res.result.info}`
	let thumb = `https://api.lolhuman.xyz/api/gimage?apikey=${global.lolkey}&query=growtopia%20${text}`
	conn.sendMessage(m.chat, {
		text: hasil,
		contextInfo: {
		externalAdReply: {
		title: 'G r o w - W i k i',
		thumbnailUrl: 'https://telegra.ph/file/6790948a797277fd34033.jpg',
		mediaType: 1,
		renderLargerThumbnail: true
		}}})
}

handler.help = ['growiki *<text>*']
handler.tags = ['internet']
handler.command = /^(growiki)$/i

module.exports = handler