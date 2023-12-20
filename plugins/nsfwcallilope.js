let handler = async (m, { conn }) => {
  conn.sendMessage(m.chat, {
    react: {
      text: '🕒',
      key: m.key,
    }
  });
	conn.sendFile(m.chat, `https://api.zahwazein.xyz/randomanime/mori-calliope?apikey=${global.zein}`, 'nsfw.jpg', done, m)
}
handler.help = ['callilope']
handler.tags = ['nsfw']

handler.command = /^(callilope)$/i
handler.premium = false
handler.register = true
handler.limit = 5
module.exports = handler