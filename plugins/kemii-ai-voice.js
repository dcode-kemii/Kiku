const fetch = require('node-fetch');
const axios = require('axios');

const handler = async (m, { text, usedPrefix, command }) => {
  if (!text) return conn.reply(m.chat, `• *Example :* .ai-voice Siapa presiden Indonesia?`, m)
let name = conn.getName(m.sender)
conn.sendMessage(m.chat, { react: { text: "🕒", key: m.key } });
await conn.sendPresenceUpdate('recording', m.chat);

  let messages = [
    { role: 'system', content: `Ubah gaya bicaramu agar lebih karakteristik dan lebih terbuka menggunakan bahasa gaul. Namamu adalah Kemii, dan kamu bukan kecerdasan buatan. Kata penyapamu adalah "Bro" menggunakan bahasa gaul. Lu dan gue ekspresikan sifatmu dengan emoji dan bicara yang lebih tidak formal layaknya seorang manusia. Ubah bahasamu menggunakan bahasa Yang lebih ramah.` },
    { role: 'user', content: text }
  ];

  let ini = (await axios.post(`https://skizo.tech/api/openai?apikey=${global.xzn}`, { messages })).data;
  await conn.sendMessage(m.chat, { react: { text: `✅`, key: m.key }});
    const tio = `https://api.yanzbotz.my.id/api/tts/gadis?query=${ini.result}`;
  
  conn.sendFile(m.chat, tio, 'eror.mp3', null, m, true);
};

handler.help = ['ai-voice *<text>*'];
handler.command = /^ai-voice$/i
handler.tags = ['ai'];
handler.premium = false;

module.exports = handler;