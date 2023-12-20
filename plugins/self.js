let handler = async(m, { conn, command }) => {
  let isPublic = command === "public";
  let self = global.opts["self"]

  if(self === !isPublic) return conn.reply(m.chat, `Dah ${!isPublic ? "Self" : "Public"} dari tadi ${m.sender.split("@")[0] === global.owner[1] ? "Mbak" : "Bang"} :v`, m)

  global.opts["self"] = !isPublic

  conn.reply(m.chat, `Berhasil ${!isPublic ? "Self" : "Public"} bot!`, m)
}

handler.help = ["self", "public"]
handler.tags = ["owner"]

handler.rowner = true

handler.command = /^(self|public)/i

module.exports = handler