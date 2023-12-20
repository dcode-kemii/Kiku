let handler = async (m, { conn, args, usedPrefix, command }) => {

    await conn.groupUpdateSubject(m.chat, `${args.join(" ")}`);
    conn.reply(m.chat, '🚩 Done', m)
  }
  
  handler.help = ['setnamagc *<text>*']
  handler.tags = ['group']
  handler.command = /^setnamagc$/i
  handler.owner = false
  handler.mods = false
  handler.premium = false
  handler.group = true
  handler.private = false
  handler.register = false
  handler.admin = true
  handler.botAdmin = true
  
  module.exports = handler
