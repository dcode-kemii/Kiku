let handler = async (m, {
    conn,
    text,
    command,
    isBotAdmin
}) => {
    if (!m.quoted) return conn.reply(m.chat, "Reply pesan yang ingin diedit", m)
    if (!text) return conn.reply(m.chat, "Tidak ada teks", m)
    if (!m.quoted.isBaileys) return conn.reply(m.chat, "Pesan tidak dikirim oleh bot!", m)

    try {
        await conn.sendMessage(m.chat, {
            text: text,
            edit: m.quoted.vM.key
        })
    } catch (e) {
        try {
            let edit = m.quoted.sender ? m.message.extendedTextMessage.contextInfo.participant : m.key.participant
            let bang = m.quoted.id ? m.message.extendedTextMessage.contextInfo.stanzaId : m.key.id
            await conn.sendMessage(m.chat, {
                text: text,
                edit: {
                    remoteJid: m.chat,
                    fromMe: false,
                    id: bang,
                    participant: edit
                }
            })

        } catch (e) {
            try {
                await conn.relayMessage(m.chat, {
                    protocolMessage: {
                        key: m.quoted.vM.key,
                        type: 14,
                        editedMessage: {
                            conversation: text
                        }
                    }
                }, {})

            } catch (e) {
                await m.reply(eror)
            }
        }
    }
}
handler.help = ["edit *<reply>*"]
handler.tags = ["internet"]
handler.command = ["edit"]
handler.premium = true

module.exports = handler

function checkTrue(input) {
    return input === false;
}