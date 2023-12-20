let { Hercai } = require('hercai')
let handler = async (m, { conn, args, text, command, usedPrefix, isCreator, isPrems }) => {
  if (!text) return conn.reply(m.chat, `• *Example :* ${usedPrefix}${command} queen elisabeth `, m)
	conn.sendMessage(m.chat, {
		react: {
			text: '🕒',
			key: m.key,
		}
	})
  let herc = new Hercai()
  let hasil = await herc.drawImage({model:"v2",prompt:`${text}`})
  conn.sendFile(m.chat, hasil.url, 'sdf.jpg', '```Success...\nDont forget to donate```', m, false)
}
handler.help = ['hercai2img *<text>*'];
handler.command = /^(hercai2img|hercaii)$/i
handler.tags = ['internet','ai'];
handler.register = true;
handler.limit = true;

module.exports = handler;