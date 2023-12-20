let axios = require('axios')

let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) return conn.reply(m.chat, `• *Example :* ${usedPrefix + command} Lo Siento`, m)
conn.sendMessage(m.chat, { react: { text: "🕒", key: m.key } });
let kiku = `https://api.yanzbotz.my.id/api/text2img/disney?prompt=${text}`
conn.sendFile(m.chat, kiku, '', done, m)
};
handler.help = ['disney *<text>*'];
handler.command = /^disney$/i;
handler.tags = ['internet','ai'];
handler.register = true;
handler.premium = false;
handler.limit = true;

module.exports = handler;