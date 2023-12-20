const fetch = require('node-fetch');

let handler = async(m, { conn, text }) => {
  if (!text) return conn.reply(m.chat, `• *Example :* .bard Siapa Presiden Indonesia?`, m)
  conn.sendMessage(m.chat, { react: { text: "🕒", key: m.key } });
  let res = await fetch(`https://api.azz.biz.id/api/bard?q=${text}&key=global`);
  let fotonya = "https://telegra.ph/file/ae3fff8bb0672192a6c1c.png";
  let ai = await res.json();
  let result = ai.respon;
  
  if (result) {
    return conn.sendMessage(m.chat, {
      text: result,
      contextInfo: {
        externalAdReply: {
          title: "Google Bard",
          thumbnailUrl: fotonya,
          sourceUrl: sig,
          mediaType: 1,
          renderLargerThumbnail: true
        }
      }
    }, { quoted: m });
  }
}

handler.help = ['bard *<text>*'];
handler.tags = ['ai'];
handler.command = /^(bard|brd|aibard)$/i;
handler.limit = true;
module.exports = handler;