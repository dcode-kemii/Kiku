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
    if (!text) throw "• *Example :* .vectorstock Kemii"
    try {
            conn.sendMessage(m.chat, { react: { text: '🕒', key: m.key }})
            let res = await VectorDtock(text)
            let rdm = res[Math.floor(Math.random() * res.length)];
            await conn.sendMessage(m.chat, {
                image: {
                    url: rdm
                }, caption: done
            }, {
                quoted: m
            })

    } catch (e) {
        throw eror
    }
}
handler.help = ["vectorstock"]
handler.tags = ["internet"]
handler.command = /^vectorstock$/i

module.exports = handler

/* New Line */
async function VectorDtock(query) {
let res = await fetch('https://www.vectorstock.com/royalty-free-vectors/' +query+ '-vectors')
    let html = await res.text()
    let dom = new JSDOM(html)
    var collection = dom.window.document.getElementsByTagName('img');
    let img = []
for (var i = 0; i < collection.length; i++) {
	if (collection[i].getAttribute('src').startsWith('https://cdn.vectorstock.com')) {
	img.push(collection[i].getAttribute('src'))
	}
}
let newArr = img.filter(el => el != null);
return newArr
}