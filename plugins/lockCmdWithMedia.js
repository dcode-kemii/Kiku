module.exports = Object.assign(async function handler(m, { command }) {
    if (!m.quoted) return conn.reply(m.chat,  'Reply Pesan!', m)
    if (!m.quoted.fileSha256) return conn.reply(m.chat, 'SHA256 Hash Missing', m)
    let sticker = global.db.data.sticker
    let hash = m.quoted.fileSha256.toString('hex')
    if (!(hash in sticker)) return conn.reply(m.chat, 'Hash not found in database', m)
    sticker[hash].locked = !/^un/i.test(command)
    conn.reply(m.chat, 'Done!', m)
}, {
    rowner: true,
    help: ['un', ''].map(v => v + 'lockcmd'),
    tags: ['database'],
    command: /^(un)?lockcmd$/i
})
