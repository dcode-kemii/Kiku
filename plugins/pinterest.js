let xfar = require('xfarr-api');
let handler = async (m, { usedPrefix, command, conn, args }) => {
  if (!args[0]) return conn.reply(m.chat, `• *Example :* ${usedPrefix}${command} kikuchanj`, m)
  conn.sendMessage(m.chat, {
      react: {
          text: '🕒',
          key: m.key,
      }
  })
  xfar.Pinterest(args[0]).then(async data => {
    let pincpt = `• *Media Link:* ${data.url}`;
    conn.sendFile(m.chat, data.url, 'pin.jpg', pincpt, m);
  });
};
handler.help = ['pinterest *<text>*'];
handler.tags = ['internet', 'downloader'];
handler.command = /^(pinterest|pin)$/i
module.exports = handler;