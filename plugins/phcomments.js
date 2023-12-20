let fetch = require('node-fetch')
let uploadImage = require('../lib/uploadImage.js')

let handler = async (m, { conn, args, text, command, usedPrefix, isCreator, isPrems }) => {
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  let q = m.quoted ? m.quoted : m
  let response = args.join(' ').split('|')
  let ppUrl = await conn.profilePictureUrl(who, 'image').catch((_) => "https://telegra.ph/file/65c43c76b126a2e1a8409.png");
  let mime = (q.msg || q).mimetype || ''
  if (!args[0]) return conn.reply(m.chat, `• *Example :* ${usedPrefix}${command} kemii|Salsa`, m)
	conn.sendMessage(m.chat, {
		react: {
			text: '🕒',
			key: m.key,
		}
	})
  let url = await ppUrl
  let res = `https://api.lolhuman.xyz/api/phcomment?apikey=${global.lolkey}&img=${url}&text=${response[0]}&username=${response[1]}`
  conn.sendFile(m.chat, res, 'phcomments.jpg', '```Success...\nDont forget to donate```', m, false)
}
handler.help = ['phcomments'].map(v => v + ' *<text>|<text>*')
handler.tags = ['maker']
handler.command = /^(phcomments)$/i
handler.register = true
handler.limit = true

module.exports = handler