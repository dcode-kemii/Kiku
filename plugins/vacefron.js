let fetch = require('node-fetch')
let handler = async (m, { conn, isOwner, usedPrefix, command, args }) => {
	let query = "• *Example :* .vace naruto"
	let text
	if (args.length >= 1) {
		text = args.slice(0).join(" ")
	} else if (m.quoted && m.quoted.text) {
		text = m.quoted.text
	} else throw query
	
  let urut = text.split`|`
  let one = urut[0]
  let two = urut[1]
  let three = urut[2]
  let four = urut[3]
  let five = urut[4]
  let six = urut[5]
  
  if (command == "vace") {
  let res = ["adios",
"batmanslap",
"carreverse",
"changemymind",
"distractedbf",
"dockofshame",
"drip",
"ejected",
"emergencymeeting",
"firsttime",
"grave",
"heaven",
"iamspeed",
"icanmilkyou",
"npc",
"peeposign",
"rankcard",
"stonks",
"tableflip",
"water",
"wide",
"wolverine",
"womanyellingatcat"]
  let spas = "                "
    let listSections = []
    Object.keys(res).map((v, index) => {
	listSections.push([spas + "[ RESULT " + ++index + " ]", [
          [res[v].toUpperCase(), usedPrefix + command + "get " + res[v] + "|" + text, ""]
        ]])
        })
	return conn.sendList(m.chat, htki + " 📺 Vace Maker 🔎 " + htka, `⚡ Silakan pilih Model di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`, author, "☂️ M O D E L ☂️", listSections, m)
	}
	
	if (command == "vaceget") {
	let res = await Vace(one, two, three, four, five, six)
	await conn.sendFile(m.chat, res, 'vace.jpg', done, m, false)
	}
}
handler.help = ['vace'].map(v => v + ' *<text>*')
handler.tags = ['maker']
handler.command = ["vace", "vaceget"]

module.exports = handler
function Vace(efek, teks1, teks2, teks3, teks4) {
    try {
    if (efek == "adios") {
        return "https://vacefron.nl/api/adios?user="+teks1
}
if (efek == "batmanslap") {
        return "https://vacefron.nl/api/batmanslap?text1="+teks1+"&text2="+teks2+"&batman="+teks3+"&robin="+teks4
}
if (efek == "carreverse") {
        return "https://vacefron.nl/api/carreverse?text="+teks1
}
if (efek == "changemymind") {
        return "https://vacefron.nl/api/changemymind?text="+teks1
}
if (efek == "distractedbf") {
        return "https://vacefron.nl/api/distractedbf?boyfriend="+teks1+"&girlfriend="+teks2+"&woman="+teks3
}
if (efek == "dockofshame") {
        return "https://vacefron.nl/api/dockofshame?user="+teks1
}
if (efek == "drip") {
        return "https://vacefron.nl/api/drip?user="+teks1
}
if (efek == "ejected") {
        return "https://vacefron.nl/api/ejected?name="+teks1+"&impostor=BOOL&crewmate=black|blue|brown|cyan|darkgreen|lime|orange|pink|purple|red|white|yellow"
}
if (efek == "emergencymeeting") {
        return "https://vacefron.nl/api/emergencymeeting?text="+teks1
}
if (efek == "firsttime") {
        return "https://vacefron.nl/api/firsttime?user="+teks1
}
if (efek == "grave") {
        return "https://vacefron.nl/api/grave?user="+teks1
}
if (efek == "iamspeed") {
        return "https://vacefron.nl/api/iamspeed?user="+teks1
}
if (efek == "icanmilkyou") {
        return "https://vacefron.nl/api/icanmilkyou?user1="+teks1+"[&user2="+teks2+"]"
}
if (efek == "heaven") {
        return "https://vacefron.nl/api/heaven?user="+teks1
}
if (efek == "npc") {
        return "https://vacefron.nl/api/npc?text1="+teks1+"&text2="+teks2
}
if (efek == "peeposign") {
        return "https://vacefron.nl/api/peeposign?text="+teks1
}
if (efek == "rankcard") {
        return "https://vacefron.nl/api/rankcard?username="+teks1+"&avatar="+teks2+"&currentXp=INT&nextLevelXp=INT&previousLevelXp=INT[&level=INT][&rank=INT][&customBg="+teks3+"|HEX][&textShadowColor=HEX][&xpColor=HEX][&circleAvatar=BOOL][&badges=activedeveloper|balance|boost|bravery|brilliance|bughunter|certifiedmoderator|developer|earlysupporter|events|nitro|partner|serverowner|staff]"
}
if (efek == "stonks") {
        return "https://vacefron.nl/api/stonks?user="+teks1+"[&notStonks=BOOL]"
}
if (efek == "tableflip") {
        return "https://vacefron.nl/api/tableflip?user="+teks1
}
if (efek == "water") {
        return "https://vacefron.nl/api/water?text="+teks1
}
if (efek == "wide") {
        return "https://vacefron.nl/api/wide?image="+teks1
}
if (efek == "wolverine") {
        return "https://vacefron.nl/api/wolverine?user="+teks1
}
if (efek == "womanyellingatcat") {
        return "https://vacefron.nl/api/womanyellingatcat?woman="+teks1+"&cat="+teks2
}
    } catch (e) {
        throw eror
    }
}