let moment = require('moment-timezone')
let time = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('HH:mm:ss z')
let salam = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')

let handler = async (m, { conn, text, command, usedPrefix }) => {
if (!text) return conn.reply(m.chat, `• *Example :* ${usedPrefix + command} Kemii Hentai`, m)
let call = { 
scheduledCallCreationMessage: {
callType: 2,
scheduledTimestampMs:  Date.now(),
title: `${text}`
}}
conn.relayMessage(m.chat, call, {})
}
handler.help = ['infobansos *<text>*']
handler.tags = ['premium']
handler.premium = false
handler.owner = true
handler.command = /^(infobansos|cal)$/i
handler.register = true
handler.limit = true

module.exports = handler