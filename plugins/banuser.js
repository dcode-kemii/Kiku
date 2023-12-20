let handler = async (m, { conn, text }) => {
let user = global.db.data.users[m.sender]
    if (!text) return conn.reply(m.chat, '• *Example :* .ban +628816609112', m)
    let who
    if (m.isGroup) who = m.mentionedJid[0]
    else who = m.chat
    if (!who) return conn.reply(m.chat, '🚩 Tags you want to ban bots', m)
    let users = global.db.data.users
    users[who].banned = true
    conn.sendMessage(m.chat, { react: { text: '☑️', key: m.key }})
    if (global.db.data.users[who].vip == true) {
    user.vip = true
            global.db.data.users[who].banned = false
            conn.sendMessage(m.chat, { react: { text: '❌', key: m.key }})
            return conn.reply(m.chat, '🚩 Cant chapter him because hes a special member', m)
        } 
}
handler.help = ['ban']
handler.tags = ['owner']
handler.command = /^ban$/i
handler.mods = true

module.exports = handler