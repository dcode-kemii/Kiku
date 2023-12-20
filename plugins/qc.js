let axios = require('axios')
let { Sticker } = require('wa-sticker-formatter')
let { webp2png } = require('../lib/webp2mp4')
let uploadImage = require('../lib/uploadImage.js')
let handler = async (m, { conn, text, usedPrefix, command, isOwner }) => {
    try {
        let q = m.quoted ? m.quoted: m
        let mime = (q.msg || q).mimetype || ''
        let txt = text ? text: typeof q.text == 'string' ? q.text: ''
        conn.sendMessage(m.chat, { react: { text: '🕒', key: m.key }})
        let avatar = await conn.profilePictureUrl(q.sender, 'image').catch(_ => 'https://i.ibb.co/2WzLyGk/profile.jpg')
        avatar = /tele/.test(avatar) ? avatar: await uploadImage((await conn.getFile(avatar)).data)
        if (!/webp/.test(mime)) {
            let req = await fakechat(txt, q.name, avatar)
            let stiker = await createSticker(req, false, author)
            conn.sendFile(m.chat, stiker, 'sticker.webp', '', m)
        } else {
            let media = await m.quoted.download()
            let out = await webp2png(media)
            let req = await fakechatImg(out, txt, q.name, avatar)
            let stiker = await createSticker(req, false, author)
            conn.sendFile(m.chat, stiker, 'sticker.webp', '', m)
        }
    } catch (e) {
        throw e
    }
}
handler.help = ['qc']
handler.tags = ['tools']
handler.command = /^(qc|quotely)$/i

module.exports = handler

async function fakechat(text, name, url) {
    let body = {
        "type": "quote",
        "format": "webp",
        "backgroundColor": "#000000",
        "width": 480,
        "height": 480,
        "scale": 2,
        "messages": [{
        "avatar": true,
        "from": {
            "first_name": name,
            "language_code": "en",
            "name": name,
            "photo": {
            "url": url
            }
        },
        "text": text,
        "replyMessage": {}
        }]
    }
    let res = await axios.post('https://quote-api.team-skizo.repl.co/generate', body);
    return Buffer.from(res.data.result.image, "base64");
}

async function fakechatImg(url, text, name, avatar) {
    let body = {
        "type": "quote",
        "format": "webp",
        "backgroundColor": "#000000",
        "width": 512,
        "height": 768,
        "scale": 2,
        "messages": [{
        "entities": [],
        "media": {
            "url": url
        },
        "avatar": true,
        "from": {
            "id": 1,
            "name": name,
            "photo": {
            "url": avatar
            }
        },
        "text": text,
        "replyMessage": {}
        }]
    }
    let res = await axios.post('https://quote-api.team-skizo.repl.co/generate', body);
    return Buffer.from(res.data.result.image, "base64");
}

async function createSticker(req, url, authorName, quality) {
    let stickerMetadata = {
        type: 'full',
        author: author,
        quality
    }
return (new Sticker(req ? req: url, stickerMetadata)).toBuffer()
}