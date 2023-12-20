let fetch = require("node-fetch")

let handler = async (m, {
    conn,
    usedPrefix,
    text,
    args,
    command
}) => {

    let arrlist = [
        "animal",
        "animalears",
        "anusview",
        "ass",
        "barefoot",
        "bed",
        "bell",
        "bikini",
        "blonde",
        "bondage",
        "bra",
        "breasthold",
        "breasts",
        "bunnyears",
        "bunnygirl",
        "chain",
        "closeview",
        "cloudsview",
        "cum",
        "dress",
        "drunk",
        "elbowgloves",
        "erectnipples",
        "fateseries",
        "fingering",
        "flatchest",
        "food",
        "foxgirl",
        "gamecg",
        "genshin",
        "glasses",
        "gloves",
        "greenhair",
        "hatsunemiku",
        "hcatgirl",
        "headband",
        "headdress",
        "headphones",
        "hentaimiku",
        "hentaivideo",
        "hloli",
        "hneko",
        "hololove",
        "horns",
        "inshorts",
        "japanesecloths",
        "necklace",
        "nipples",
        "nobra",
        "nsfwbeach",
        "nsfwbell",
        "nsfwdemon",
        "nsfwidol",
        "nsfwmaid",
        "nsfwmenu",
        "nsfwvampire",
        "nude",
        "openshirt",
        "pantyhose",
        "pantypull",
        "penis",
        "pinkhair",
        "ponytail",
        "pussy",
        "ribbons",
        "schoolswimsuit",
        "schooluniform",
        "seethrough",
        "sex",
        "sex2",
        "sex3",
        "shirt",
        "shirtlift",
        "skirt",
        "spreadlegs",
        "spreadpussy",
        "squirt",
        "stockings",
        "sunglasses",
        "swimsuit",
        "tail",
        "tattoo",
        "tears",
        "thighhighs",
        "thogirls",
        "topless",
        "torncloths",
        "touhou",
        "twintails",
        "uncensored",
        "underwear",
        "vocaloid",
        "weapon",
        "wet",
        "white",
        "whitehair",
        "wings",
        "withflowers",
        "withgun",
        "withpetals",
        "withtie",
        "withtree",
        "wolfgirl",
        "yuri"
    ]
    let listnya = arrlist.map((v, index) => {
        return `[ ${++index} ] ${usedPrefix + command} ${v}`
    }).join("\n")
    let nah = `${htki} *L I S T* ${htka}
• *Example :* ${usedPrefix + command} yuri

${listnya}`
    if (!arrlist.includes(text)) return conn.reply(m.chat, nah, m)
    conn.sendMessage(m.chat, { react: { text: '🕒', key: m.key }})
    try {
        let ani = await fetch("https://fantox-apis.vercel.app/" + text)
        let mek = await ani.json()
        await conn.sendFile(m.chat, mek.url, "", done, m)
    } catch (e) {
        await conn.reply(m.chat, eror, m)
    }
}
handler.command = handler.help = ["fantox"]
handler.tags = ["anime"]
handler.premium = true
module.exports = handler