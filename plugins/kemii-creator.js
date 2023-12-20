let { MessageType } = require('@adiwajshing/baileys')
let PhoneNumber = require('awesome-phonenumber')
let handler = async (m, { conn, usedPrefix, text, args, command }) => {
let vcard = `
BEGIN:VCARD
VERSION:3.0
FN:${author.replace(/\n/g, '\\n')}
TEL;type=CELL;type=VOICE;waid=${nomorown}:${PhoneNumber('+' + nomorown).getNumber('international')}
END:VCARD`
   conn.sendMessage(m.chat, {
            contacts: {
                displayName: author,
                contacts: [{ vcard }]
            }
        }, { quoted: m })
}
handler.help = ['owner']
handler.tags = ['info']

handler.command = /^(owner)$/i

module.exports = handler