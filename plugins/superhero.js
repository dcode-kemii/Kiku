let fetch = require('node-fetch')
let uploadImage = require('../lib/uploadImage.js')

let handler = async (m, { conn, usedPrefix, command, text }) => {
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  let name = await conn.getName(who)
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) return conn.reply(m.chat, `Send/Reply Images with the caption *.${command}*`, m)
	conn.sendMessage(m.chat, {
		react: {
			text: '🕒',
			key: m.key,
		}
	})
  let media = await q.download()
  let url = await uploadImage(media)
  let hasil = await fetch(`https://skizo.tech/api/aimirror?&apikey=${global.xzn}&url=${url}&filter=superhero_comic`)
  let res = await hasil.json()
  let kemii = `_◦ Status_ : ${res.draw_status}
_◦ Time Clear_ : ${res.time_processing}
_◦ Image To_ : ${res.your_choice_filter}`
  await conn.sendFile(m.chat, res.generated_image_addresses, 'superhero.jpg', kemii, m)
}

handler.help = ['superhero_comic *<image>*']
handler.tags = ['convert']
handler.premium = false
handler.command = /^(superhero_comic)$/i
handler.register = true
handler.limit = true
handler.private = false

module.exports = handler