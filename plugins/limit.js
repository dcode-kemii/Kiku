let handler = async (m) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender
    if (typeof db.data.users[who] == 'undefined') return conn.reply(m.chat, 'Pengguna tidak ada didalam data base', m)
    let user = global.db.data.users[who];
    let username = user.name;
    let level = user.level > 9999 ? '4̶0̶4̶ N̶o̶t̶ F̶o̶u̶n̶d̶' : user.level
    let limit = user.premium ? '∞' : user.limit
    let status = user.premium ? "Premium" : "Free User"
    let kemii = 
`×  *Username* : ${username}
×  *Limit* : ${limit}
×  *level* : ${level}
×  *Status* : ${status}`
    conn.reply(m.chat, kemii, m)
}
handler.help = ['limit *@user*']
handler.tags = ['xp']
handler.command = /^(limit)$/i
module.exports = handler