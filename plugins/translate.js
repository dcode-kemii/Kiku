let translate = require('@vitalets/google-translate-api')

let handler = async (m, { args, usedPrefix, command }) => {
	let lang, text
	if (args.length >= 2) {
		lang = args[0], text = args.slice(1).join(' ')
	} else if (m.quoted && m.quoted.text) {
		lang = args[0], text = m.quoted.text
	} else throw `• *Example :* ${usedPrefix + command} id hello world`
	let res = await translate(text, { to: lang, autoCorrect: true }).catch(_ => null)
	if (!res) throw `Error: The language "${lang}" is not supported`
	m.reply(`*Dari:* ${res.from.language.iso}\n*Ke:* ${lang}\n\n${res.text}`.trim())
}
handler.help = ['translate']
handler.tags = ['tools']
handler.command = /^(tr(anslate)?)$/i

module.exports = handler