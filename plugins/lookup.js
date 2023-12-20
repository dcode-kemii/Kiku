const fetch = require('node-fetch');
const handler = async (m, { text, usedPrefix, command }) => {
  if (!text) return conn.reply(m.chat, `• *Example :* kemii.my.id`, m)

  if (text.includes('https://') || text.includes('http://')) return conn.reply(m.chat, `Tolong masukkan domain/sub domain secara lengkap. Contoh: botcahx.live`, m)

  try {
    // fetch pertama
    const api_key = 'E4/gdcfciJHSQdy4+9+Ryw==JHciNFemGqOVIbyv';
    const res1 = await fetch(`https://api.api-ninjas.com/v1/dnslookup?domain=${text}`, {
      headers: { 'X-Api-Key': api_key },
      contentType: 'application/json'
    })
    .then(response => response.text())
    .catch(error => {
      console.log(error);
      return fetch(`https://api.hackertarget.com/dnslookup/?q=${text}`)
      .then(response => response.text())
      .then(data => {
        conn.reply(m.chat, `*Ini Adalah Hasil Dns Lookup Untuk ${text}:*\n${data}`, m)
        console.log(data);
      })
      .catch(error => {
        console.error(error);
        conn.reply(m.chat, '*Tidak dapat memproses permintaan DNS Lookup*', m)
      });
    });
    conn.reply(m.chat, `*Ini Adalah Hasil Dns Lookup Untuk ${text}:*\n${res1}`, m)
    console.log(res1);

  } catch (error) {
    console.log(error);
    conn.reply(m.chat, '*Invalid data!*', m)
  }
};

handler.command = ['dnslookup', 'hackertarget', 'lookup','dns'];
handler.help = ['dnslookup', 'hackertarget', 'lookup','dns'].map(v => v + ' *<url>*')
handler.tags = ['internet'];
handler.premium = false;

module.exports = handler;