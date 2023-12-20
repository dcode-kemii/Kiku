let clockstring = '08:00' // Contoh nilai clockstring
let isAlarmActive = false // Variabel untuk menandakan apakah alarm aktif atau tidak

// Fungsi untuk memainkan bunyi alarm
function playAlarm() {
  // Kode untuk memainkan bunyi alarm
  console.log('Alarm berbunyi!')
}

// Fungsi untuk mengatur jam alarm
function setAlarmTime(time) {
  clockstring = time
  console.log(`Jam alarm berhasil diatur menjadi ${clockstring}`)
}

// Fungsi untuk mematikan alarm
function turnOffAlarm() {
  clockstring = null
  console.log('Alarm berhasil dimatikan')
}

let handler = async (m, { conn, args }) => {
  let command = args[0] // Mendapatkan argumen pertama dari pesan

  if (command === 'atur') {
    let time = args[1] // Mendapatkan argumen kedua dari pesan sebagai waktu baru
    setAlarmTime(time)
    isAlarmActive = true
    conn.reply(m.chat, `Jam alarm berhasil diatur menjadi ${clockstring}`, m)
  } else if (command === 'matikan') {
    turnOffAlarm()
    isAlarmActive = false
    conn.reply(m.chat, `Alarm berhasil dimatikan`, m)
  } else {
    conn.reply(m.chat, `Pilihan yang tersedia: atur, matikan`, m)
  }

  // Memeriksa apakah alarm aktif dan waktu saat ini sama dengan waktu alarm
  if (isAlarmActive && new Date().toLocaleTimeString() === clockstring) {
    playAlarm()
  }
}

handler.help = ['dering']
handler.tags = ['main']
handler.command = /^(dering)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.limit = true
handler.admin = false
handler.botadmin = false

handler.fail = null

module.exports = handler