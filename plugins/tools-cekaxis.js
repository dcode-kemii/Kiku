let axios = require("axios")
let handler = async (m, { text, conn }) => {
let name = await conn.getName(m.sender)

if (!text) throw `masukan auth token !

*# Cara Dapet Auth Token :*
1. masuk ke https://tools.tutorialinjectid.my.id/auth-axis/
2. masukan nomor telpon mu (Harus Axis !)
3. masukan code otp yang diberikan
4. lalu klick tombol \"+ Create\"`
try {
conn.sendMessage(m.chat, { react: { text: '🕐', key: m.key }})
function bar(p) {
  let titik = "░░░░░░░░░░".split("")
  for (let i = 1; i <= p; i++) {
    if (i%10 == 0) {
      titik[(i/10)-1] = "█";
    }
  }
  return "[ " + titik.join(" ") + " ]";
}

let {data} = await axios({
  "headers": {
    "Authorization": text,
    "User-Agent": "okhttp/4.2.2"
  },
  "method": "GET",
  "url": "https://quota.api.axis.co.id/quota"
})
let {result} = JSON.parse(atob(data.data))
if (!result.detail) throw "Ga ada kuotanya bro :v"
let sisakuota = ''
for (let kuota of result.detail) {
    let dateberlaku = new Date(kuota.benefitData.activeUntil)
    let bulan0 = dateberlaku.toLocaleDateString('id', {month: 'long'})
    let bulan = bulan0[0]+bulan0[1]+bulan0[2]
    sisakuota += `*# ${kuota.name}*
${bar(kuota.percentRemaining)}

• Total : ${kuota.total}
• Sisa : ${kuota.remaining}
• Terpakai : ${kuota.usage}

• Sisa Hari : ${kuota.benefitData.sisaHari}
• Expired : s.d. ${dateberlaku.getDate()} ${bulan} ${dateberlaku.getFullYear()} ${dateberlaku.getHours()}:${dateberlaku.getMinutes()}\nミミミミミミミミミミミミミミミミミミミミミミミ\n`
}
conn.reply(m.chat, sisakuota, m, {
      contextInfo: {
        externalAdReply: {
          title: `Hai Kak ${name} Di Bawah Di Adalah Info Kouta Axismu 😉`,
          thumbnailUrl: 'https://telegra.ph/file/3fe97c5cf4accbeb4c653.jpg',
          sourceUrl: 'https://chat.whatsapp.com/EHvO9j6JMHb9roHNTvtbdy',
          mediaType: 1,
          renderLargerThumbnail: true
        }
      }
    });
     } catch (error) {
    console.log(error)
    m.reply('🐱 Failed.')
  }
}
handler.help = ['cekaxis <auth>']
handler.tags = ['tools']
handler.command = /^(cek)?axis$/i

module.exports = handler