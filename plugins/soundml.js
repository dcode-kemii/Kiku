let axios = require("axios")
let fetch = require("node-fetch")
let cheerio = require("cheerio")
let {
    JSDOM
} = require("jsdom")

let handler = async (m, {
    conn,
    args,
    usedPrefix,
    text,
    command
}) => {
    if (!text) throw `• *Example :* .${command} Fanny`
    try {
            conn.sendMessage(m.chat, { react: { text: '🕒', key: m.key }})
            let res = await MLSound("id", text)
            let rdm = res[Math.floor(Math.random() * res.length)];
            await conn.sendMessage(m.chat, {
                audio: {
                    url: rdm
                },
                seconds: fsizedoc,
                ptt: true,
                mimetype: "audio/mpeg",
                fileName: rdm.split("/")[7] + ".mp3",
                waveform: [100, 0, 100, 0, 100, 0, 100]
            }, {
                quoted: m
            })

    } catch (e) {
        throw eror
    }
}
handler.help = ["mlsound *<name>*"]
handler.tags = ["internet"]
handler.command = /^mlsound$/i

module.exports = handler

/* New Line */
async function MLSound(tema, query) {
    let res
    if (tema == "id") {
        res = await fetch("https://mobile-legends.fandom.com/wiki/" + query + "/Audio/id")
    }
    if (tema == "en") {
        res = await fetch("https://mobilelegendsbuild.com/sound/" + query)
    }
    let html = await res.text()
    let dom = new JSDOM(html)
    var totals = dom.window.document.getElementsByTagName("audio");
    let audio = []
    for (var i = 0; i < totals.length; i++) {
        audio.push(totals[i].getAttribute("src"))
    }
    return audio
}