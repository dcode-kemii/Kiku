let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i

let handler = async (m, { conn, text }) => {
let user = global.db.data.users[m.sender]
  conn.sendMessage(m.chat, {
    react: {
      text: '🕒',
      key: m.key,
    }
  });
    let [_, code] = text.match(linkRegex) || []
    if (!code) throw 'Link invalid'
    let res = await conn.groupAcceptInvite(code)
    conn.sendMessage(m.chat, { react: { text: '☑️', key: m.key }})
    user.warn += 1
	await m.reply(`${user.warn >= 4 ? '*📮 Stop stop kamu sudah terkena banned karna menggunakan command ini lebih dari 3x bye bye*' : '*🚩 Batas Mengunakan Command Ini Adalah 3x Sehari Jadi Kalo Lebih Dari Batasan Bakal Otomatis Di Block + Ban Permanent!!!*'}`)
 if (user.warn >= 4) {
            user.warn = 0
            global.db.data.users[m.sender].banned = true
            await conn.updateBlockStatus(m.sender, "block")
        }
}
handler.help = ['join *<link>*']
handler.tags = ['premium']

handler.command = /^join$/i

handler.premium = true

module.exports = handler