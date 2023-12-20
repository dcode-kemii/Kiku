const JavaScriptObfuscator = require('javascript-obfuscator')

let handler = async (m, { conn, text }) => {
if (!text) return conn.reply(m.chat, `• *Example :* .encrypt textnya`, m)
let res = JavaScriptObfuscator.obfuscate(text)
conn.reply(m.chat, res.getObfuscatedCode(), m)
}
handler.help = ['encrypt *<text>*']
handler.tags = ['tools']
handler.command = /^enc(rypt)?$/i

module.exports = handler