let handler = async (m, { conn, args }) => {
  if (args.length === 2 && args[0] === 'all') {
    let users = global.db.data.users;
    let pointsToAdd = parseInt(args[1]);
    if (isNaN(pointsToAdd)) {
      return conn.reply(m.chat, '🚩 Jumlah limit yang dimasukkan harus berupa angka. Contoh: .addlimit all 100', m)
    }
    for (let user in users) {
      users[user].limit += pointsToAdd;
    }
    conn.reply(m.chat, `🚩 Berhasil menambahkan ${pointsToAdd} limit untuk semua pengguna.`, m);
  } else if (args.length === 2) {
    let mentionedJid = m.mentionedJid[0];
    if (!mentionedJid) {
      return conn.reply(m.chat,  '🚩 Tag pengguna yang ingin diberikan limit. Contoh: .addlimir @user 100', m)
    }
      
	conn.sendMessage(m.chat, {
		react: {
			text: '🕒',
			key: m.key,
		}
	})

    let pointsToAdd = parseInt(args[1]);
    if (isNaN(pointsToAdd)) {
      return conn.reply(m.chat, '🚩 Jumlah limit yang dimasukkan harus berupa angka. Contoh: .addlimit @user 100', m)
    }

    let users = global.db.data.users;
    if (!users[mentionedJid]) {
      users[mentionedJid] = {
        limit: 0,
        exp: 0,
        lastclaim: 0,
      };
    }

    users[mentionedJid].limit += pointsToAdd;

    conn.reply(m.chat, `🚩 Berhasil menambahkan ${pointsToAdd} limit untuk @${mentionedJid.split('@')[0]}.`, m, {
      mentions: [mentionedJid]
    });
  } else {
    return conn.reply(m.chat,  '• *Example :* .addlimit @user 100 atau .addlimit all 100', m)
  }
};

handler.help = ['addlimit *@user* *<jumlah>*', 'addlimit all *<jumlah>*'];
handler.tags = ['xp'];
handler.command = /^addlimit$/i;
handler.mods = true;

module.exports = handler;