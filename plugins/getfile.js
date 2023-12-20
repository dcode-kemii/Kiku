const fs = require('fs')
const path = require('path')

let handler = async (m, { conn, text }) => {
  if (!text) return conn.reply(m.chat, '• *Example :* .gf config', m)
  let fileName = text.trim().toLowerCase()
  let filePath = path.join(__dirname, '..', fileName + '.js')
  if (!fs.existsSync(filePath)) {
    return conn.reply(m.chat, `The file ${fileName}.js does not exist!`, m)
  }

  let fileContent = fs.readFileSync(filePath, 'utf-8')
  conn.reply(m.chat, fileContent, m)
}

handler.help = ['gf *<text>*']
handler.tags = ['tools']
handler.owner = true
handler.command = /^gf$/i

module.exports = handler