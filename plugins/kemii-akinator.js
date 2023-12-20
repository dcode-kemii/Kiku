let {
    Aki
} = require('aki-api')

let handler = async (m, {
    conn,
    usedPrefix,
    command,
    text
}) => {
    conn.akinatorv2 = conn.akinatorv2 || {};
    if (text == 'end') {
        if (!conn.akinatorv2[m.sender]) throw 'Anda tidak sedang dalam sesi Akinator'
        delete conn.akinatorv2[m.sender]
        conn.reply(m.chat, 'Berhasil keluar dari sesi Akinator.', m)
    } else if (text == 'start') {
        if (conn.akinatorv2[m.sender]) return conn.reply(m.chat, 'Anda masih berada dalam sesi Akinator', conn.akinatorv2[m.sender].msg)
        try {
            conn.akinatorv2[m.sender] = new Aki({
                region: 'id',
                childMode: false,
                proxy: undefined
            });
            await conn.akinatorv2[m.sender].start();

            let txt = `🎮 *Akinator* 🎮\n\n@${m.sender.split('@')[0]}\n${conn.akinatorv2[m.sender].question}\n\n`
            txt += '0 - Ya\n'
            txt += '1 - Tidak\n'
            txt += '2 - Saya Tidak Tau\n'
            txt += '3 - Mungkin\n'
            txt += '4 - Mungkin Tidak\n\n'
            txt += `*${usedPrefix + command} end* untuk keluar dari sesi Akinator`
            let soal = await conn.sendMessage(m.chat, {
                text: txt,
                mentions: [m.sender]
            }, {
                quoted: m
            })
            conn.akinatorv2[m.sender].msg = soal
        } catch (e) {
            console.log(e)
            await m.reply(eror)
        }
    } else {
        conn.reply(m.chat, '• *Example :* .akinator start/end', m)
    }
}

handler.help = ['akinator']
handler.tags = ['game']
handler.command = /^(akinator)$/i

handler.limit = true

module.exports = handler