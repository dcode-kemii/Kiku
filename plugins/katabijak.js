const quotes = require('../lib/jagokata')
let handler = async (m, { command, args, usedPrefix }) => {
    let er = `• *Example :* ${usedPrefix + command} cinta

Opsi Tersedia:
• cinta
• rindu
• mimpi
• sendiri
• sabar
• kesedihan
• pernikahan
• kemerdekaan`
    if (!args[0]) return conn.reply(m.chat, er, m)
    switch (args[0].toLowerCase()) {
        case 'cinta':
        case 'rindu':
        case 'mimpi':
        case 'sendiri':
        case 'sabar':
        case 'kesedihan':
        case 'pernikahan':
        case 'kemerdekaan':
            quotes(args[0].toLowerCase()).then(res => {
                let data = JSON.stringify(res)
                let json = JSON.parse(data)
                let random = Math.floor(Math.random() * json.data.length)
                let hasil = json.data[random]
                let { author, bio, quote } = hasil
                conn.reply(m.chat, `“${quote}”\n\n${author} - ${bio}`, m)
            })
            break
        default:
            return conn.reply(m.chat, er, m)
    }
}
handler.help = ['katabijak'].map(v => v + ' *<text>*')
handler.tags = ['internet']
handler.command = /^(katabijak|jagokata)$/i

module.exports = handler