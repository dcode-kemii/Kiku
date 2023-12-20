let fs = require('fs')
let moment = require('moment-timezone')

let handler = async (m, { usedPrefix, command, conn, text }) => {
let mentionedJid = [m.sender]
let name = conn.getName(m.sender)

let flaaa2 =[
'https://telegra.ph/file/7e718b8157fb110c9e17c.jpg',]
    let totalreg = Object.keys(global.db.data.users).length
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
   let kiku = `
┌──>
│
│Database Saat Ini
│
└───> ${totalreg}

┌──>
│
│Terdaftar Saat Ini
│
└───> ${rtotalreg}`
    conn.sendPresenceUpdate("composing", m.chat)
    conn.sendMessage(m.chat, {
text: `${kiku}`,
contextInfo: {
mentionedJid: [m.sender],
externalAdReply: {
title: "D a t a b a s e - K i k u c h a n j",
thumbnailUrl: 'https://telegra.ph/file/d5dbf6bc4d5ee1fab674b.jpg',
mediaType: 1,
renderLargerThumbnail: true
}}})
}
handler.help = ['user']
handler.tags = ['info']
handler.command = /^(pengguna|(jumlah)?database|user)$/i

module.exports = handler

function ucapan() {
  const time = moment.tz('Asia/Jakarta').format('HH')
  let res = "Selamat Malam"
  if (time >= 4) {
    res = "Selamat Pagi"
  }
  if (time >= 10) {
    res = "Selamat Siang"
  }
  if (time >= 15) {
    res = "Selamat Sore"
  }
  if (time >= 18) {
    res = "Selamat Malam"
  }
  return res
}

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)