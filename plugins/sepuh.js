let handler = async (m, { conn }) => {
  conn.sendMessage(m.chat, {
    react: {
      text: '🕒',
      key: m.key,
    }
  });
	conn.sendFile(m.chat, 'https://telegra.ph/file/bcdf850fd2270fbed0f3f.mp4', '', 'Ajarin Dong Puh Sepuh', m)
}
handler.customPrefix = /^(sepuh|tutor)$/i
handler.command = new RegExp

module.exports = handler