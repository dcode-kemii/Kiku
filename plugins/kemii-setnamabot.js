let handler = async (m, { conn, text, command, usedPrefix }) => {
if (!text) return conn.reply(m.chat, `• *Example :* ${usedPrefix + command} Kiku - Wabot`, m)
await conn.updateProfileName(text)
conn.reply(m.chat, `Sukses Bosss ${global.author}`, m)
}
handler.help = ['setnamabot *<text>*']
handler.tags = ['owner']
handler.owner = true
handler.command = /^(setnamabot|setnamebot)$/i

module.exports = handler