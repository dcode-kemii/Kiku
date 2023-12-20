let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) m.reply(`• *Example :* ${usedPrefix + command} Bronya`)
    let name = text.toLowerCase()
    if (/buildhsr/i.test(command)) {
        switch (name) {
            case 'trailblazer':
            case 'trail':
            case 'blazer':
                conn.sendFile(m.chat, 'https://raw.githubusercontent.com/FortOfFans/HSR/main/sheet/Fire%20Trailblazer.jpg', name + '.jpg', 'Ini Dia Kak', m)
                conn.sendFile(m.chat, 'https://raw.githubusercontent.com/FortOfFans/HSR/main/sheet/Physical%20Trailblazer.jpg', name + '.jpg', 'Ini Dia Kak', m)
                break
            case 'bailu':
                conn.sendFile(m.chat, 'https://raw.githubusercontent.com/FortOfFans/HSR/main/sheet/Bailu.jpg', name + '.jpg', 'Ini Dia Kak', m)
                break
            case 'bronya':
                conn.sendFile(m.chat, 'https://raw.githubusercontent.com/FortOfFans/HSR/main/sheet/Bronya.jpg', name + '.jpg', 'Ini Dia Kak', m)
                break
            case 'blade':
                m.reply('Coming Soon...')
                break
            case 'clara':
                conn.sendFile(m.chat, 'https://raw.githubusercontent.com/FortOfFans/HSR/main/sheet/Clara.jpg', name + '.jpg', 'Ini Dia Kak', m)
                break
            case 'fu xuan':
            case 'fuxuan':
            case 'fu':
            case 'xuan':
                m.reply('Coming Soon...')
                break
            case 'gepard':
                conn.sendFile(m.chat, 'https://raw.githubusercontent.com/FortOfFans/HSR/main/sheet/Gepard.jpg', name + '.jpg', 'Ini Dia Kak', m)
                break
            case 'himeko':
                conn.sendFile(m.chat, 'https://raw.githubusercontent.com/FortOfFans/HSR/main/sheet/Himeko.jpg', name + '.jpg', 'Ini Dia Kak', m)
                break
            case 'jing yuan':
            case 'jingyuan':
            case 'jing':
            case 'yuan':
                conn.sendFile(m.chat, 'https://raw.githubusercontent.com/FortOfFans/HSR/main/sheet/Jing%20Yuan.jpg', name + '.jpg', 'Ini Dia Kak', m)
                break
            case 'kafka':
                conn.sendFile(m.chat, 'https://raw.githubusercontent.com/FortOfFans/HSR/main/sheet/Kafka.jpg', name + '.jpg', 'Ini Dia Kak', m)
                break
            case 'luocha':
                m.reply('Coming Soon...')
                break
            case 'seele':
                conn.sendFile(m.chat, 'https://raw.githubusercontent.com/FortOfFans/HSR/main/sheet/Seele.jpg', name + '.jpg', 'Ini Dia Kak', m)
                break
            case 'silver wolf':
            case 'silverwolf':
            case 'silver':
            case 'wolf':
                conn.sendFile(m.chat, 'https://raw.githubusercontent.com/FortOfFans/HSR/main/sheet/Silver%20Wolf.jpg', name + '.jpg', 'Ini Dia Kak', m)
                break
            case 'welt':
                conn.sendFile(m.chat, 'https://raw.githubusercontent.com/FortOfFans/HSR/main/sheet/Welt.jpg', name + '.jpg', 'Ini Dia Kak', m)
                break
            case 'yanqing':
                conn.sendFile(m.chat, 'https://raw.githubusercontent.com/FortOfFans/HSR/main/sheet/Yanqing.jpg', name + '.jpg', 'Ini Dia Kak', m)
                break
            case 'arlan':
                conn.sendFile(m.chat, 'https://raw.githubusercontent.com/FortOfFans/HSR/main/sheet/Arlan.jpg', name + '.jpg', 'Ini Dia Kak', m)
                break
            case 'asta':
                conn.sendFile(m.chat, 'https://raw.githubusercontent.com/FortOfFans/HSR/main/sheet/Asta.jpg', name + '.jpg', 'Ini Dia Kak', m)
                break
            case 'dan henk':
            case 'danhenk':
            case 'dan':
            case 'henk':
                conn.sendFile(m.chat, 'https://raw.githubusercontent.com/FortOfFans/HSR/main/sheet/Dan%20Heng.jpg', name + '.jpg', 'Ini Dia Kak', m)
                break
            case 'herta':
                conn.sendFile(m.chat, 'https://raw.githubusercontent.com/FortOfFans/HSR/main/sheet/Herta.jpg', name + '.jpg', 'Ini Dia Kak', m)
                break
            case 'hook':
                conn.sendFile(m.chat, 'https://raw.githubusercontent.com/FortOfFans/HSR/main/sheet/Hook.jpg', name + '.jpg', 'Ini Dia Kak', m)
                break
            case 'march 7th':
            case 'march7th':
            case 'march':
            case '7th':
                conn.sendFile(m.chat, 'https://raw.githubusercontent.com/FortOfFans/HSR/main/sheet/March%207th.jpg', name + '.jpg', 'Ini Dia Kak', m)
                break
            case 'natasha':
                conn.sendFile(m.chat, 'https://raw.githubusercontent.com/FortOfFans/HSR/main/sheet/Natasha.jpg', name + '.jpg', 'Ini Dia Kak', m)
                break
            case 'pela':
                conn.sendFile(m.chat, 'https://raw.githubusercontent.com/FortOfFans/HSR/main/sheet/Pela.jpg', name + '.jpg', 'Ini Dia Kak', m)
                break
            case 'qingque':
                conn.sendFile(m.chat, 'https://raw.githubusercontent.com/FortOfFans/HSR/main/sheet/Qingque.jpg', name + '.jpg', 'Ini Dia Kak', m)
                break
            case 'sampo':
                conn.sendFile(m.chat, 'https://raw.githubusercontent.com/FortOfFans/HSR/main/sheet/Sampo.jpg', name + '.jpg', 'Ini Dia Kak', m)
                break
            case 'serval':
                conn.sendFile(m.chat, 'https://raw.githubusercontent.com/FortOfFans/HSR/main/sheet/Serval.jpg', name + '.jpg', 'Ini Dia Kak', m)
                break
            case 'sushang':
                conn.sendFile(m.chat, 'https://raw.githubusercontent.com/FortOfFans/HSR/main/sheet/Sushang.jpg', name + '.jpg', 'Ini Dia Kak', m)
                break
            case 'tingyun':
                conn.sendFile(m.chat, 'https://raw.githubusercontent.com/FortOfFans/HSR/main/sheet/Tingyun.jpg', name + '.jpg', 'Ini Dia Kak', m)
                break
            default:
                return conn.reply(m.chat, `Character "${text}" Tidak Di Temukan :(\nMau Coba Kata Kunci Lain?`, m)
        }
    }
}
handler.help = ['buildhsr']
handler.tags = ['tools']
handler.command = /^(buildhsr)$/

handler.premium = true
handler.limit = true

module.exports = handler