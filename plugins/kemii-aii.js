let axios = require('axios')
let uploadImage = require('../lib/uploadImage.js')
let handler = async (m, { conn, args, usedPrefix, text }) => {
    let q = m.quoted ? m.quoted: m
    let mime = (q.msg || q).mimetype || ''
    if (!mime) return conn.reply(m.chat, 'Send Reply Image', m)
    let img = await q.download()
    let url = await uploadImage(img)
    if (!text) return conn.reply(m.chat,  `• *Example :* .aii cara mengerjakan soal ini`, m)
    let salsa = await conn.reply(m.chat, '```Sedang mencari jawaban...🔍```', m)
    let kemii = `https://api.yanzbotz.my.id/api/ai/chatgpt-image?url=${encodeURIComponent(url)}&query=${encodeURIComponent(text)}&apiKey=${global.yanz}`
    let { data } = await axios.get(kemii)
    let hasil = data.result
    await conn.sendMessage(m.chat, { text: `${hasil}`, edit: salsa })
}
handler.help = ['aii *<text>*']
handler.tags = ['ai']
handler.command = /^(aii)$/i
handler.premium = false
module.exports = handler