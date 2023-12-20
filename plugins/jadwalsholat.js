const { jadwalsholat } = require('@bochilteam/scraper')
let handler = async (m, { text, usedPrefix, command }) => {
    if (!text) return conn.reply(m.chat, `• *Example :* ${usedPrefix}${command} semarang`, m)
    const res = await jadwalsholat(text)
    conn.reply(m.chat, `
Jadwal Sholat *${text}*\n
${Object.entries(res.today).map(([name, data]) => `*Sholat ${name}:* ${data}`, m).join('\n').trim()}
`.trim())
}
handler.help = ['salat *<text>*']
handler.tags = ['islami']
handler.command = /^(jadwal)?s(a|o|ha|ho)lat$/i

module.exports = handler