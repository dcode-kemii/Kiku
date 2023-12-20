let handler = async (m, { conn }) => {
  conn.sendMessage(m.chat, {
    react: {
      text: '🕒',
      key: m.key,
    }
  });
	conn.sendFile(m.chat, `https://api.lolhuman.xyz/api/random/nsfw/loli?apikey=${global.lolkey}`, 'nsfw.jpg', done, m)
}
handler.help = ['lolicon']
handler.tags = ['nsfw']

handler.command = /^(lolicon)$/i
handler.premium = false
handler.register = true
handler.limit = 5
module.exports = handler