let fetch = require('node-fetch')

let handler = async (m, { conn, text }) => {
  if (!text) return conn.reply(m.chat, '• *Example :* .twitter https://twitter.com/xxxxx', m)
  conn.sendMessage(m.chat, { react: { text: '🕐', key: m.key }})
  let kemii = await fetch(`https://skizo.tech/api/twitterdl?url=${text}&apikey=${global.xzn}`)
  try {
  let res = await kemii.json()
  let start = new Date();
await conn.sendMessage(m.chat, { react: { text: "☑️", key: m.key } });
  conn.sendFile(m.chat, res.media, 'twiter.mp4', '```Success...\nDont forget to donate```', m)
   } catch (e) {
    console.log(e);
    await conn.sendMessage(m.chat, { react: { text: "❌", key: m.key } });
    await m.reply(`Enter Link Lol_-`);
  }
}
handler.help = ['twitter'].map(v => v + ' *<url>*')
handler.tags = ['downloader']

handler.command = /^twitter$/i
handler.limit = true
handler.group = false

module.exports = handler