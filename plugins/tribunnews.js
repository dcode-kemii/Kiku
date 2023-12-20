const fetch = require("node-fetch")
let handler = async(m, { conn }) => {
   var a = await require('dhn-api').TribunNews()
   var b = JSON.parse(JSON.stringify(a))
   var c = await conn.rand(b)
   //var c = b[Math.floor(Math.random() * b.length)]
   var { berita, berita_url, berita_thumb, berita_jenis, berita_diupload } = c
   var sell = `*Tribun News*

*Berita:* ${berita}
*Jenis:* ${berita_jenis}
*Uploded:* ${berita_diupload}
*Source:* ${berita_url}`

// Pengiriman
conn.sendMessage(m.chat, {
text: sell,
contextInfo: {
externalAdReply: {
title: berita,
body: berita_jenis,
thumbnailUrl: berita_thumb,
sourceUrl: berita_url,
mediaType: 1,
renderLargerThumbnail: true
}}})
}
handler.help = ['tribunnews']
handler.tags = ['tools']
handler.command = /^tribun(news)?$/i
handler.limit = true

module.exports = handler