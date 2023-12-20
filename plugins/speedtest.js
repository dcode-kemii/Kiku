let cp = require ('child_process')
let { promisify } = require ('util')
let exec = promisify(cp.exec).bind(cp)
let handler = async (m, { conn}) => {
	await conn.reply(m.chat, 'Tunggu Sebentar...', m)
    let o
    try {
        o = await exec('python3 speed.py --share --secure')
    } catch (e) {
        o = e
    } finally {
        let { stdout, stderr } = o
        if (stdout.trim()) 
conn.sendMessage(m.chat, {
text: stdout,
contextInfo: {
externalAdReply: {
title: "",
body: "",
thumbnailUrl: "https://cdn.jsdelivr.net/gh/SazumiVicky/Storage@main/IMG_20230430_192107_543.jpg",
sourceUrl: "",
mediaType: 1,
renderLargerThumbnail: true
}}})
        if (stderr.trim()) m.reply(stderr)
    }
}
handler.help = ['speedtest']
handler.tags = ['info']
handler.command = /^(speedtest|ookla)$/i
handler.premium = false
module.exports = handler