const axios = require('axios');
const uploadImage = require('../lib/uploadImage');

let handler = async (m, { conn }) => {
  if (m.quoted && /image/.test(m.quoted.mimetype)) {
    conn.sendMessage(m.chat, {
      react: {
        text: '🕒',
        key: m.key,
      }
    });
    let img = await m.quoted.download();
    let imageUrl = await uploadImage(img);
    try {
      if (!imageUrl) {
        throw new Error('Failed to upload image');
      }
      let api = `https://api.itsrose.life/image/recolor?url=${encodeURIComponent(imageUrl)}&apikey=${global.rose}`;
      let { data } = await axios.get(api, { responseType: 'arraybuffer' });
      conn.sendFile(m.chat, Buffer.from(data), 'result.jpg', '', m);
    } catch (e) {
      console.log(e);
      m.reply(`🐱 Error! ${e}`);
    }
  } else {
    m.reply('🐱 Please reply to the image');
  }
};

handler.help = ['warnain', 'recolor'];
handler.tags = ['tools'];
handler.command = /^(warnain|recolor)$/i;

module.exports = handler;
