const axios = require('axios')

let handler = async (m, { conn }) => {
	conn.sendMessage(m.chat, {
		react: {
			text: '',
			key: m.key,
		}
	})
  try {
    let response = await axios.get(`https://api.lolhuman.xyz/api/quotes/islami?apikey=${global.lolkey}`)
    let result = response.data.result
    conn.reply(m.chat, result, m)
  } catch (e) {
    conn.reply(m.chat, 'An error occurred while processing the request.', m)
    console.log(e)
  }
}

handler.help = ['quotesislami']
handler.tags = ['islami']
handler.command = /^quotesislami$/i
handler.register = true
handler.limit = true

module.exports = handler