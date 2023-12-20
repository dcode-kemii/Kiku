const axios = require("axios");
const cheerio = require("cheerio");
const handler = async (m, { text, usedPrefix, command }) => {
if (!text) throw `Input Domain!\n\n*Example:* kemii.my.id`;
if (text.includes('https://') || text.includes('http://')) throw `Tolong masukkan tanpa domain *https/http!*. Contoh: kemii.my.id`;
  try {
    const waiting = `Tunggu Sebentar...`;
    m.reply(waiting);
    const response = await axios.get(`https://whois.botcahx.live/whois/${text}`);
    const $ = cheerio.load(response.data);
    const data = $("pre").text();
    m.reply(data);
  } catch (error) {
    console.error(error);
    m.reply('Terjadi error saat mencari informasi WHOIS, silakan coba lagi nanti');
  }
};
handler.command = ['whois', 'whoislookup'];
handler.help = ['whois', 'whoislookup'];
handler.tags = ['tools'];
handler.premium = false;
module.exports = handler;