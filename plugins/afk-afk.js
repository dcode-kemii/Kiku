let handler = async (m, { text }) => {
  let user = global.db.data.users[m.sender]
  user.afk = + new Date
  user.afkReason = text
  conn.reply(m.chat, `◦ @${m.sender.split("@")[0]} *is now AFK*\n◦ *Reason*${text ? ': ' + text : ''}`, m)
}
handler.help = ['afk *<reason>*']
handler.tags = ['tools']
handler.command = /^afk$/i
handler.limit = true

module.exports = handler