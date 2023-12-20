let handler = async (m, { conn, text }) => {
  if (!text) {
    return conn.reply(m.chat, '• *Example :* .dellimit @user 10', m)
  }

  let mentionedJid = m.mentionedJid[0];
  if (!mentionedJid) {
     return conn.reply(m.chat, 'Tag pengguna yang ingin dikurangi limitnya. Contoh: .dellimit @user 10', m)
  }

  let pointsToSubtract = parseInt(text.split(' ')[1]);
  if (isNaN(pointsToSubtract)) {
    return conn.reply(m.chat, 'Jumlah limit yang dimasukkan harus berupa angka. Contoh: .dellimit @user 10', m)
  }

  let users = global.db.data.users;
  if (!users[mentionedJid]) {
    users[mentionedJid] = {
      limit: 0,
      exp: 0,
      lastclaim: 0
    };
  }

  users[mentionedJid].limit -= pointsToSubtract;
  if (users[mentionedJid].limit < 0) {
    users[mentionedJid].limit = 0;
  }

  conn.reply(m.chat, `Berhasil mengurangi ${pointsToSubtract} limit untuk @${mentionedJid.split('@')[0]}.`, m, {
    mentions: [mentionedJid]
  });
};

handler.help = ['dellimit *@user/<amount>*'];
handler.tags = ['xp'];
handler.command = /^dellimit$/i;
handler.owner = true;

module.exports = handler;