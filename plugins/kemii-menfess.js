let handler = async (m, { conn, text, usedPrefix, command }) => {
    conn.menfess = conn.menfess ? conn.menfess : {}
    const fcon = { key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': `Menfess Message!!`,}}}
    if (!text) return conn.reply(m.chat, `• *Example :* .menfess +${nomorown}|Your Name|Messages`, m)
    let [jid, name, pesan] = text.split('|');
    if ((!jid || !name || !pesan)) throw `*Example*: .menfess ${nomorown}|Your Name|Messages`;
    jid = jid.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
    let data = (await conn.onWhatsApp(jid))[0] || {};
    if (!data.exists) throw 'Number not registered on whatsapp.';
    if (jid == m.sender) throw ' Can send menfess messages to self.'
    let mf = Object.values(conn.menfess).find(mf => mf.status === true)
    if (mf) return !0
    	let id = + new Date
        let tek = `Hai *@${data.jid.split("@")[0]}*, ada pesan menfess nih buat kamu >_<\n\n◦ *Dari:* ${name}\n◦ *Pesan:* ${pesan}\n\nMau bales menfess? ketik aja apa yang ingin di bales, tar otomatis dikirim kok`.trim();
        await conn.sendMessage(data.jid, {
text: tek,
contextInfo: {
mentionedJid: [data.jid],
externalAdReply: {
title: "M e n f e s s - M e s s a g e",
thumbnailUrl: 'https://telegra.ph/file/327bcffca08b1f494167a.jpg',
sourceUrl: sgc,
mediaType: 1,
renderLargerThumbnail: true
}}
},{
quoted: fcon
})
        .then(() => {
            conn.reply(m.chat, 'Successfully sent menfess message.', m)
            conn.menfess[id] = {
                id,
                dari: m.sender,
                nama: name,
                penerima: data.jid,
                pesan: pesan,
                status: false
            }
            return !0
        })
}
handler.tags = ['anonymous']
handler.help = ['menfess', 'menfes'].map(v => v + ' *<number|name|text>*')
handler.command = /^(menfess|menfes|confess|confes)$/i
handler.private = true

module.exports = handler