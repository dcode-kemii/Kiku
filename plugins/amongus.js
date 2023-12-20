let handler = async (m, { conn }) => {
  conn.sendMessage(m.chat, {
    react: {
      text: '🕒',
      key: m.key,
    }
  });
	conn.sendImageAsSticker(m.chat, `https://api.betabotz.org/api/sticker/among?apikey=${global.btc}`, m, { packname: `${namebot}`})
}
handler.help = ['amongus']
handler.tags = ['tools']

handler.command = /^(amongus)$/i
handler.premium = false
handler.register = true
handler.limit = 5
module.exports = handler