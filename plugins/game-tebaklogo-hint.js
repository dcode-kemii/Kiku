let handler = async (m, { conn }) => {
    conn.tebaklogo = conn.tebaklogo ? conn.tebaklogo : {}
    let id = m.chat
    if (!(id in conn.tebaklogo)) throw false
    let json = conn.tebaklogo[id][1]
    conn.reply(m.chat, '```' + json.hasil.data.jawaban.replace(/[AIUEOaiueo]/ig, '_') + '```', m)
}
handler.command = /^hlog$/i

handler.limit = true

module.exports = handler;