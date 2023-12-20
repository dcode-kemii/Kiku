let cheerio = require('cheerio')
let fetch = require('node-fetch')

let handler = async (m, {
    conn,
    args,
    usedPrefix,
    text,
    command
}) => {
    if (!text) return conn.reply(m.chat, '• *Example :* .amv 1', m)
    if (text == '1') {
    conn.sendMessage(m.chat, {
		react: {
			text: '🕒',
			key: m.key,
		}
	})
        try {
            let resl = await animeVideo()
            await conn.sendFile(m.chat, resl.source, "", done, m)
        } catch (e) {
            await conn.reply(m.chat, 'Error', m)
        }
    }
    if (text == '2') {
    conn.sendMessage(m.chat, {
		react: {
			text: '🕒',
			key: m.key,
		}
	})
        try {
            let resl = await animeVideo2()
            await conn.sendFile(m.chat, resl.source, "", done, m)
        } catch (e) {
            await conn.reply(m.chat, 'Error', m)
        }
    }
}
handler.help = ["amv"]
handler.tags = ["anime"]
handler.command = /^(amv)$/i
handler.limit = true
module.exports = handler

async function animeVideo() {
    const url = 'https://shortstatusvideos.com/anime-video-status-download/'; // Ganti dengan URL yang sesuai
    const response = await fetch(url);
    const html = await response.text();
    const $ = cheerio.load(html);

    const videos = [];

    $('a.mks_button.mks_button_small.squared').each((index, element) => {
        const href = $(element).attr('href');
        const title = $(element).closest('p').prevAll('p').find('strong').text();
        videos.push({
            title,
            source: href
        });
    });

    const randomIndex = Math.floor(Math.random() * videos.length);
    const randomVideo = videos[randomIndex];

    return randomVideo;
}

async function animeVideo2() {
    const url = 'https://mobstatus.com/anime-whatsapp-status-video/'; // Ganti dengan URL yang sesuai
    const response = await fetch(url);
    const html = await response.text();
    const $ = cheerio.load(html);

    const videos = [];

    const title = $('strong').text();

    $('a.mb-button.mb-style-glass.mb-size-tiny.mb-corners-pill.mb-text-style-heavy').each((index, element) => {
        const href = $(element).attr('href');
        videos.push({
            title,
            source: href
        });
    });

    const randomIndex = Math.floor(Math.random() * videos.length);
    const randomVideo = videos[randomIndex];

    return randomVideo;
}