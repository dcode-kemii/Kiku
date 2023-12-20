const axios = require('axios');

const handler = async (m, { conn, args, text }) => {
  if (!text) return conn.reply(m.chat, `Halo ada yang ingin kamu bicarakan??, katakan saja ya 😊👋 Untuk panduan penggunaan, ketik *.cai help*`, m)// Invite to type .cai help for assistance
  
  const [command, ...restArgs] = text.split('|');
  
  if (command && command.includes('create')) {
    if (!restArgs[0]) return conn.reply(m.chat, 'Masukkan nama\n*Contoh:* .cai create|Takemi', m)
    const chatUrl = `https://api.itsrose.life/cai/create_character?apikey=${global.rose}`;
    const data = {
      "title": `Halo, nama saya ${restArgs[0]}, salam kenal yah 😄✋`,
      "name": restArgs[0],
      "description": `Nama saya adalah ${restArgs[0]}`,
      "greeting": "Jangan sungkan-sungkan untuk berbicara yah!! 😄🗨️",
      "visibility": "public"
    };

    await postData(chatUrl, data)
      .then(async result => {
        let hasil = result.result.character_id;
        global.db.data.users[m.sender].cai = hasil;
        await conn.reply(m.chat, "*✅ Berhasil membuat character:* " + hasil, m);
        await conn.reply(m.chat, '🚩 Salin ID tersebut lalu paste di .cai add untuk menambahkan character tersebut ke cai', m);
      })
      .catch(error => {
        console.error('*❌ Gagal membuat character dengan alasan:* ', error);
      });
  } else if (command && command.includes('search')) {
    if (!restArgs[0]) return conn.reply(m.chat, 'mau cari apa kak? 😕🔍\n*example:* .cai search|miku nakano', m)
    const chatUrl = `https://api.itsrose.life/cai/search_characters?apikey=${global.rose}`;
    const data = {
      "query": restArgs[0]
    };
    await conn.reply(m.chat, 'Sedang memproses... 🤖', m);
    await postData(chatUrl, data)
      .then(async result => {
        let hasil = result.result.map((a) => ` • Name: *${a.name}*\n• Greeting: *${a.greeting}*\n• Characters_id: *${a.character_id}*\n________________________________\n`).join('');
        await conn.reply(m.chat, `✅ Berikut Hasil pencarian dari *${restArgs[0]}*:\n\n${hasil}`, m);
      })
      .catch(error => {
        console.error('*❌ Hasil tidak di temukan :* ', error);
      });
  } else if (command && command.includes('add')) {
    if (!restArgs[0]) return conn.reply(m.chat, `Masukan characters_id\nBelum dapet id??, kamu dapat membuat atau mencari characters_id kamu di .cai help`, m)
    await conn.reply(m.chat, 'Sedang memproses... 🤖', m);
    global.db.data.users[m.sender].cai = restArgs[0];
    await conn.reply(m.chat, '✅ Success add characters_id', m);
  } else if (command && command.includes('help')) {
    const usage = `
✨ (⁠・⁠∀⁠・⁠) Hai ! Selamat datang di *Characters AI*!!, Ayo luangkan waktu mu dengan mengobrol dengan karakter kesukaan mu

Cara Penggunaan:
- *.cai create| [nama karakter]* - Membuat karakter baru
- *.cai search| [kata kunci]* - Mencari karakter berdasarkan kata kunci
- *.cai add| [ID karakter]* - Menambahkan karakter ke daftar karakter aktif
- *.cai [Memulai percakapan]* - Memulai percakapan dengan karakter yang diinginkan

Contoh cara penggunaan:
- .cai create|Takemi

Selamat bersenang-senang! 😄👍
    `;

    await conn.reply(m.chat, usage, m);
  } else {
    try {
      let cai = global.db.data.users[m.sender].cai;
      if (typeof cai == 'undefined') { 
        conn.reply(m.chat, `🚩 Opps kamu belum memiliki karakter, silahkan tambahkan karakter mu sendiri dengan ketik .cai create| atau mencari karakter kesukaan mu dengan cara ketik .cai search|`, m)
      }
      const chatUrl = `https://api.itsrose.life/cai/chat?apikey=${global.rose}`;
      const data = {
        message: text,
        character_id: `${cai}`
      };
      await postData(chatUrl, data)
        .then(async result => {
          let hasil = result.result.message;
          let thumb = result.result.avatar;
          let name = result.result.metadata.name;
          await conn.sendMessage(m.chat, {
            text: hasil,
            contextInfo: {
              externalAdReply: {  
                title: "Characters name: " + name,
                body: '',
                thumbnailUrl: thumb,
                sourceUrl: null,
                mediaType: 1,
                renderLargerThumbnail: true
              }
            }
          }, { quoted: m });
        })
        .catch(error => {
          console.error('Gagal mengirim data:', error);
        });
    } catch (err) {
      console.error(err);
    }
  }
};

handler.help = ['cai *<text>*'];
handler.tags = ['ai'];
handler.command = /^(cai|tai)$/i;
handler.limit = true;
module.exports = handler;

async function postData(url, data) {
  try {
    const response = await axios.post(url, data);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}