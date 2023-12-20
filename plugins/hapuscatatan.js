let handler = async(m, {conn, command, usedPrefix, text}) => {
  global.db.data.users[m.sender].catatan = global.db.data.users[m.sender].catatan || []
  let i = 0
  if (global.db.data.users[m.sender].catatan.length == 0) return conn.reply(m.chat, 'Kamu belum punya catatan!', m)
  let txt = '🗒️Daftar catatan🗒️\n\n'
  for (let ct in global.db.data.users[m.sender].catatan) {
    i += 1
    txt += '[' + i + ']. ' + global.db.data.users[m.sender].catatan[ct].title + '\n'
  }
  txt += `• *Example :* ${usedPrefix}hapuscatatan 1`
  if (text.length == 0) return conn.reply(m.chat, txt, m)
  let catatan = global.db.data.users[m.sender].catatan
  let split = text.split('|')
  if (catatan.length == 0) return conn.reply(m.chat, 'Kamu belum memiliki catatan!', m)
  let n = Number(split[0]) - 1
  if (catatan[n] == undefined) return conn.reply(m.chat, 'Catatan tidak ditemukan!', m)
  let tmp = []

  for (let ct in catatan) {
    if(ct != n) {
      tmp.push(catatan[ct])
    } else {
      continue
    }
  }

  cdang = global.db.data.users[m.sender].catatan
  global.db.data.users[m.sender].catatan = tmp

conn.reply(m.chat, `Berhasil menghapus catatan!`, m, false, {
    contextInfo: {
      mentionedJid: conn.parseMention(text)
    }
  })
}

handler.help = ['hapuscatatan *<text>*']
handler.tags = ['catatan']
handler.command = /^hapuscatatan$/i

module.exports = handler