let handler = async (m, { conn }) => {
  conn.sendMessage(m.chat, {
    react: {
      text: '🕒',
      key: m.key,
    }
  });
	conn.sendFile(m.chat, `https://api.betabotz.org/api/anime/umaru?apikey=${global.btc}`, 'umaru.jpg', done, m)
}
handler.help = ['umaru']
handler.tags = ['anime']

handler.command = /^(umaru)$/i
handler.premium = false
handler.register = true
handler.limit = 5
module.exports = handler