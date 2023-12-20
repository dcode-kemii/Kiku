let fetch = require('node-fetch')

let handler = async (m, { conn, command }) => {
conn.sendMessage(m.chat, {
    react: {
      text: '🕒',
      key: m.key,
    }
  });
	let url = `https://api.zahwazein.xyz/randomanime/v2/chitoge?apikey=${global.zein}`
		conn.sendFile(m.chat, url, null, done, m)
		}
		handler.command = /^(chitoge)$/i
		handler.tags = ['anime']
		handler.help = ['chitoge']
		module.exports = handler
		
