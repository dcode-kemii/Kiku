let fetch = require('node-fetch')

let handler = async (m, { conn, command }) => {
conn.sendMessage(m.chat, {
    react: {
      text: '🕒',
      key: m.key,
    }
  });
	let url = `https://api.zahwazein.xyz/randomanime/v2/elaina?apikey=${global.zein}`
		conn.sendFile(m.chat, url, null, done, m)
		}
		handler.command = /^(elaina)$/i
		handler.tags = ['anime']
		handler.help = ['elaina']
		handler.limit = true
		module.exports = handler
