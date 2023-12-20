let uploadImage = require('../lib/uploadImage.js')
let { sticker } = require('../lib/sticker.js')
let handler = async (m, { conn, text, usedPrefix, command }) => {
    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || ''
    if (!/image\/(jpe?g|png)/.test(mime)) throw `Gambar Yang Anda Masukan Tidak Didukung`
    conn.sendMessage(m.chat, { react: { text: '🕐', key: m.key }})
    let img = await q.download()
    let url = await uploadImage(img)
    let meme = API('https://api.lolhuman.xyz', '/api/editor/wasted', { img: url }, 'apikey')
    let stiker = await sticker(false, meme)
    if (stiker) await conn.sendFile(m.chat, stiker, '', author, m, null)
}
handler.help = ['wasted']
handler.tags = ['sticker']
handler.command = /^(wasted)$/i
handler.limit = true
module.exports = handler