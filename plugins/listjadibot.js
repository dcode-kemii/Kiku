let handler = async (m, {
    conn,
    args,
    usedPrefix,
    command
}) => {
let users = [...new Set([...global.conns.filter(conn => conn.user && conn.state !== 'close').map(conn => conn.user)])]
  conn.reply(m.chat, users.map(v => 'wa.me/' + v.jid.replace(/[^0-9]/g, '') + `?text=${usedPrefix}menu (${v.name})`).join('\n'), m)
}
handler.command = handler.help = ['listjadibot']
handler.tags = ['jadibot']

module.exports = handler