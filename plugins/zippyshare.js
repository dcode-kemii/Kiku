let zsExtract = require('zs-extract')

let handler = async (m, { conn, args, usedPrefix, command }) => {
 if (!args[0]) return conn.reply(m.chat, `• *Example :* ${usedPrefix + command} https://www4.zippyshare.com/v/uBGCbNHt/file.html`, m)
 let res = await zsExtract.extract(args[0])
 let { download, filename } = res
 m.reply(JSON.stringify(res, null, 2))
 conn.sendMessage(m.chat, { react: { text: "🕒", key: m.key } });
 conn.sendFile(m.chat, download, filename, filename, m)
}
handler.help = ['ippyshare'].map(v => 'z' + v + ' *<url>*')
handler.tags = ['downloader']
handler.command = /^z(ippydl|ippyshare)$/i

handler.limit = true
handler.premium = true

module.exports = handler