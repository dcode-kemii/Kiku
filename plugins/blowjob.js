let handler = async (m, { conn }) => {
  conn.sendMessage(m.chat, {
    react: {
      text: '🕒',
      key: m.key,
    }
  });
	conn.sendImageAsSticker(m.chat, `https://api.lolhuman.xyz/api/random/nsfw/blowjob?apikey=${global.lolkey}`, m, { packname: "sticker by", author: "Kemii" })
}
handler.help = ['blowjob']
handler.tags = ['nsfw']

handler.command = /^(blowjob|bj)$/i
handler.premium = false
handler.register = true
handler.limit = 5
module.exports = handler