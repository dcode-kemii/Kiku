let handler = async (m, { command, text }) => {
let jawab = ['Ya', 'Mungkin iya', 'Mungkin', 'Mungkin tidak', 'Tidak', 'Tidak mungkin']
let siapa = jawab[Math.floor(Math.random() * jawab.length)]
conn.reply(m.chat, `
*Pertanyaan:* ${command} ${text}
*Jawaban:* ${siapa}
  `, m)
}
handler.help = ['apakah *<teks>*']
handler.tags = ['kerang']

handler.command = /^apakah$/i
handler.limit = true

module.exports = handler