let handler = async (m, { conn, participants, groupMetadata }) => {
conn.reply(m.chat, `${groupMetadata.subject}`, m)
}
handler.help = ['ceknamegc']
handler.tags = ['group']
handler.command = /^(cekname(group|gc))$/i
handler.group = true

module.exports = handler