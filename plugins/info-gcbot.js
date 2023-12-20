let handler = async (m, { conn }) => {
  let id = '120363023427805441@g.us';
  let name = await conn.getName(m.sender);
try {
  let a = await conn.groupParticipantsUpdate(id, [m.sender], "add");
  let result = a[0];
  if (result.status == 500) return conn.reply(m.chat, `Gagal menambahkan *${name}* ke dalam Grup bot ❌
Silahkan masuk secara manual:
${sgc}`, m)
  
  const fkontak = {
    "key": {
      "participants": "0@s.whatsapp.net",
      "remoteJid": "status@broadcast",
      "fromMe": false,
      "id": "Halo"
    },
    "message": {
      "contactMessage": {
        "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
      }
    },
    "participant": "0@s.whatsapp.net"
  };

  conn.reply(id, `Berhasil menambahkan *${name}* ke dalam Grup bot ✅`, fkontak);
} catch (err) {
conn.reply(m.chat, sgc + '\nJoin to My Group Official', m)
}
}

handler.command = /^(gcbot)$/i;
handler.private = false;
module.exports = handler;