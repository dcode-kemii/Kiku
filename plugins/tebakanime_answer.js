const similarity = require('similarity')
const threshold = 0.72
let handler = m => m
handler.before = async function (m) {
  let id = m.chat
  if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !/Ketik.*nime/i.test(m.quoted.text)) return !0
  this.tebakanime = this.tebakanime ? this.tebakanime : {}
  if (!(id in this.tebakanime)) return m.reply('Soal itu telah berakhir')
  if (m.quoted.id == this.tebakanime[id][0].id) {
    let json = JSON.parse(JSON.stringify(this.tebakanime[id][1]))
    // m.reply(JSON.stringify(json, null, '\t'))
    if (m.text.toLowerCase() == json.jawaban.toLowerCase().trim()) {
      global.db.data.users[m.sender].exp += this.tebakanime[id][2]
      global.db.data.users[m.sender].money += 141098
      await conn.sendImageAsSticker(m.chat, 'https://telegra.ph/file/ba14f31a89695620007c7.png', m, { packname: "", author: "" })
      await conn.reply(m.chat, `*+ 141.098 Balance*`, m)
      clearTimeout(this.tebakanime[id][3])
      delete this.tebakanime[id]
    } else if (similarity(m.text.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold)
    else await conn.sendImageAsSticker(m.chat, 'https://telegra.ph/file/6059151f81fb30d3a5351.png', m, { packname: "", author: "" })
   await conn.reply(m.chat, `*- 141.098 Balance*`, m)
   global.db.data.users[m.sender].money -= 141098
  }
  return !0
}
handler.exp = 0

module.exports = handler
