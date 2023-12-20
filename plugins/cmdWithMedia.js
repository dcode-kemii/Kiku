let handler = async (m, { conn, text, usedPrefix, command }) => {
    global.db.data.sticker = global.db.data.sticker || {};
    if (!m.quoted) return conn.reply(m.chat, `🚩 Balas stiker dengan perintah *${usedPrefix + command}* ❗`, m)
    if (!m.quoted.fileSha256) return conn.reply(m.chat, '🚩 SHA256 Hash Tidak Ditemukan ❗', m)
    if (!text) return conn.reply(m.chat, `• *Example :* ${usedPrefix + command} tes`, m)

    let sticker = global.db.data.sticker;
    let hash = m.quoted.fileSha256.toString('base64');

    if (sticker[hash] && sticker[hash].locked) return conn.reply(m.chat, '🚩 Kamu tidak memiliki izin untuk mengubah perintah stiker ini 🔒', m)

    sticker[hash] = {
        text,
        mentionedJid: m.mentionedJid,
        creator: m.sender,
        at: +new Date(),
        locked: false,
    };

    conn.reply(m.chat, '✅ Berhasil Menyimpan CMD! 👌', m);
};

handler.help = ['cmd *<text>*']
handler.tags = ['database', 'premium'];
handler.command = ['setcmd'];
handler.premium = true;

module.exports = handler;
