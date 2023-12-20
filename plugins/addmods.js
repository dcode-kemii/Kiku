let { MessageType } = require('@adiwajshing/baileys') 
let handler = async (m, { conn, text }) => {
    if (!text) return conn.reply(m.chat,  '• *Example :* .addmods 628816609112', m)
    let who
    if (m.isGroup) who = m.mentionedJid[0]
    else who = m.chat
    if (global.mods.includes(who.split`@`[0])) return conn.reply(m.chat, `🚩 @${who.split`@`[0]} Already Moderator!`, m)
    global.mods.push(`${who.split`@`[0]}`)
    conn.reply(m.chat, `🚩 Hai, @${who.split`@`[0]}. You are already a Moderator, don't play around or demote!`, m, {
        contextInfo: {
            mentionedJid: [who]
        }
    })
  
}
handler.help = ['addmods *<@user>*']
handler.tags = ['owner']
handler.command = /^(add|tambah|\+)mods$/i
handler.rowner = true
module.exports = handler