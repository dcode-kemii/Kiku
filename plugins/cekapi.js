const fetch = require('node-fetch');

let handler = async (m, { text }) => {
  if (!text) return conn.reply(m.chat, '• *Example :* .cekapikey kemianime', m)

  let apikey = text.trim();
  let url = `https://api.lolhuman.xyz/api/checkapikey?apikey=${text}`;
	conn.sendMessage(m.chat, {
		react: {
			text: '🕒',
			key: m.key,
		}
	})
  let response = await fetch(url);
  let result = await response.json();

  if (result.status !== 200) throw 'Terjadi kesalahan pada server.';
  if (result.message !== 'success') throw 'API key tidak valid atau tidak ditemukan.';

  let { username, requests, today, account_type, expired } = result.result;

  let teks = `乂  *S T A T U S A P I K E Y*\n\n`;
  teks += `┌  ◦  *Username* : ${username}\n`;
  teks += `│  ◦  *Jumlah requests* : ${requests}\n`;
  teks += `│  ◦  *Requests hari ini* : ${today}\n`;
  teks += `│  ◦  *Tipe akun* : ${account_type}\n`;
  teks += `└  ◦  *Masa berlaku* : ${expired}`;

  conn.reply(m.chat, teks, m)
};

handler.help = ['cekapikey', 'checkapikey'].map(v => v + ' *<teks>*')
handler.tags = ['tools'];
handler.command = /^(cek|check)apikey|api$/i;

module.exports = handler;