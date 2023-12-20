let handler = async (m, { conn }) => {
conn.sendMessage(m.chat, { react: { text: "🕒", key: m.key } });
	conn.sendFile(m.chat, 'https://api.zahwazein.xyz/randomasupan/notnot?apikey=zenzkey_c22460242f6e', 'asupan.mp4', done, m)
}
handler.help = ['notnot']
handler.tags = ['asupan']

handler.command = /^(notnot|ntnt)$/i
handler.premium = false
handler.register = true
handler.limit = 1
module.exports = handler