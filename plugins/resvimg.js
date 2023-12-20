let uploadFile = require('../lib/uploadFile.js')
let uploadImage = require('../lib/uploadImage.js')
let fetch = require('node-fetch')

let handler = async (m, {
    command,
    usedPrefix,
    conn,
    text,
    args
}) => {
    
    let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) throw 'Send/Reply Images with the caption *.resvimg*'
  let media = await q.download()
  let isTele = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime)
  let link = await (isTele ? uploadImage : uploadFile)(media)
    conn.sendMessage(m.chat, { react: { text: '🕒', key: m.key }})
    try {
        const imgx = await convertImageUrlToBuffer(link);

        if (imgx) {
            const result = imgx;

            await conn.sendMessage(m.chat, {
                image: imgx,
                caption: done,
                mentions: [m.sender]
            }, {
                quoted: m
            });
        } else {
            console.log("Tidak ada respons dari OpenAI atau terjadi kesalahan.");
        }
    } catch (e) {
        await m.reply(eror)
    }
}
handler.help = ["resvimg"].map(v => v + " *<image>*")
handler.tags = ["tools"]
handler.command = /^(resvimg)$/i
handler.limit = true
module.exports = handler

async function convertImageUrlToBuffer(imageUrl) {
    try {
        const response = await fetch("https://tools.revesery.com/image-anime/convert.php", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: `image-url=${encodeURIComponent(imageUrl)}`
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        const base64String = data.image;
        const buffer = Buffer.from(base64String.split(',')[1], 'base64');

        return buffer;
    } catch (error) {
        console.error(`An error occurred: ${error.message}`);
        throw error; // Rethrow the error to handle it further up the call stack
    }
}