const handler = async (m, { conn, usedPrefix, args }) => {
const groups = Object.keys(conn.chats)
  .filter(key => key.endsWith('@g.us'))
  .map(key => conn.chats[key]);

  if (args.length === 0) {
    // Menampilkan daftar nama grup dengan urutan
    const list = groups.map((group, index) => `*${index + 1}.* ${group.subject}`).join('\n');
    conn.reply(m.chat, `📋 *Daftar Nama Grup dengan Urutan:*\n\n${list}`, m);
  } else if (args.length === 1 && /^\d+$/.test(args[0])) {
    const index = parseInt(args[0]) - 1;
    if (index >= 0 && index < groups.length) {
      const group = groups[index];
      const superAdminCount = group.participants.filter(p => p.admin === 'superadmin').length;
      const adminCount = group.participants.filter(p => p.admin === 'admin').length;
      const adminList = group.participants.filter(p => p.admin === 'admin').map(a => `- ${a.id.replace(/(\d+)@.+/, '@$1')}`).join('\n');
      const superAdminList = group.participants.filter(p => p.admin === 'superadmin').map(a => `- ${a.id.replace(/(\d+)@.+/, '@$1')}`).join('\n');
      const info = `📊 *Informasi Grup Urutan ke-${index + 1}*\n\n` +
        `*ID:* ${group.id}\n` +
        `*Subject:* ${group.subject}\n` +
        `*Pemilik Subject:* ${group.subjectOwner}\n` +
        `*Waktu Subjek Diubah:* ${formatTime(group.subjectTime)}\n` +
        `*Waktu Dibuat:* ${formatTime(group.creation)}\n` +
        `*Pemilik Grup:* ${group.owner.replace(/(\d+)@.+/, '@$1')}\n` +
        `*Deskripsi:* ${group.desc}\n` +
        `*ID Deskripsi:* ${group.descId}\n` +
        `*Batasan:* ${group.restrict ? 'Ya' : 'Tidak'}\n` +
        `*Pengumuman:* ${group.announce ? 'Ya' : 'Tidak'}\n` +
        `*Total Partisipan:* ${group.participants.length}\n` +
        `*Jumlah Superadmin:* ${superAdminCount}\n` +
        `*Daftar Superadmin:*\n${superAdminList}\n` +
        `*Jumlah Admin:* ${adminCount}\n` +
        `*Daftar Admin:*\n${adminList}\n` +
        `*Durasi Pesan Sementara:* ${formatDuration(group.ephemeralDuration)}`;
      await m.reply(
        info,
        null,
        {
            contextInfo: {
                mentionedJid: group.participants.map((v) => v.id)
            }
        }
    );
    } else {
      conn.reply(m.chat, 'Grup dengan urutan tersebut tidak ditemukan.', m);
    }
  } else {
    conn.reply(m.chat, `Format perintah salah. Gunakan "${usedPrefix}groups" untuk daftar grup atau "${usedPrefix}groups [nomor_urutan]" untuk informasi grup tertentu.`, m);
  }
};

handler.help = ['gcl'];
handler.tags = ['group'];
handler.command = /^(gcl)$/i;

module.exports = handler

function formatTime(timestamp) {
  const date = new Date(timestamp * 1000);
  return `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
}

function formatDuration(seconds) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const formatted = [];
  if (hours > 0) formatted.push(`${hours} jam`);
  if (minutes > 0) formatted.push(`${minutes} menit`);
  return formatted.join(' ');
}