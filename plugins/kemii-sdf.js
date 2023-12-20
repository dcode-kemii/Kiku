let fetch = require('node-fetch')
let handler = async (m, { conn, args, text, command, usedPrefix, isCreator, isPrems }) => {
  if (!text) return conn.reply(m.chat, `• *Example :* ${usedPrefix}${command} queen elisabeth `, m)
	conn.sendMessage(m.chat, {
		react: {
			text: '🕒',
			key: m.key,
		}
	})
  let res = `https://api.nomisec07.site/api/sdf?q=${text}`
  conn.sendFile(m.chat, res, 'sdf.jpg', '```Success...\nDont forget to donate```', m, false)
}
handler.help = ['sdf *<text>*'];
handler.command = /^(sdf)$/i
handler.tags = ['internet'];
handler.register = true;
handler.limit = true;

module.exports = handler;