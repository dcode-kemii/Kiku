let similarity = require('similarity')
const threshold = 0.72
handler.before = async function (m) {
    let id = m.chat
    if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !m.text || !/Ketik.*hlog/i.test(m.quoted.text) || /.*hlog/i.test(m.text))
        return !0
    this.tebaklogo = this.tebaklogo ? this.tebaklogo : {}
    if (!(id in this.tebaklogo))
        return this.reply(m.chat, 'Soal itu telah berakhir', m)
    if (m.quoted.id == this.tebaklogo[id][0].id) {
        let isSurrender = /^((me)?nyerah|surr?ender)$/i.test(m.text)
        if (isSurrender) {
            clearTimeout(this.tebaklogo[id][3])
            delete this.tebaklogo[id]
            return this.reply(m.chat, '*Yah Menyerah :( !*', m)
        }
        let json = JSON.parse(JSON.stringify(this.tebaklogo[id][1]))
        // m.reply(JSON.stringify(json, null, '\t'))
        if (m.text.toLowerCase() == json.hasil.data.jawaban.toLowerCase().trim()) {
            global.db.data.users[m.sender].exp += this.tebaklogo[id][2]
            this.reply(m.chat, `*Benar!*\n+${this.tebaklogo[id][2]} XP`, m)
            clearTimeout(this.tebaklogo[id][3])
            delete this.tebaklogo[id]
        } else if (similarity(m.text.toLowerCase(), json.hasil.data.jawaban.toLowerCase().trim()) >= threshold)
            m.reply(`*Dikit Lagi!*`)
        else
            this.reply(m.chat, `*Salah!*`, m)
    }
    return !0
}
handler.exp = 0

module.exports = handler;

const buttontebaklogo = [
    ['tebaklogo', '/tebaklogo']
]
