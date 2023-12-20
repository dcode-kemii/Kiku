const fs = require('fs')

let handler = async (m, { conn }) => {
	conn.chatRead(m.chat)
	conn.sendMessage(m.chat, {
		react: {
			text: '🗿',
			key: m.key,
		}
	})
  let files = fs.readdirSync('./mp3')
  if (!files.length) {
    conn.reply(m.chat, 'Tidak ada audio/vn di dalam folder.', m)
    return
  }
  let vnList = files.filter(file => file.endsWith('.opus')).map(file => `◦ ${file.replace('.opus', '')}`).join('\n')
  let caption = '*Audio/Voice List Note:*\n\n' + vnList
  conn.reply(m.chat, caption, m)
}

handler.help = ['listvn']
handler.tags = ['tools']

handler.command = /^listvn$/i

module.exports = handler