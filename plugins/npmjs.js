let fetch = require('node-fetch') 

let handler = async (m, { text }) => {
	if (!text) return conn.reply(m.chat, '• *Example :* .npmjs api-dylux', m)
	let res = await fetch(`http://registry.npmjs.com/-/v1/search?text=${text}`)
	let { objects } = await res.json()
	if (!objects.length) throw `Query "${text}" not found :/`
	let txt = objects.map(({ package: pkg }) => {
		return `*${pkg.name}* (v${pkg.version})\n_${pkg.links.npm}_\n_${pkg.description}_`
	}).join`\n\n`
	m.reply(txt)
}
handler.help = ['npmsearch *<text>*']
handler.tags = ['tools']
handler.command = /^npm(js|search)?$/i

module.exports = handler