let fetch = require('node-fetch')

let handler = m => m

handler.before = async function (m, { isAdmin, isBotAdmin }) {
if (m.isBaileys && m.fromMe)
        return !0
    if (!m.isGroup) return !1
    let chat = global.db.data.chats[m.chat]
    let bot = global.db.data.settings[this.user.jid] || {}
    if (chat.autoVn) {
    
    }
}

module.exports = handler