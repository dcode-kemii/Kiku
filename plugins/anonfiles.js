const axios = require('axios')
const anonfile = require('anonfile-lib')
const fs = require('fs')
let handler = async (m, { conn, text, usedPrefix, command }) => {
    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || ''
    if (!mime) return conn.reply(m.chat, `🚩 Send the file you want to upload and reply to the media with a command *${usedPrefix}${command}*`, m)
    conn.sendMessage(m.chat, { react: { text: "🕒", key: m.key } });
    let filename = text ? text : 'AnonFiles-'+Math.floor(Math.random() * 999999999)
    let media = await conn.downloadAndSaveMediaMessage(q, filename)
    //await fs.writeFileSync(`./tmp/${filename}`, media)
    let info = await anonfile.upload(`./tmp/`+media)
    if(info.status !== true) throw `Failed` 
    let response = `*───「 ANONFILES UPLOADER 」───*
Sukses •_•

Nama File : ${info.data.file.metadata.name}
Ukuran File : ${info.data.file.metadata.size.readable}
Link : ${info.data.file.url.full}
Short : ${info.data.file.url.short}
`
    await conn.reply(m.chat, response, m)
    fs.unlinkSync(`./tmp/`+media)
}
handler.help = ['anonfiles *<media> <name file>*']
handler.tags = ['tools']
handler.command = /^(anonfiles)$/i
  
module.exports = handler