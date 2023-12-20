let { download } = require('aptoide-scraper')

let handler = async (m, { conn, usedPrefix: prefix, command, text }) => {

if (!text) throw `• *Example :* .apkdl fb lite`;
conn.sendMessage(m.chat, { react: { text: '🕒', key: m.key }})

let data = await download(text);

if (data.size.replace(' MB', '') > 700) {

return await conn.sendMessage(m.chat, { text: '*[⛔] The file is too large.*' }, { quoted: m });

}

if (data.size.includes('GB')) {

return await conn.sendMessage(m.chat, { text: '*[⛔] The file is too large.*' }, { quoted: m });

}

await conn.sendMessage(

m.chat,

{ document: { url: data.dllink }, mimetype: 'application/vnd.android.package-archive', fileName: data.name + '.apk', caption: null },

{ quoted: m }

);

}
handler.help = ['apkdl *<text>*']
handler.tags = ['internet','premium']
handler.command = /^apkdl$/i;
handler.premium = true
module.exports = handler