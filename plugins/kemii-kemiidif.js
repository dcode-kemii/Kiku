let fetch = require('node-fetch')
let handler = async (m, { conn, args, text, command, usedPrefix, isCreator, isPrems }) => {
  if (!text) return conn.reply(m.chat, `• *Example :* ${usedPrefix}${command} 1girl, solo, ponytail, blush.`, m)
	conn.sendMessage(m.chat, {
		react: {
			text: '🕒',
			key: m.key,
		}
	})
  let res = `https://api.yanzbotz.my.id/api/text2img/yanzbotz?prompt=${text}`
  conn.sendFile(m.chat, res, 'kemiidif.jpg', '```Success...\nDont forget to donate```', m, false)
}
handler.help = ['kemiidif *<text>*'];
handler.command = /^(kemiidif)$/i
handler.tags = ['diffusion'];
handler.register = true;
handler.premium = true;
handler.limit = true;

module.exports = handler;