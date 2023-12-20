var fetch = require("node-fetch")

var handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) throw `• *Example :* ${usedPrefix + command} melukis senja`
  conn.sendMessage(m.chat, {
		react: {
			text: '',
			key: m.key,
		}
	})
  var kemii = await fetch(`https://api.lolhuman.xyz/api/spotifysearch?apikey=${global.lolkey}&query=${text}`)
  var res = await kemii.json()
  var hasil = `• Title: *${res.result[0].title}*
• Artis: *${res.result[0].artists}*
• Duration: *${res.result[0].duration}*
• Popularity: *${res.result.popularity}*

• ID: *${res.result[0].id}*
• Link: *${res.result[0].link}*
`
  await conn.reply(m.chat, hasil, m);
}

handler.command = handler.help = ['spotifysearch','spotifys']
handler.tags = ['internet']

module.exports = handler