let handler = async (m, { conn, usedPrefix, command }) => {
let user = global.db.data.users[m.sender]
  conn.sendMessage(m.chat, {
    react: {
      text: '🕒',
      key: m.key,
    }
  });
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let name = conn.getName(who)
conn.sendFile(m.chat, pickRandom(meme), null, `Random Meme Sir *${name}*`, m)
  //conn.sendButton(m.chat, `Nih *${name}*`, botdate, pickRandom(pussy), [['Next', `/pussy`]],m)
}
handler.help = ['meme']
handler.tags = ['tools']

handler.command = /^(meme)$/i
handler.premium = false
handler.register = true
handler.limit = 5
module.exports = handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
const meme = [
'https://telegra.ph/file/7fd222f57777dfc758efe.jpg',
'https://telegra.ph/file/d5824657889b0c034b07a.jpg',
'https://telegra.ph/file/7d2bc8309c4cdbba82bc7.jpg',
'https://telegra.ph/file/da2270262748cada9cd73.jpg',
'https://telegra.ph/file/59936b7907dde90436fcb.jpg',
'https://telegra.ph/file/a255f0bf92b444024b670.jpg',
'https://telegra.ph/file/20244d17fda52d804d210.jpg'
]