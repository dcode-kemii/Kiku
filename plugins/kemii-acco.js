let handler = async (m, { conn, text }) => {
let user = global.db.data.users[m.sender]
    if (!text) return conn.reply(m.chat, `• *Example :* .acco +${m.sender.replace(/@.+/, '')}`, m)
    let who
    if (m.isGroup) who = m.mentionedJid[0]
    else who = m.chat
    if (!who) return conn.reply(m.chat, '🚩 Tags Orang Yang Mau Di Acc!', m)
    let users = global.db.data.users
    users[who].acc = true
    conn.sendMessage(m.chat, { react: { text: '☑️', key: m.key }})
    conn.reply(`${text}@s.whatsapp.net`, '```Selamat, nomer anda telah di acc oleh owner, sekarang anda sudah bisa menggunakan fitur jadibot!```', null)
}
handler.help = ['acco']
handler.tags = ['owner']
handler.command = /^acco$/i
handler.owner = true

module.exports = handler