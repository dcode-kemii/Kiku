let handler = async (m, { conn, text }) => {
    if (!text) throw '• *Example :* .unban 628816609112'
    let who
    if (m.isGroup) who = m.mentionedJid[0]
    else who = m.chat
    if (!who) throw 'Tag yang ingin di unban Bot'
    let users = global.db.data.users
    users[who].banned = false
    conn.sendMessage(m.chat, { react: { text: '☑️', key: m.key }})
}
handler.help = ['unban']
handler.tags = ['owner']
handler.command = /^unban$/i
handler.owner = false
handler.admin = true

module.exports = handler