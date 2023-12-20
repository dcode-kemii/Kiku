let axios = require('axios')
let uploadImage = require('../lib/uploadImage.js')
let handler = async (m, { conn, args, usedPrefix, text }) => {
    let q = m.quoted ? m.quoted: m
    let mime = (q.msg || q).mimetype || ''
    if (!mime) return conn.reply(m.chat, 'Send Reply Image', m)
    let img = await q.download()
    let url = await uploadImage(img)
    if (!text) return conn.reply(m.chat,  `• *Example :* .bardi Apa Gambar Ini`, m)
    let salsa = await conn.reply(m.chat, '```Sedang mencari jawaban...🔍```', m)
    try {
    let kemii = `https://api.yanzbotz.my.id/api/ai/bardimg?query=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}&apiKey=${global.yanz}`
    let { data } = await axios.get(kemii)
    let hasil = data.result
    await conn.sendMessage(m.chat, { text: `${hasil}`, edit: salsa })
    } catch (e) {
    console.log(e);
    conn.reply(m.chat, `Gagal Silahkan Ulangi Command`, m)
  }
}
handler.help = ['bardi *<text>*']
handler.tags = ['ai']
handler.command = /^(bardi)$/i
handler.premium = false
module.exports = handler