let handler = async (m, { conn }) => {
  conn.sendMessage(m.chat, {
    react: {
      text: '🕒',
      key: m.key,
    }
  });
	conn.sendFile(m.chat, `https://api.betabotz.org/api/cecan/rose?apikey=${global.btc}`, 'kemii.jpg', done, m)
}
handler.help = ['rose']
handler.tags = ['internet']

handler.command = /^(rose)$/i
handler.premium = false
handler.register = true
handler.limit = 5
module.exports = handler