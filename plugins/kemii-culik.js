let handler = async (m, { conn, groupMetadata }) => {
let mi = idgc
let org = groupMetadata.participants.map(v => v.id)
  conn.sendMessage(m.chat, {
    react: {
      text: '🕒',
      key: m.key,
    }
  });
  let a = await conn.groupParticipantsUpdate(mi, org, "add")
  conn.reply(m.chat, 'Done Kang', m)
}
handler.help = ['culik']
handler.tags = ['owner']

handler.command = /^(culik)$/i
handler.premium = false
handler.group = true
handler.register = false
handler.owner = true

module.exports = handler