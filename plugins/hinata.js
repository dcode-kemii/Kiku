let handler = async (m, { conn }) => {
  conn.sendMessage(m.chat, {
    react: {
      text: '🕒',
      key: m.key,
    }
  });
	conn.sendFile(m.chat, `https://api.betabotz.org/api/anime/hinata?apikey=${global.btc}`, '', done, m)
}
handler.help = ['hinata']
handler.tags = ['anime']

handler.command = /^(hinata)$/i
handler.premium = false
handler.register = true
handler.limit = 5
module.exports = handler