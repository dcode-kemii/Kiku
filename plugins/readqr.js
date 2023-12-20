let fetch = require('node-fetch')
let uploadImage = require('../lib/uploadImage.js')

let handler = async (m, { conn, usedPrefix, command, text }) => {
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  let name = await conn.getName(who)
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) return conn.reply(m.chat, 'Send/Reply Images with the caption *.readqr*', m)
	conn.sendMessage(m.chat, {
		react: {
			text: '🕒',
			key: m.key,
		}
	})
  let media = await q.download()
  let url = await uploadImage(media)
  let hasil = await (await fetch(`https://api.lolhuman.xyz/api/read-qr?apikey=${global.lolkey}&img=${url}`)).json()
  await conn.reply(m.chat, hasil.result, m)
}

handler.help = ['readqr *<image>*']
handler.tags = ['tools']
handler.premium = false
handler.command = /^(readqr)$/i
handler.register = true
handler.limit = true
handler.private = false

module.exports = handler