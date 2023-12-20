let handler = function (m) {
    if (!m.quoted) throw false
    let { chat, fromMe, id, isBaileys } = m.quoted
    if (!isBaileys) return conn.reply(m.chat, '🚩 Pesan tersebut bukan dikirim oleh bot!', m)
    conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })

}
handler.help = ['del *<reply>*', 'delete *<reply>*']
handler.tags = ['tools']

handler.command = /^del(ete)?$/i
handler.limit = true

module.exports = handler