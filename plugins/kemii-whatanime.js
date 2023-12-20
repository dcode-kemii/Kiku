const axios = require('axios');
const uploadImage = require('../lib/uploadImage');

let handler = async (m, { conn }) => {
  let q = m.quoted ? m.quoted : m;
  let mime = (q.msg || q).mimetype || '';
  if (/image/.test(mime)) {
    conn.sendMessage(m.chat, {
      react: {
        text: '🕒',
        key: m.key,
      }
    });
    let img = await q.download();
    let imageUrl = await uploadImage(img);
    try {
      let api = `https://api.trace.moe/search?anilistInfo&url=${encodeURIComponent(imageUrl)}`;
      let { data } = await axios.get(api);
      let anime = data.result[0].anilist;
      let episode = data.result[0].episode;
      let similarity = data.result[0].similarity;
      let at = new Date(data.result[0].from * 1000).toISOString().substr(11, 12) + ' - ' + new Date(data.result[0].to * 1000).toISOString().substr(11, 12);
      let malId = anime.idMal;
      let anilistId = anime.id;
      let titleRomaji = anime.title.romaji;
      let titleNative = anime.title.native;
      let caption = `• *Title:* ${titleRomaji} (${titleNative})
• *Episode:* ${episode}
• *Similarity:* ${(similarity * 100).toFixed(2)}%
• *At:* ${at}`;
      conn.sendFile(m.chat, imageUrl, 'image.jpg', caption, m);
    } catch (e) {
      console.log(e);
      conn.reply(m.chat, 'Error!', m);
    }
  } else {
    conn.reply(m.chat, 'Please reply to the image', m);
  }
};

handler.help = ['whatanime *<image>*'];
handler.tags = ['premium'];
handler.command = /^whatanime$/i;

module.exports = handler;