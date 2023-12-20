var fetch = require("node-fetch")

async function handler(m) {
conn.sendMessage(m.chat, { react: { text: "🕒", key: m.key } });
  var kemii = await fetch(`https://api.lolhuman.xyz/api/corona/global?apikey=${global.lolkey}`)
  var res = await kemii.json()
  var hasil = `• Total Kasus: *${res.result.positif}*
• Total Pulih: *${res.result.sembuh}*
• Total Kematian: *${res.result.meninggal}*
• Total Dirawat: *${res.result.dirawat}*
`
await m.reply(hasil)
}

handler.command = handler.help = ['covid']
handler.tags = ['internet']

module.exports = handler