let handler = async (m, {
	conn,
	usedPrefix
}) => {
	let warn = global.db.data.users[m.sender].warn

	let ndy = `
*Kamu Memiliki ${warn} Peringatan*
 `.trim()
	conn.reply(m.chat, ndy, m)
}

handler.help = ['cekwarn']
handler.tags = ['info']
handler.command = /^(cekwarn)$/i

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
