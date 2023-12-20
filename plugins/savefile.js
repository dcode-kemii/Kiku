let handler = async (m, { text, usedPrefix, command }) => {

    if (!text) return conn.reply(m.chat, `• *Example :* ${usedPrefix + command} plugins/menu.js`, m)
    try {
    if (!m.quoted.text) throw `reply code`
    let path = `${text}`
    await require('fs').writeFileSync(path, m.quoted.text)
  var name = m.sender
  await conn.reply(m.chat, `Saved ${path} to file!`, m)
  } catch (error) {
    console.log(error)
    m.reply("🚩 Reply Code Lol_-")
  }
}

handler.help = ['savefile', 'sf'].map(v => v + ' *<text>*')
handler.tags = ['owner']
handler.command = ['savefile', 'sf']

handler.owner = true
module.exports = handler