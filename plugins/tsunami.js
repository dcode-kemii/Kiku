const api = require('@bochilteam/scraper');

async function handler(m, { conn }) {
  api.tsunami()
    .then(res => {
      var dann = res.map(data => `${htki} *INFORMATION TSUNAMI* ${htka}\n\n• Location: *${data.location}*\n• Info: *${data.info}*\n• Date: *${data.date}*\n• Time: *${data.time}*\n• Latitude: *${data.latitude}*\n• Longitude: *${data.longitude}*\n• Magnitude: *${data.magnitude}*\n• Depth: *${data.depth}*\n`).join('\n');
      conn.reply(m.chat, dann, m);
    })
    .catch(err => {
      console.error(err);
      conn.reply(m.chat, 'Terjadi kesalahan saat memuat data tsunami.', m);
    });
}

handler.command = handler.help = ['tsunami'];
handler.tags = ['internet'];

module.exports = handler;