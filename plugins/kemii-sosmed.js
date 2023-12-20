let fetch = require('node-fetch')
let fs = require('fs')

let handler = async (m, { conn, args, text, usedPrefix: _p, command, isROwner }) => {
let user = global.db.data.users[m.sender]
let nomer = `${m.sender.split('@')[0]}`
let data = JSON.parse(fs.readFileSync("./lib/user.json"))
let username = user.name

switch (command) {
          case "sfollow": {
          let salsa = data.includes(nomer)
          if (!salsa) throw 'Kamu Belum Login Ke Akun Sosmed, Silahkan Login/Daftar Terlebih Dahulu'
          let who;
          if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender;
          else who = m.sender
          if (!m.mentionedJid[0]) throw `tag yang mau difollow`;
          let user = global.db.data.users[who]
          let username = user.name
          global.db.data.users[who].followers -= 1
          global.db.data.users[m.sender].following += 1
          let capt = `Berhasil Memfollow Username : *${username}*`
          conn.reply(m.chat, capt, m)
          }
          break
          case "sdaftar": {
          if (user.login == true) throw 'Kamu Sudah Mendaftar, Tidak Bisa Mendaftarkan Ulang!'
          let capt = 'Berhasil Mendaftar Akun Sosmed, Silahkan Ketik .slogin Untuk Login Ke Akun'
          conn.reply(m.chat, capt, m)
          data.push(nomer)
          fs.writeFileSync("./lib/user.json", JSON.stringify(data))
          }  
          break
          case "slogout": {
          if (user.login == false) throw 'Kamu Belum Login Ke Akun Sosmed, Silahkan Login/Daftar Terlebih Dahulu'
          let capt = 'Berhasil logout akun, silahkan ketik .login untuk login ulang'
          conn.reply(m.chat, capt, m)
          let del = data.indexOf(nomer)
          data.splice(del, 1)
          fs.writeFileSync("./lib/user.json", JSON.stringify(data))
          user.login = false
          }
          break
          case "slogin": {
          let salsa = data.includes(nomer)
          if (!salsa) throw 'Kamu Belum Daftar Ke Akun Sosmed Silahkan Daftar Terlebih Dahulu'
          if (user.login == true) throw 'Kamu sudah login, tidak bisa login ke akun sosmed lagi!'
          let capt = `Berhasil login Ke akun sosmed dengan username : *${username}*`
          conn.reply(m.chat, capt, m)
          user.login = true
          }
          break
          case "sverifed": {
          let salsa = data.includes(nomer)
          if (!salsa) throw 'Kamu Belum Login Ke Akun Sosmed, Silahkan Login/Daftar Terlebih Dahulu'
          let capt = `Hello Senpai ${username}, Jika anda Ingin mendapatkan centang/verifed, akun anda harus user premium seharga Rp 5.000, untuk membeli premium silahkan ketik .buyprem`
          conn.reply(m.chat, capt, m)
          }
          break
}
}
handler.help = [
"sdaftar",
"sprofile",
"sfollow",
"slogin",
"slogout",
"sverifed"
]
handler.command = /^(sdaftar|sprofile|sfollow|slogout|sverifed|slogin)$/i  
handler.tags = ['sosmed']
handler.limit = false
handler.owner = false
module.exports = handler