let handler = async (m, { conn, command, args, usedPrefix, sender, isOwner }) => {
  if (command === 'transaksi') {
    if (!m.mentionedJid[0]) {
      conn.reply(m.chat, 'Tag user yang ingin kamu cek transaksinya..', m)
      return
    }

    let user = m.mentionedJid[0]
    let userDB = global.db.data.users[user]
    let pesan = ''

    if (userDB && userDB.transaksi) {
      let transaksi = userDB.transaksi
      pesan = `「 TRANSAKSI ${transaksi.status} 」\n\n📆 TANGGAL : ${transaksi.tanggal}\n⌚ JAM     : ${transaksi.jam}\n✨ STATUS  : ${transaksi.status}\n📢 ID TRX  : ${transaksi.id}\n\nPesanan ${userDB.name} ${transaksi.status === 'PENDING' ? 'sedang diproses!' : 'sudah selesai!'}`
    } else {
      pesan = `Tidak ada transaksi yang tersedia untuk pengguna ini.`
    }

    conn.reply(m.chat, pesan, m)
    return
  }

  if (!isOwner) {
    conn.reply(m.chat, 'Maaf, hanya pemilik bot yang dapat menggunakan perintah ini.', m)
    return
  }

  let user = m.mentionedJid[0]
  let status = ''

  switch (command) {
    case 'prosess':
      status = 'PENDING'
      break
    case 'done':
      status = 'SELESAI'
      break
    default:
      return
  }

  let tanggal = new Date().toLocaleDateString('id-ID', { timeZone: 'Asia/Jakarta' })
  let jam = new Date().toLocaleTimeString('id-ID', { timeZone: 'Asia/Jakarta' })
  let userDB = global.db.data.users[user]
  let idTrx = ''

  if (userDB && userDB.transaksi && userDB.transaksi.status === status) {
    idTrx = userDB.transaksi.id
  } else {
    idTrx = `#${Math.random().toString(36).substring(7)}`
  }

  let pesan = ''

  if (userDB) {
    userDB.transaksi = {
      tanggal,
      jam,
      status,
      id: idTrx
    }
    global.db.data.users[user] = userDB
    pesan = `Transaksi ${status} berhasil ditambahkan untuk ${userDB.name}.`
  } else {
    pesan = `Tidak dapat menemukan pengguna dalam database.`
  }

  conn.reply(m.chat, pesan, m)
}

handler.help = ['transaksi', 'done *@user*', 'prosess *@user*']
handler.tags = ['store']
handler.command = /^(transaksi|done|prosess)$/i
handler.group = true
handler.register = true

module.exports = handler