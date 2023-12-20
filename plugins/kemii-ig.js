let fetch = require('node-fetch')

let handler = async (m, { conn, text, command }) => {
  if (!text) return conn.reply(m.chat, `*Example*: ${command} https://www.instagram.com/p/ABC123/`, m)
  conn.sendMessage(m.chat, { react: { text: '🕐', key: m.key }})
  let res = await (await fetch(`https://api.lolhuman.xyz/api/instagram?apikey=${global.lolkey}&url=${text}`)).json();

  if (!res.result || res.result.length === 0) throw 'Tidak dapat menemukan media di link tersebut';
  
  conn.sendFile(m.chat, res.result[0], '', '乂  *I N S T A G R A M   D O W N L O A D E R*', m);

  for (let imgs of res.result) {
    let ban = m.mentionedJid[0] || m.sender || conn.parseMention(args[0]) || (args[0].replace(/[@.+-]/g, '').replace(' ', '') + '@s.whatsapp.net') || '';

    if (ban) {
      conn.sendFile(ban, imgs, '', null);
    }
  }
}
handler.help = ['ig', 'igdl', 'instagram'].map(v => v + ' *<url>*')
handler.tags = ['downloader'];
handler.command = /^(ig|igdl|instagram)$/i;

module.exports = handler;