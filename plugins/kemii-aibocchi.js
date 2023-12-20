const fetch = require('node-fetch');
const axios = require('axios');

let previousMessages = [];

const handler = async (m, { text, usedPrefix, command }) => {
  if (!text) return conn.reply(m.chat, `• *Example :* .aibocchi Siapa presiden Indonesia?`, m)
  
  let name = conn.getName(m.sender);
  await conn.sendMessage(m.chat, { react: { text: `⏱️`, key: m.key }});
  let tio = await fetch(`https://api.lolhuman.xyz/api/pinterest2?apikey=${global.lolkey}&query=bocchi+the+rock`)
let p = await tio.json()
let url = p.result[Math.floor(Math.random()  *p.result.length)]
  let messages = [
    ...previousMessages,
{ role: 'system', content: `Ubah gaya bicaramu agar lebih karakteristik tapi agak introvert dan memiliki sifat yang feminim. Namamu adalah Bocchi kamu adalah karakter 2d dan tidak nyata. Kata penyapamu adalah "Ha-halo" menggunakan bahasa yang sopan. ekspresikan sifatmu dengan sifat yang pendiam dan bicara yang lebih tidak formal layaknya seorang manusia. Ubah bahasamu menggunakan bahasa Yang pendiam namun asik, kamu adalah teman bicara` },{ role: 'user', content: text }
  ];

  let ini = (await axios.post("https://skizo.tech/api/openai?apikey=composing", { messages })).data;
  await conn.sendMessage(m.chat, { react: { text: `✅`, key: m.key }});
  
  let hasil = `*〤  A I  B O C C H I*\n\n${ini.result}`;
await conn.sendFile(m.chat, url, '', hasil, m)
  
  previousMessages = messages;
};

handler.help = ['aibocchi *<text>*'];
handler.command = /^aibocchi$/i
handler.tags = ['ai'];
handler.premium = false;

module.exports = handler;