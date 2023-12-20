let handler = async(m, {conn, command, usedPrefix, text}) => {
  let fail = '• *Example :* .buatcatatan Kemii|1. Ngewe'
  global.db.data.users[m.sender].catatan = global.db.data.users[m.sender].catatan || []
  let catatan = global.db.data.users[m.sender].catatan
  let split = text.split('|')
  let title = split[0]
  let isi = split[1]
  if (catatan.includes(title)) return conn.reply(m.chat, '🚩 Judul tidak tersedia!\n\nAlasan: Sudah digunakan', m)
  if (!title || !isi) return conn.reply(m.chat, fail, m)
  let cttn = {
    'title': title,
    'isi': isi
  }
  global.db.data.users[m.sender].catatan.push(cttn)
  conn.reply(m.chat, `🚩 Catatan berhasil dibuat!\nUntuk melihat catatan. Ketik: ${usedPrefix}lihatcatatan`, m, false, {
    contextInfo: {
      mentionedJid: conn.parseMention(text)
    }
  })
}

handler.help = ['buatcatatan *<title|isi>*']
handler.tags = ['catatan']
handler.command = /^buatcatatan$/i

module.exports = handler