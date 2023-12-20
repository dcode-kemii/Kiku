let handler = m => m
handler.before = async function (m) {
let group = m.chat
    if (m.isGroup && global.db.data.chats[m.chat].expired != 0) {
        if (new Date() * 1 >= global.db.data.chats[m.chat].expired) {
            this.reply(m.chat, `waktunya *${this.user.name}* untuk meninggalkan grup\nJangan lupa sewa lagi ya!`, null).then(() => {
                await conn.delay(1000)
                   await conn.groupLeave(group)
                        global.db.data.chats[m.chat].expired = 0
            })
        }
    }
}

module.exports = handler