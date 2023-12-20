let fetch = require('node-fetch')

let handler = m => m
let kemii = 'Kemii'
handler.before = async (m, { conn }) => {

    let chat = db.data.chats[m.chat]

    if (chat.ai && !chat.isBanned) {

        if (/^.*false|disable|(turn)?off|0/i.test(m.text)) return

        if (!m.text) return

        let res = await fetch(API('https://api.yanzbotz.my.id', '/api/ai/characterai', { text: encodeURIComponent(m.text), name: kemii }))

        if (!res.ok) return m.reply(eror)

        let json = await res.json()

        conn.reply(m.chat, json.result, m)

        return !0

    }

    return !0

}

module.exports = handler
