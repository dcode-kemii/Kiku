let { lyrics, lyricsv2 } = require('@bochilteam/scraper')

let handler = async (m, { conn, text, usedPrefix, command }) => {
try {
    let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : ''
    if (!teks) return conn.reply(m.chat, `• *Example :* ${usedPrefix}${command} Seperti Bintang`, m)
    const result = await lyricsv2(teks).catch(async _ => await lyrics(teks))
    m.reply(`
Lyrics *${result.title}*
Author ${result.author}


${result.lyrics}


Url ${result.link}
`.trim())
} catch (e) {
    console.log(e);
    m.reply(`🐱 Failed`);
  }
}

handler.help = ['lirik'].map(v => v + ' *<text>*')
handler.tags = ['internet']
handler.command = /^(lirik|lyrics|lyric)$/i

module.exports = handler