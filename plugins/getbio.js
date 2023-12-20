let handler = async (m, { conn, text, command }) => {
  try {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender
    else who = m.quoted.sender ? m.quoted.sender : m.sender
    let bio = await conn.fetchStatus(who)
    m.reply(bio.status)
  } catch {
    if (text) return conn.reply(m.chat,  `bio is private!`, m)
    else try {
      let who = m.quoted ? m.quoted.sender : m.sender
      let bio = await conn.fetchStatus(who)
      conn.reply(m.chat, bio.status, m)
    } catch {
      return conn.reply(m.chat, `bio is private!`, m)
    }
  }
}
handler.help = ['getbio *<@user/reply>*']
handler.tags = ['fun']
handler.command = /^(getb?io)$/i

module.exports = handler