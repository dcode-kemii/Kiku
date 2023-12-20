let fetch = require('node-fetch')
let handler = async (m, { conn, args, text, command, usedPrefix, isCreator, isPrems }) => {
  if (!text) return conn.reply(m.chat, `• *Example :* ${usedPrefix}${command} 1girl, solo, ponytail, blush.`, m)
	conn.sendMessage(m.chat, {
		react: {
			text: '🕒',
			key: m.key,
		}
	})
  let res = `https://api.yanzbotz.my.id/api/text2img/neima?prompt=${text}`
  conn.sendFile(m.chat, res, 'neima.jpg', '```Success...\nDont forget to donate```', m, false)
}
handler.help = ['neima'].map(v => v + ' *<teks>*')
handler.command = /^neima$/i
handler.tags = ['diffusion'];
handler.register = true;
handler.premium = true;
handler.limit = true;

module.exports = handler;