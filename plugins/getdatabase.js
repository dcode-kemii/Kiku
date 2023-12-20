let fs = require('fs')
let handler = async (m, { conn, text }) => {
    conn.sendMessage(m.chat, { react: { text: "🕒", key: m.key } });
    let sesi = await fs.readFileSync('./database.json')
    return await conn.sendMessage(m.chat, { document: sesi, mimetype: 'application/json', fileName: 'database.json' }, { quoted: m })
}
handler.help = ['getdatabase']
handler.tags = ['owner']
handler.command = /^(getdatabase)$/i

handler.owner = true

module.exports = handler
