let handler = async (m, { conn, text, usedPrefix, command, participants }) => {
	let q = m.quoted ? m.quoted : m
	let mime = (q.msg || q).mimetype || q.mediaType || ''
	text = text ? text : m.quoted?.text ? m.quoted.text : m.quoted?.caption ? m.quoted.caption : m.quoted?.description ? m.quoted.description : ''
	if (!text) return conn.reply(m.chat, `• *Example :* ${usedPrefix + command} ayo mabar`, m)
	if (/video|image/g.test(mime) && !/webp/g.test(mime)) {
		let media = await q.download?.()
		await conn.sendFile(m.chat, media, '', text, null, false, { mentions: participants.map(a => a.id) }, quoted: m })
	} else await conn.reply(m.chat, text, m, { mentions: participants.map(a => a.id)})
}
handler.help = ['hidetag *<text>*']
handler.tags = ['group']
handler.command = /^(hidetag|h|hite)$/i

handler.group = true
handler.admin = true

module.exports = handler