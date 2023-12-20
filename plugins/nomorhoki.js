const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()

let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) return conn.reply(m.chat, `• *Example :* ${usedPrefix + command} 628816609112`, m)
  primbon.nomer_hoki(text).then((res) => {
    console.log(res)
    let dann = `
Nomor HP: ${res.message.nomer_hp}
Angka Shuzi: ${res.message.angka_shuzi}

• *ENERGI POSITIF*
Kekayaan: ${res.message.energi_positif.kekayaan}
Kesehatan: ${res.message.energi_positif.kesehatan}
Cinta: ${res.message.energi_positif.cinta}
Kestabilan: ${res.message.energi_positif.kestabilan}
Persentase: ${res.message.energi_positif.persentase}

• *ENERGI NEGATIF*
Perselisihan: ${res.message.energi_negatif.perselisihan}
Kehilangan: ${res.message.energi_negatif.kehilangan}
Malapetaka: ${res.message.energi_negatif.malapetaka}
Kehancuran: ${res.message.energi_negatif.kehancuran}
Persentase: ${res.message.energi_negatif.persentase}

• *CATATAN*
${res.message.catatan}
`

m.reply(dann)
    })
  }
handler.help = ['nomorhoki *<number>*']
handler.tags = ['internet']
handler.command = /^(nomorhoki)$/i
handler.limit = true

module.exports = handler
