let axios = require('axios')

let handler = async (m, {
    command,
    usedPrefix,
    conn,
    text,
    args
}) => {
    
    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || ''
    if (!mime) return conn.reply(m.chat, 'Send/Reply Images with the caption *.jadianime*', m)
    let media = await q.download()
    conn.sendMessage(m.chat, {
		react: {
			text: '🕒',
			key: m.key,
		}
	})
    try {
        const openAIResponse = await processImageAndUpload(media);

        if (openAIResponse) {
            const result = openAIResponse;

            await conn.sendMessage(m.chat, {
                image: {
                    url: result
                },
                caption: done,
                mentions: [m.sender]
            }, {
                quoted: m
            });
        } else {
            console.log("Tidak ada respons dari OpenAI atau terjadi kesalahan.");
        }
    } catch (e) {
        await conn.reply(m.chat, '🚩 Waduh Error', m)
    }
}
handler.help = ["jadianime *<image>*"]
handler.tags = ["convert"]
handler.command = /^(jadianime)$/i
handler.limit = true
module.exports = handler;

async function processImageAndUpload(buffer) {
    try {
        
        const base64String = Buffer.from(buffer, 'binary').toString('base64');

        const apiResponse = await axios.post('https://www.drawever.com/api/photo-to-anime', {
            data: `data:image/png;base64,${base64String}`,
        }, {
            headers: {
                'Content-Type': 'application/json',
            },
        });

        return 'https://www.drawever.com' + apiResponse.data.urls[1] || 'https://www.drawever.com' + apiResponse.data.urls[0];
    } catch (error) {
        throw error;
    }
}