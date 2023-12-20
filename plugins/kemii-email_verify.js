let handler = m => m
handler.before = async function (m) {
      try {
         let users = global.db.data.users[m.sender]
         if (!m.isGroup && m.text.toLowerCase(/\d{3}-\d{3}/) && !users.registered) {
         if (m.text.toLowerCase() == users.code.toLowerCase().trim()) {
            if (m.text.toLowerCase() == !users.code.toLowerCase().trim()) return conn.reply(m.chat, '```🚩 Code Verifikasi kamu Salah Kak.```', m)
            if (new Date - users.codeExpire > 180000) return conn.reply(m.chat, '```🚩 Yahh Kode Verifikasi Kamu Udah Kaladurasa kak..```', m).then(() => {
               users.codeExpire = 0
               users.code = ''
               users.email = ''
               users.attempt = 0
            })
            return conn.reply(m.chat, '```✅ Yeay Nomor Kamu Berhasil Terverifikasi!\nSilahkan Ketik .menu Untuk Menampilkan Fitur Bot!```', m).then(() => {
               users.codeExpire = 0
               users.code = ''
               users.attempt = 0
               users.registered = true
            })
         }}
      } catch (e) {
         m.reply(m.chat, `SorryErroR`, m)
      }
   }
module.exports = handler
handler.private = true