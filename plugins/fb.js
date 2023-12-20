var api = require('api-dylux');

var handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) {
    return conn.reply(m.chat, `• *Example :* .fb https://www.facebook.com/xxxxxxx`, m)
  }

  try {
    var response = await api.fbdl(text);
	conn.sendMessage(m.chat, {
		react: {
			text: '🕒',
			key: m.key,
		}
	})
    conn.sendFile(m.chat, response.videoUrl, 'fb.mp4', response.title, m);
  } catch (error) {
    console.log(error);
    conn.reply(m.chat, 'There seems to be a problem downloading the video.', m)
  }
};

handler.help = ['facebook'].map((v) => v + ' *<url>*');
handler.tags = ['downloader'];
handler.command = /^((facebook|fb)(downloder|dl)?)$/i;
module.exports = handler;
