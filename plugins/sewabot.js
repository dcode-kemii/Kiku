let fetch = require('node-fetch')
let { MessageType } = require('@adiwajshing/baileys')
let PhoneNumber = require('awesome-phonenumber')
let handler = async (m, { conn }) => {
  let kemii = '```乂 P R I C E  S E W A B O T```\n\n'
  kemii += `➠ *7 Days* : 2.000\n`
  kemii += `➠ *30 Days* : 4.000\n`
  kemii += `➠ *Permanent* : 7.000\n\n`
  kemii += '```-Benefit Features Sewabot :```\n\n'
  kemii += `*1.* Auto Welcome\n`
  kemii += `*2.* Auto Kick\n`
  kemii += `*3.* Auto Open/Close\n`
  kemii += `*3.* Enable Features\n`
  kemii += `*4.* Autoadmin\n`
  let kiku = '```乂 P R I C E  P R E M I U M```\n\n'
  kiku += `➠ *7 Days* : 1.000\n`
  kiku += `➠ *30 Days* : 3.000\n`
  kiku += `➠ *Permanent* : 5.000\n\n`
  kiku += '```-Benefit Features Premium :```\n\n'
  kiku += `*1.* Download Xnxx\n`
  kiku += `*2.* Search Tiktok\n`
  kiku += `*3.* Search Asupan\n`
  kiku += `*4.* Search Xnxx\n`
  kiku += `*5.* Unlimited Limit\n`
  kiku += `*6.* Get Acces Bug & Join\n\n`
  kiku += `ᴋɪᴋᴜ - ᴡᴀʙᴏᴛ ᴍᴀᴅᴇ ʙʏ ᴛᴀᴋᴀꜱʜɪ ᴋᴇᴍɪɪ`
let salsa = await conn.sendMessage(m.chat, {
document: myfile, 
mimetype: minety, 
pageCount: 2023,
fileName: `${author}`,
fileLength: 100000000000000,
caption: `${kemii}\n\n${kiku}`, 
contextInfo: {
forwardingScore: 2023, 
isForwarded: false,
externalAdReply: {
title: '© Kiku-Wabot v5.0.3 (Public Bot)',
body: 'Kemii',
mediaType: 1,
thumbnailUrl: `https://telegra.ph/file/fa4f19a73bbb9ea180489.jpg`,
containsAutoReply: true,
renderLargerThumbnail: true,
showAdAttribution: false,
}}}, { quoted: m })
let name = `${global.author}`
let vcard = `
BEGIN:VCARD
VERSION:3.0
FN:${name.replace(/\n/g, '\\n')}
TEL;type=CELL;type=VOICE;waid=${nomorown}:${PhoneNumber('+' + nomorown).getNumber('international')}
END:VCARD`
await conn.sendMessage(m.chat, {
            contacts: {
                displayName: name,
                contacts: [{ vcard }]
            }
        },  { quoted: salsa })
}
handler.help = ['sewabot', 'premium']
handler.tags = ['main']
handler.command = /^(sewa|sewabot|premium)$/i
handler.private = false

module.exports = handler