let fetch = require('node-fetch')
let handler = async (m, { text, usedPrefix, command }) => {
     if (!text) return conn.reply(m.chat, `• *Example :* ${usedPrefix + command} adam`, m)
     conn.sendMessage(m.chat, { react: { text: "🕒", key: m.key } });
     let url = await fetch(`https://api.lolhuman.xyz/api/kisahnabi/${text}?apikey=${global.lolkey}`)
     let kisah = await url.json()
     let hasil = ` Nabi : ${kisah.result.name}\nTanggal Lahir : ${kisah.result.thn_kelahiran}\nTempat Lahir : ${kisah.result.place}\nUsia : ${kisah.result.age}\nKisah : ${kisah.result.story}`
     conn.reply(m.chat, hasil, m)
     }
handler.help = ['kisahnabi *<name>*']
handler.tags = ['islami']
handler.command = /^kisahnabi$/i
handler.register = false
handler.limit = true

module.exports = handler