let fetch = require('node-fetch')
let { sticker } = require('../lib/sticker.js')
let uploadFile = require('../lib/uploadFile.js')
let uploadImage = require('../lib/uploadImage.js')
let { webp2png } = require('../lib/webp2mp4.js')

let handler = async (m, { conn, text, usedPrefix, command, participants}) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(m.sender, 'image').catch(_ => 'https://telegra.ph/file/a2ae6cbfa40f6eeea0cf1.jpg')
let name = await conn.getName(who)
let stiker = false

    if (!m.quoted) throw 'reply stikernya...'
  let mime = m.quoted.mimetype || ''
  if (!/webp/.test(mime)) throw 'stiker invalid'
  let media = await m.quoted.download()
  let out = Buffer.alloc(0)
    try {
    out = await uploadImage(media)
    } catch {
    out = await webp2png(media)
    }
    
    stiker = await sticker(false, out, global.packname, global.author)
    if (stiker) conn.sendFile(m.chat, stiker, 'sticker.webp', '', m, null, { fileLength: fsizedoc, contextInfo: {
    mentions: participants.map(a => a.id),
          externalAdReply :{
          showAdAttribution: true,
    mediaUrl: sig,
    mediaType: 2,
    description: wm, 
    title: '👋 Hai, ' + name + ' ',
    body: botdate,
    thumbnail: await(await fetch(pp)).buffer(),
    sourceUrl: sgc
     }}
  })
}
//lo mau apa??
handler.help = ['stickertag <caption|reply>', 'sticktag <url>']
handler.tags = ['group']
handler.command = /^(stickertag|sticktag)$/i

module.exports = handler


const isUrl = (text) => {
  return text.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)(jpe?g|gif|png)/, 'gi'))
}