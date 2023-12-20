let { mediafiredl } = require('@bochilteam/scraper')

let handler = async (m, { conn, args, usedPrefix, command }) => {
    if (!args[0]) return conn.reply(m.chat, `• *Example :* ${usedPrefix}${command} https://www.mediafire.com/file/xxxxxxxxxx`, m)
	conn.sendMessage(m.chat, {
		react: {
			text: '🕒',
			key: m.key,
		}
	})
	try {
    let res = await mediafiredl(args[0])
    let { url, url2, filename, ext, aploud, filesize, filesizeH } = res
    let caption = `
💌 Name: ${filename}
📊 Size: ${filesizeH}
🗂️ Extension: ${ext}
📨 Uploaded: ${aploud}
`
    await conn.sendMessage(m.chat, {
    document: { url: url }, 
    mimetype: ext, 
    fileName: `${filename}`,
    caption: caption
  }, {quoted: m})
  } catch (error) {
    console.log(error)
    m.reply('🐱 Sorry, I couldn\'t process your request.')
  }
}

handler.help = ['mediafire'].map(v => v + ' *<url>*')
handler.tags = ['downloader']
handler.command = /^(mediafire|mf)$/i

module.exports = handler