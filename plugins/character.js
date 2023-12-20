const axios = require('axios');

let handler = async (m, { conn, text }) => {
  if (!text) {
    conn.reply(m.chat, '• *Example :* .character tohru', m);
    return;
  }

	conn.sendMessage(m.chat, {
		react: {
			text: '🕒',
			key: m.key,
		}
	})

  try {
    let query = encodeURIComponent(text);
    let url = `https://api.lolhuman.xyz/api/character?apikey=${global.lolkey}&query=${query}`;
    let response = await axios.get(url);
    let data = response.data.result;

    if (data) {
      let { name, image, description, favourites, media } = data;
      description = description.replace(/~/g, '');
      let caption = `*${name.full} (${name.native})*
Favorit: ${favourites} orang
Deskripsi: ${description}
Media: ${media.nodes.length} media`;

      conn.sendFile(m.chat, image.large, '', caption, m);
    } else {
      conn.reply(m.chat, '🚩 Character not found.', m);
    }
  } catch (e) {
    console.log(e);
    conn.reply(m.chat, '🚩 An error occurred processing the request.', m);
  }
};

handler.help = ['character *<name>*'];
handler.tags = ['info'];
handler.command = /^character|char$/i;

module.exports = handler;
