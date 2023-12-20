const fs = require('fs')
const path = require('path')

let handler = async (m, { conn, text }) => {
  let audioFolder = './mp3'
  let audioName = `${text}.opus`
  let audioPath = path.join(audioFolder, audioName)

  if (!fs.existsSync(audioPath)) {
    let audioFiles = fs.readdirSync(audioFolder)
    let audioFile = audioFiles.find(file => file.toLowerCase() === audioName.toLowerCase())
    if (!audioFile) return m.reply(`Audio ${text} tidak ditemukan!.`)
    audioName = audioFile
    audioPath = path.join(audioFolder, audioName)
  }
	conn.chatRead(m.chat)
	conn.sendMessage(m.chat, {
		react: {
			text: '🗿',
			key: m.key,
		}
	})
  let audioBuffer = fs.readFileSync(audioPath)
  conn.sendFile(m.chat, audioBuffer, audioName, '', m)
}

handler.help = ['send']
handler.tags = ['fun']
handler.command = /^(send|sendvn)$/i;

module.exports = handler