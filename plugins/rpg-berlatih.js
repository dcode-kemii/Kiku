const { MessageType } = require('@adiwajshing/baileys');

// Fungsi untuk mengubah waktu menjadi format jam:menit:detik
function clockString(ms) {
  let h = Math.floor(ms / 3600000);
  let m = Math.floor(ms / 60000) % 60;
  let s = Math.floor(ms / 1000) % 60;
  return [h, m, s].map(v => v.toString().padStart(2, '0')).join(':');
}

let handler = async (m, { conn, text }) => {
  try {
    let user = global.db.data.users[m.sender];

    // Cek apakah pengguna sudah bertarung dalam 1 jam terakhir
    if (new Date() - user.lastpractice < 3600000) {
      conn.reply(m.chat, '⏰ Anda hanya dapat berlatih sekali dalam 1 jam.', m);
      return;
    }

    // Lakukan latihan
    user.lastpractice = new Date();

    // Hitung serangan pengguna (diubah sesuai kebutuhan)
    let userAttack = Math.floor(Math.random() * 100) + 50; // Serangan acak antara 50 hingga 149

    // Kalkulasi penambahan kesehatan pengguna
    let healthIncrease = userAttack * 3;

    // Tambahkan kesehatan baru ke pengguna
    user.health += healthIncrease;

    // Pesan hasil latihan
    let message = `🏋️ Anda sedang berlatih dan mendapatkan peningkatan kesehatan:\n\n`;
    message += `❤️ Kesehatan pengguna sekarang: ${user.health}\n`;
    message += `⚔️ Serangan yang dihasilkan: ${userAttack}\n`;
    message += `🔄 Anda dapat berlatih lagi dalam 1 jam.\n`;

    conn.reply(m.chat, message, m);
  } catch (e) {
    console.log(e);
    conn.reply(m.chat, 'Error', m);
  }
}

handler.help = ['berlatih'];
handler.tags = ['rpg'];
handler.command = /^berlatih$/i;
handler.limit = true;
handler.group = true;
handler.fail = null;

module.exports = handler;