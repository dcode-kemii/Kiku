let fetch = require ('node-fetch')
let axios = require ('axios')
let { sticker5 } = require ('../lib/sticker.js')
let MessageType = require ('@adiwajshing/baileys')
//import db from '../lib/database.js'

let handler = async (m, { conn, args, usedPrefix, command }) => {
	
	 let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false
    else who = m.chat
    if (!who) return conn.reply(m.chat, `• *Example :* ${usedPrefix + command} @tag`, m)
    
    let user = global.db.data.users[who]
    let name = conn.getName(who) 
    let name2 = conn.getName(m.sender) 

  let rki = await fetch(`https://api.waifu.pics/sfw/kiss`)
    if (!rki.ok) throw await rki.text()
   let jkis = await rki.json()
   let url = jkis
  await conn.sendFile(m.chat, 'https://telegra.ph/file/c4ee2b5726d4a12ab1d07.jpg', '', `*${name2}* Mencium *${name}*`, m)
   
}

handler.help = ['kiss *@tag*']
handler.tags = ['anime']
handler.command = /^(kiss)$/i
handler.group = true

module.exports = handler