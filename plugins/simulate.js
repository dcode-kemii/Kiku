let handler = async (m, { conn, usedPrefix, command, args: [event], text }) => {
    if (!event) return await conn.reply(m.chat, `• *Example*:
    
◦ ${usedPrefix + command} welcome *@user*
◦ ${usedPrefix + command} bye *@user*
◦ ${usedPrefix + command} promote *@user*
◦ ${usedPrefix + command} demote *@user*`, m)
    
    let mentions = text.replace(event, '').trimStart()
    let who = mentions ? conn.parseMention(mentions) : []
    let part = who.length ? who : [m.sender]
    let act = false
    conn.sendMessage(m.chat, { react: { text: "⏳", key: m.key } });
    
    switch (event.toLowerCase()) {
        case 'add':
        case 'invite':
        case 'welcome':
            act = 'add'
            break
        case 'bye':
        case 'kick':
        case 'leave':
        case 'remove':
            act = 'remove'
            break
        case 'promote':
            act = 'promote'
            break
        case 'demote':
            act = 'demote'
            break
        default:
            throw `List Event: welcome, bye, delete, promote, demote`
    }
    
    if (act) return conn.onParticipantsUpdate({
        id: m.chat,
        participants: part,
        action: act
    })
}

handler.help = ['simulate *<text>*']
handler.tags = ['owner']
handler.command = /^simulate$/i
handler.owner = true
module.exports = handler
