const delay = time => new Promise(res => setTimeout(res, time))

let handler = async function (m) {
  if (!m.chat.endsWith('@s.whatsapp.net')) return true;

  this.menfess = this.menfess ? this.menfess : {};
  let mf = Object.values(this.menfess).find(v => v.status === false && v.penerima == m.sender);

  if (!mf) return true;

  console.log({ text: m.text });

  if (m.text === 'BALAS PESAN' || m.text === '') {
    if (m.quoted && m.quoted.mtype == 'buttonMessage') {
      return conn.reply(m.chat, "Please type your reply message", m)
    }
  }

  let txt = `Hi *@${mf.dari.split('@')[0]}*, you have received a reply message\n\n◦ *Your Message:* ${mf.pesan}\n◦ *Reply Message:* ${m.text}\n`.trim();

  await this.reply(mf.dari, txt, null).then(() => {
    conn.reply(m.chat, 'Successfully sent reply!', m)
    delay(2000);
    delete this.menfess[mf.id];
    return true;
  });

  return true;
}

handler.all = handler;

module.exports = handler;