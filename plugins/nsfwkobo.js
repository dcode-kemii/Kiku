let handler = async (m, { conn }) => {
  conn.sendMessage(m.chat, {
    react: {
      text: '🕒',
      key: m.key,
    }
  });
	conn.sendFile(m.chat, `https://api.xyroinee.xyz/api/sfw/Kobo?apikey=${global.xyro}`, 'nsfw.jpg', done, m)
}
handler.help = ['kobo']
handler.tags = ['nsfw']

handler.command = /^(kobo)$/i
handler.premium = true
handler.register = true
handler.limit = 5
module.exports = handler