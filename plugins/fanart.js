let handler = async (m, { conn }) => {
  conn.sendMessage(m.chat, {
    react: {
      text: '🕒',
      key: m.key,
    }
  });
	conn.sendFile(m.chat, `https://api.lolhuman.xyz/api/random/art?apikey=${global.lolkey}`, 'fanart.jpg', done, m)
}
handler.help = ['fanart']
handler.tags = ['anime']

handler.command = /^(fanart)$/i
handler.premium = false
handler.register = true
handler.limit = 5
module.exports = handler