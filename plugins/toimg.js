let { webp2png } = require('../lib/webp2mp4')
let handler = async (m, { conn, usedPrefix, command }) => {
  if (!m.quoted) throw `Reply sticker with caption *${usedPrefix + command}*`
	conn.sendMessage(m.chat, {
		react: {
			text: '🕒',
			key: m.key,
		}
	})
  let mime = m.quoted.mimetype || ''
  if (!/webp/.test(mime)) throw `Reply sticker with caption *${usedPrefix + command}*`
  let media = await m.quoted.download()
  let out = Buffer.alloc(0)
  if (/webp/.test(mime)) {
    out = await webp2png(media)
  }
  await conn.sendFile(m.chat, out, 'out.png', '```Success...\nDont forget to donate```', m, false, {
    thumbnail: Buffer.alloc(0)
  })
}
handler.help = ['toimg (reply)']
handler.tags = ['sticker']
handler.command = ['toimg']
handler.register = true
handler.limit = true
module.exports = handler