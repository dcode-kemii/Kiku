let handler = async (m) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender
    if (typeof db.data.users[who] == 'undefined') return conn.reply(m.chat, 'Pengguna tidak ada didalam data base', m)
    conn.reply(m.chat, `${global.db.data.users[who].exp} Your exp`, m)
}
handler.help = ['exp *@user*']
handler.tags = ['xp']
handler.command = /^(exp)$/i
module.exports = handler
