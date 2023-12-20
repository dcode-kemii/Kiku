const axios = require('axios')

let handler = async (m) => {
  const api = 'https://api.zahwazein.xyz/randomasupan/discord18?apikey=zenzkey_f07b21f698'
  try {
	conn.sendMessage(m.chat, {
		react: {
			text: '🕒',
			key: m.key,
		}
	})
    const res = await axios.get(api)
    const result = res.data.result
    conn.sendFile(m.sender, result, 'asupan.mp4', 'This is the result of your request', m)
  } catch (e) {
    console.log(e)
    conn.reply(m.chat, '🚩 An error occurred while processing your request.', m)
  }
}

handler.help = ['bokep']
handler.tags = ['premium']
handler.premium = true
handler.private = true
handler.group = false
handler.command = /^bokep$/i

module.exports = handler