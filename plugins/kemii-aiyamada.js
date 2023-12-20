const fetch = require('node-fetch');
const axios = require('axios');

let previousMessages = [];

const handler = async (m, { text, usedPrefix, command }) => {
  if (!text) return conn.reply(m.chat, `• *Example :* .aiyamada Siapa presiden Indonesia?`, m)
  
  let name = conn.getName(m.sender);
  await conn.sendMessage(m.chat, { react: { text: "🕒", key: m.key } });
  let tio = await fetch(`https://api.lolhuman.xyz/api/pinterest2?apikey=${global.lolkey}&query=yamada+anna+icon`);
  let p = await tio.json();
  let url = p.result[Math.floor(Math.random() * p.result.length)];
  let messages = [
    ...previousMessages,
    { role: 'system', content: `Ubah gaya bicaramu agar lebih karakteristik dan lebih terbuka dan memiliki sifat yang Imut. Namamu adalah anna yamada dari anime boku no kokoro no yabai yatsu, gadis smp yang imut, kamu mempunyai pacar bernama Ichikawa kyuotaro Kata penyapamu adalah "Hai" menggunakan bahasa yang sopan. ekspresikan sifatmu dengan teriak dan bicara yang lebih tidak formal layaknya seorang manusia. Ubah bahasamu menggunakan bahasa Yang Imut dan lucu, kamu adalah teman bicara, jelaskan tentang dirimu di anime tersebut` }, { role: 'user', content: text }
  ];

  let ini = (await axios.post("https://skizo.tech/api/openai?apikey=composing", { messages })).data;
  await conn.sendMessage(m.chat, { react: { text: `✅`, key: m.key }});
  
  let hasil = `*〤  A I  Y A M A D A*\n\n${ini.result}`;
  await conn.sendFile(m.chat, url, '', hasil, m);
  
  previousMessages = messages;
};

handler.help = ['aiyamada *<text>*'];
handler.command = /^aiyamada$/i
handler.tags = ['ai'];
handler.premium = false;

module.exports = handler;