let { URL_REGEX } = require('@adiwajshing/baileys')
let { fileTypeFromBuffer } = require('file-type')
let { Pixiv } = require('@ibaraki-douji/pixivts')
const pixiv = new Pixiv()

let handler = async (m, { conn, text }) => {
	if (!text) return conn.reply(m.chat, '• *Example :* .pixivdl https://pixivdl.com/xxxx', m)
	let res = await pixivDl(text)
	conn.sendMessage(m.chat, { react: { text: "🕒", key: m.key } });
	for (let i = 0; i < res.media.length; i++) {
		let caption = i == 0 ? `${res.caption}\n\n*By:* ${res.artist}\n*Tags:* ${res.tags.join(', ')}` : ''
		let mime = (await fileTypeFromBuffer(res.media[i])).mime 
		await conn.sendMessage(m.chat, { [mime.split('/')[0]]: res.media[i], done, mimetype: mime }, { quoted: m })
	}
}
handler.help = ['pixivdl'].map(v => v + ' *<url>*')
handler.tags = ['downloader']
handler.command = /^(pixivdl)$/i

module.exports = handler

async function pixivDl(query) {
	if (query.match(URL_REGEX)) {
		if (!/https:\/\/www.pixiv.net\/en\/artworks\/[0-9]+/i.test(query)) throw 'Invalid Pixiv Url'
		query = query.replace(/\D/g, '')
		let res = await pixiv.getIllustByID(query).catch(() => null)
		if (!res) throw `ID "${query}" not found :/`
		let media = []
		for (let x = 0; x < res.urls.length; x++) media.push(await pixiv.download(new URL(res.urls[x].original)))
		return {
			artist: res.user.name, caption: res.title, tags: res.tags.tags.map(v => v.tag), media
		}
	} else {
		let res = await pixiv.getIllustsByTag(query)
		if (!res.length) throw `Tag's "${query}" not found :/`
		res = res[~~(Math.random() * res.length)].id
		res = await pixiv.getIllustByID(res)
		let media = []
		for (let x = 0; x < res.urls.length; x++) media.push(await pixiv.download(new URL(res.urls[x].original)))
		return {
			artist: res.user.name, caption: res.title, tags: res.tags.tags.map(v => v.tag), media
		}
	}
}