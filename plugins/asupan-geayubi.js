let fetch = require('node-fetch')
let handler = async(m, { conn, usedPrefix, command }) => {
  let res = await fetch('https://raw.githubusercontent.com/binjaicity/warga62/master/geayubi.json')
  //if (!res.ok) throw await res.json()
  let asup = await res.json()
  let json = asup[Math.floor(Math.random() * asup.length)]
  //if (!json.url) throw 'Error!'
  conn.sendFile(m.chat, json.url, 'mp4', done, m)
}
handler.help = ['geayubi']
handler.tags = ['asupan']
handler.premium = true
handler.command = /^(geayubi)$/i
//MADE IN ERPAN 1140 BERKOLABORASI DENGAN BTS
module.exports = handler