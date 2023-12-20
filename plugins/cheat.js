let handler = async (m, { conn }) => {
    let user = global.db.data.users[m.sender]
        conn.reply(m.chat, `*Succes Cheat !*`, m)
        global.db.data.users[m.sender].money = 9999999999999999999
        global.db.data.users[m.sender].limit = 9999999999999999999
        global.db.data.users[m.sender].level = 9999999999999999999
        global.db.data.users[m.sender].exp = 9999999999999999999
        global.db.data.users[m.sender].sampah = 9999999999999999999
        global.db.data.users[m.sender].potion = 9999999999999999999
        global.db.data.users[m.sender].common = 9999999999999999999
        global.db.data.users[m.sender].uncommon = 9999999999999999999
        global.db.data.users[m.sender].mythic = 9999999999999999999
        global.db.data.users[m.sender].legendary = 9999999999999999999
        global.db.data.users[m.sender].potion =  999999999999999999

global.db.data.users[m.sender].diamond =  999999999999999999

global.db.data.users[m.sender].poin =  999999999999999999

global.db.data.users[m.sender].balance =  999999999999999999

global.db.data.users[m.sender].bank =  999999999999999999
}
handler.command = /^(cheat)$/i
handler.premium = true
handler.mods = false

module.exports = handler