const { WA_DEFAULT_EPHEMERAL } = require('@whiskeysockets/baileys')

let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) return conn.reply(m.chat, `• *Example :* ${usedPrefix + command} 628816609112`, m)
    let jid = `${text}@whatsapp.net`
    let data = (await conn.onWhatsApp(jid))[0] || {}
    if (!data.exists) return conn.reply(m.chat, '🚩 Nomor tidak terdaftar di WhatsApp!', m)
    await conn.sendMessage(data.jid, { disappearingMessagesInChat: WA_DEFAULT_EPHEMERAL })
    await conn.sendMessage(data.jid, { text: 'Done!'}, { ephemeralExpiration: WA_DEFAULT_EPHEMERAL })
}

handler.help = ['disappearing *<number>*']
handler.command = /^disappearing$/i
handler.tags = ['tools']
handler.private = true

module.exports = handler