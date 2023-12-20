let { getDevice } = require('@adiwajshing/baileys')

let handler = async (m) => {
	conn.reply(m.chat, await getDevice(m.quoted ? m.quoted.id : m.key.id), m)
}

handler.help = ['device']
handler.tags = ['tools']
handler.command = /^(device)$/i

module.exports = handler
