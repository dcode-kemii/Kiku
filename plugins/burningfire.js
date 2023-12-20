let fetch = require('node-fetch')
let uploadImage = require('../lib/uploadImage.js')

let handler = async (m, { conn, usedPrefix, command, text }) => {
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  let name = await conn.getName(who)
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) return conn.reply(m.chat, 'Send/Reply Images with the caption *.burningfire*', m)
	conn.sendMessage(m.chat, {
		react: {
			text: '🕒',
			key: m.key,
		}
	})
  try {
  let media = await q.download()
  let url = await uploadImage(media)
  let hasil = await (await fetch(`https://api.lolhuman.xyz/api/photofunia/burningfire?apikey=${global.lolkey}&img=${url}`)).buffer()
  await conn.sendImageAsSticker(m.chat, hasil, m, { packname: "sticker by", author: "Kemii" })
   } catch (e) {
    console.log(e);
    conn.reply(m.chat, `Failed :(`, m)
  }
}

handler.help = ['burningfire <image>']
handler.tags = ['tools']
handler.premium = false;
handler.command = /^(burningfire)$/i
handler.register = true
handler.limit = true

module.exports = handler