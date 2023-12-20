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
      let api = `https://api.yanzbotz.my.id/api/tools/image-prompt?url=${encodeURIComponent(imageUrl)}&apiKey=${global.yanz}`;
      let { data } = await axios.get(api);
      let prompt = data.result

      conn.reply(m.chat, `*Prompt:*\n${prompt}`.trim(), m)
    } catch (e) {
      console.log(e);
      conn.reply(m.chat, 'An error occurred while fetching the prompt', m)
    }
  } else {
    conn.reply(m.chat, 'Reply image with caption *.prompt*', m) 
  }
};

handler.help = ['prompt *<image>*'];   
handler.tags = ['tools'];
handler.command = /^prompt$/i;

module.exports = handler; 