let fetch = require('node-fetch')
let timeout = 120000
let poin = 2500
let tiketcoin = 1
let handler = async (m, { conn, usedPrefix }) => {
    conn.tebakanime = conn.tebakanime ? conn.tebakanime : {}
    let id = m.chat
    if (id in conn.tebakanime) {
        conn.reply(m.chat, 'Masih ada soal belum terjawab di chat ini', conn.tebakanime[id][0])
        throw false
    }
    let res = await fetch('https://raw.githubusercontent.com/unx21/ngetezz/main/src/data/nyenyenye.json')
    if (!res.ok) throw eror
    let data = await res.json()
    let json = data[Math.floor(Math.random() * data.length)]
    let caption = `Timeout *${(timeout / 1000).toFixed(2)} detik*
Ketik ${usedPrefix}nime untuk clue
Bonus: ${poin} XP
TiketCoin: ${tiketcoin}
`.trim()
    conn.tebakanime[id] = [
        await conn.sendFile(m.chat, json.img, 'dann.jpg', caption, m),
        json, poin,
        setTimeout(async () => {
            if (conn.tebakanime[id]) conn.reply(m.chat, `Waktu habis!\nJawabannya adalah *${json.jawaban}*`, conn.tebakanime[id][0])
            delete conn.tebakanime[id]
        }, timeout)
    ]
}
handler.help = ['tebakanime']
handler.tags = ['game']
handler.command = /^tebakanime/i
handler.register = true
handler.limit = true

module.exports = handler