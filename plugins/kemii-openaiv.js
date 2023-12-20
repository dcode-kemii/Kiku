let fetch = require('node-fetch')
let handler = async (m, { conn, args, text, command, usedPrefix, isCreator, isPrems }) => {
  if (!text) return conn.reply(m.chat, `• *Example :* ${usedPrefix}${command} siapa presiden Indonesia`, m)
	conn.sendMessage(m.chat, {
		react: {
			text: '🕒',
			key: m.key,
		}
	})
  let res = `https://api.yanzbotz.my.id/api/ai/gptvoice?query=${text}`
  conn.sendFile(m.chat, res, `openaiv.mp3`, '', m, true);
}
handler.help = ['aivoice *<teks>*']
handler.tags = ['tools','ai']
handler.command = /^aiv|aivoice$/i
handler.limit = true
handler.premium = false
module.exports = handler

module.exports = handler;

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}