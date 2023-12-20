var api = require("hxz-api")

var handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) return conn.reply(m.chat, `• *Example :* ${usedPrefix + command} hunter x hunter`, m)
  conn.sendMessage(m.chat, { react: { text: '🕐', key: m.key }})
  var dann = await api.otakudesu(text)
  var hasil = `Creator: *${dann.message}*\nJudul: *${dann.judul}*\nJepang: *${dann.jepang}*\nRating: *${dann.rate}*\nProduser: *${dann.produser}*\nTipe: *${dann.tipe}*\nStatus: *${dann.status}*\nEpisode: *${dann.episode}*\nDurasi: *${dann.durasi}*\nRilis: *${dann.rilis}*\nStudio: *${dann.studio}*\nGenre: *${dann.genre}*\nDeskripsi: ${dann.desc}\nBatch: *${dann.batch}*`
  await conn.sendFile(m.chat, dann.img, 'otakudesu.jpg', `${hasil}`, m)
}

handler.help = ['otakudesu *<text>*']
handler.tags = ['internet']
handler.command = /^(otakudesu)$/i

module.exports = handler