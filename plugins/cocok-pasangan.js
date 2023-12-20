const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
let limit = 30

let handler = async (m, { conn, text, args, usedPrefix, command }) => {
  let response = args.join(' ').split('|')
  if (!text) return conn.reply(m.chat, `• *Example :* ${usedPrefix + command} kemii|alok`, m)
// Kecocokan Nama Pasangan
primbon.kecocokan_nama_pasangan(`${response[0]}`, `${response[1]}`).then((res) => {
    console.log(res)
    let gambar = 'https://telegra.ph/file/48be9e5ce1ffe2def2761.jpg'
    let kemii = `
• *COCOK PASANGAN*
Nama Anda: ${res.message.nama_anda}
Nama Pasangan: ${res.message.nama_pasangan}

• *SISI POSITIF*
${res.message.sisi_positif}

• *SISI NEGATIF*
${res.message.sisi_negatif}

• *CATATAN*
${res.message.catatan}
`
  conn.sendMessage(m.chat, {
    text: kemii,
    contextInfo: {
      externalAdReply: {
        title: 'P a s a n g a n',
        thumbnailUrl: gambar,
        mediaType: 1,
        renderLargerThumbnail: true
      }}})
})
}

handler.help = ['cpasangan *<text|text>*']
handler.command = /^cpasangan$/i;
handler.tags = ['fun']
handler.owner = false
handler.limit = true

module.exports = handler