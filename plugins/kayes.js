let handler = async (m, { conn }) => {
	conn.sendFile(m.chat, `https://api.zahwazein.xyz/randomasupan/kayes?apikey=${global.zein}`, 'asupan.mp4', done, m)
}
handler.help = ['kayes']
handler.tags = ['asupan']

handler.command = /^(kayes)$/i
handler.premium = false
handler.register = true
handler.limit = 1
module.exports = handler