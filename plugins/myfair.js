let fetch = require('node-fetch')
let uploadImage = require('../lib/uploadImage.js')

let handler = async (m, { conn, usedPrefix, command, text }) => {
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
if (!mime) return conn.reply(m.chat, 'Send/Reply Images with the caption *.myfair*', m)
  conn.sendMessage(m.chat, {
    react: {
      text: '🕒',
      key: m.key,
    }
  });
let media = await q.download()
let url = await uploadImage(media)
let hasil = await (await fetch(`https://api.lolhuman.xyz/api/filter/mayfair?apikey=${global.lolkey}&img=${url}`)).buffer()
  conn.sendMessage(m.chat, {
    react: {
      text: '☑️',
      key: m.key,
    }
  });
await conn.sendFile(m.chat, hasil, '', '```Success...\nDont forget to donate```', m)
	
}
handler.help = ['myfair *<image>*']
handler.tags = ['maker']
handler.command = /^(myfair)$/i
handler.limit = true

module.exports = handler