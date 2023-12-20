let regex = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
let fetch = require('node-fetch')
let handler = async (m, { args, usedPrefix, command }) => {

    if (!args[0]) return conn.reply(m.chat,  '• *Example :* https://github.com/Takashi-Kemii/Kiku', m)
    conn.sendMessage(m.chat, { react: { text: '🕒', key: m.key }})
    if (!regex.test(args[0])) return conn.reply(m.chat, '🚩 link salah!', m)
    try {
    let [, user, repo] = args[0].match(regex) || []
    repo = repo.replace(/.git$/, '')
    let url = `https://api.github.com/repos/${user}/${repo}/zipball`
    let filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
    // 'attachment; filename=Kangsad01/bot-mdv1.21.4.2022-g836cccd.zip'
    conn.sendMessage(m.chat, { document: { url: url }, mimetype: 'application/zip', fileName: `${filename}`}, { quoted : m })
   } catch (e) {
    console.log(e);
    conn.reply(m.chat, `🚩 Maaf kak, repository yang Anda cari tidak dapat ditemukan.`, m)
  }

}
handler.help = ['gitclone *<url>*']
handler.tags = ['tools', 'downloader']
handler.command = /gitclone/i

handler.limit = true

module.exports = handler