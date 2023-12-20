let { sticker } = require('../lib/sticker')

let handler = async (m, { conn, usedPrefix, command }) => {
conn.sendMessage(m.chat, { react: { text: "🕒", key: m.key } });
	try {
		let res = await fetch(`https://raw.githubusercontent.com/clicknetcafe/Databasee/main/anime/${command}.json`)
		let anu = pickRandom(await res.json())
		if (!anu) throw Error('error : no url')
		if (anu.split('.').pop() == 'gif') {
			let buffer = await sticker(false, anu, packname, author)
			await conn.sendFile(m.chat, buffer, '', '', m)
		} else await conn.sendMessage(m.chat, { image: { url: anu }, caption: done }, { quoted: m })
	} catch (e) {
		console.log(e)
		conn.reply(m.chat, 'scrape failed', m)
	}
}

handler.help = ['akira','akiyama','ana','asuna','ayuzawa','boruto','chitanda','chitoge','deidara','doraemon','elaina','emilia','erza','gremory','hestia','hinata','husbu','icon','inori','isuzu','itachi','itori','kaga','kagura','kakasih','kaneki','kaori','keneki','kosaki','kotori','kuriyama','kuroha','kurumi','loli','madara','mikasa','miku','minato','naruto','natsukawa','nekonime','nezuko','nishimiya','onepiece','pokemon','rem','rize','sagiri','sakura','sasuke','shina','shinka','shizuka','shota','tomori','toukachan','tsunade','waifu2','yatogami','yuki']
handler.tags = ['anime']
handler.command = /^(akira|akiyama|ana|asuna|ayuzawa|boruto|chitanda|chitoge|deidara|doraemon|elaina|emilia|erza|gremory|hestia|hinata|husbu|icon|inori|isuzu|itachi|itori|kaga|kagura|kakasih|kaneki|kaori|keneki|kosaki|kotori|kuriyama|kuroha|kurumi|loli|madara|mikasa|miku|minato|naruto|natsukawa|nekonime|nezuko|nishimiya|onepiece|pokemon|rem|rize|sagiri|sakura|sasuke|shina|shinka|shizuka|shota|tomori|toukachan|tsunade|waifu2|yatogami|yuki)$/i

handler.premium = false
handler.limit = true

module.exports = handler;

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}