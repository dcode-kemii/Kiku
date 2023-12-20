let { promises } = require('fs')
let { join } = require('path')
let { exec } = require('child_process')

let handler = async (m, { conn, args, usedPrefix, command }) => {
        let q = m.quoted ? m.quoted : m
        let mime = (q.msg || q).mimetype || ''
        if (!/audio/.test(mime)) return conn.reply(m.chat, `Send/Reply Song with the caption *${usedPrefix + command}*`, m)
        let audio = await q.download?.()
        if (!audio) return conn.reply(m.chat, 'Can\'t download audio!', m)
        if (!args[0] || !args[1]) return conn.reply(m.chat, `• *Example :* ${usedPrefix + command} 00:00:30 00:00:30`, m)
            let ran = (new Date * 1) + '.webp'
            let media = '../tmp/' + thumbnail 
            let filename = media + '.webp'
            await promises.writeFile(media, audio)
            exec(`ffmpeg -ss ${args[0]} -i ${media} -t ${args[1]} -c copy ${filename}`, async (err) => {
                await promises.unlink(media)
                if (err) return Promise.reject('Error!')
                let buff = await promises.readFile(filename)
                m.reply(wait)
                conn.sendFile(m.chat, buff, filename, null, m, true, { quoted: m, mimetype: 'audio/mp4' })
                await promises.unlink(filename)
            })
}
handler.help = ['cut'].map(v => v + ' *<text>*')
handler.tags = ['audio']
handler.command = /^(potong(audio|mp3)|cut(audio|mp3))$/i

module.exports = handler