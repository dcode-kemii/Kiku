const { googleImage }  =require('@bochilteam/scraper')
let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) return conn.reply(m.chat, `• *Example :* ${usedPrefix}${command} Minecraft`, m)
    conn.sendMessage(m.chat, { react: { text: '🕒', key: m.key }})
    const res = await googleImage(text)
    let image = pickRandom(res)
    let link = image
 conn.sendFile(m.chat, link, 'gimage.jpg', `Result from : `+ text, m)
}
handler.help = ['gimage *<text>*', 'image *<text>*']
handler.tags = ['internet']
handler.command = /^(gimage|image)$/i

module.exports = handler
handler.premium = false

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
