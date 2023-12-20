let handler = async (m, {
    conn,
    args,
    usedPrefix,
    command
}) => {
if (global.conn.user.jid == conn.user.jid) conn.reply(m.chat, '```Command Ini Hanya Untuk User Yang Sudah Jadibot```', m)
  else {
    await conn.reply(m.chat, '```Sayonara ~_~```', m)
    let nomer = `${conn.user.jid.split`@`[0]}`
    let del = global.conns.indexOf(nomer)
    global.conns.splice(del, 1)
    conn.ws.close()
  }
}
handler.help = ['stopjadibot']
handler.tags = ['jadibot']
handler.command = /^(stopjadibot)$/i

module.exports = handler