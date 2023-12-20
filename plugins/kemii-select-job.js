let handler = async (m, { conn, usedPrefix, text, command}) => {

var user = global.db.data.users[m.sender]

global.job = ["kuli", "pedagang", "montir", "petani", "dokter","ojek","pembunuh"]
   
   let jobb = text.trim().toLowerCase() // to filter text
     
   if (!job.includes(jobb)) return conn.reply(m.chat, `Select *job* what do you want/pilih job apa yg kamu inginkan:\n\n${job.map(jobb => `› ${jobb}`, m).join('\n')}

     How To use/Cara menggunakan:
     ${usedPrefix + command} <namejob>
     
     Example/Contoh:
     ${usedPrefix + command} Ojek
     `

    if (user.job == "") {
    user.job = jobb
    conn.reply(m.chat, `Anda telah memilih Job ${jobb}`, m)
    } else if (user.job) {
    conn.reply(m.chat, `Anda Sudah Punya Job ${user.job} Tidak bisa diganti`, m)
   }

}

handler.help = ['selectjob *<text>*']
handler.tags = ['rpg']
handler.command = /^(slectjob|selectjob)$/i

module.exports = handler;
