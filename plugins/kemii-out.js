let handler = async (m, { conn, args, command, usedPrefix, text }) => {
if (!text) return conn.reply(m.chat, `• *Example :* ${usedPrefix + command} 120363023427805441@g.us`, m)
await conn.reply(text, 'Byee Sudah Waktunya *Kiku - Wabot* Keluar Group, Jika Ingin Memasukan *Kiku - Wabot* Lagi Silahkan Hubungi Owner', m)
await conn.groupLeave(text)
await m.reply(`Success Leave To Gc *${conn.getName(text)}*`)
}
handler.help = ['out *<idgc>*']
handler.tags = ['owner']
handler.command = /^(out)$/i

handler.owner = true

module.exports = handler