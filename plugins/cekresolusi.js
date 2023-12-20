let jimp = require("jimp")
let uploadImage = require("../lib/uploadImage.js")
let uploadFile = require("../lib/uploadFile.js")

let handler = async (m, { conn, usedPrefix }) => {
	
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
if (!mime) return conn.reply(m.chat, "Send/Reply media with caption *.cekresolution*", m)
conn.sendMessage(m.chat, {
		react: {
			text: '',
			key: m.key,
		}
	})

let media = await q.download()
let isMedia = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime)
let link = await (isMedia ? uploadImage : uploadImage)(media)

let source = await jimp.read(await link)
let height = await source.getHeight()
let width = await source.getWidth()

conn.reply(m.chat, `*_RESOLUSI:_* ${width} x ${height}

*> Lebar :* ${width}
*> Tinggi :* ${height}

*> Link :* ${link}`, m)
}
handler.help = ['cekresolution *<image>*', 'cekreso *<image>*']
handler.tags = ['tools']
handler.command = /^(cekreso(lution)?)$/i

module.exports = handler