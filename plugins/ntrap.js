let axios = require("axios")



let handler = async (m, { conn }) => {
    conn.sendMessage(m.chat, { react: { text: "🕒", key: m.key } });
    let res = await axios("https://api.waifu.pics/nsfw/trap")

    let json = res.data

    let url = json.url

    conn.sendFile(m.chat, url, "trap.png", done, m)

    }

handler.help = ['nsfw','trap']

handler.tags = ['internet']

handler.command = /^ntrap|trap$/i

handler.premium = true

handler.register = true

//Tenkyuu to Unx-sama

module.exports = handler
