let handler = async (m) => {
    let user = global.db.data.users[m.sender]
    if (user.warn == 0) throw 'Kamu Tidak Memiliki Peringatan!'

    user.warn -= 1
    m.reply(`Selamat Peringatan Kamu Berkurang 1\n\nPeringatan Kamu: ${user.warn}`)
}
handler.customPrefix = /^(maafkan saya yang mulia)$/i;
handler.command = new RegExp();

handler.limit = true

module.exports = handler