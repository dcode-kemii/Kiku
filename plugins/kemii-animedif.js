let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) return conn.reply(m.chat, `• *Example :* ${usedPrefix + command} 1girl, solo, ponytail, blush.`, m)
conn.sendMessage(m.chat, { react: { text: "🕒", key: m.key } });
    try {
let data = (`https://api.yanzbotz.my.id/api/text2img/neima?prompt=${text}`)
conn.sendFile(m.chat, data,"apa", '```Success...\nDont forget to donate```', m)
	} catch (e) {
		m.reply(error);
	}
};
handler.help = ["animedif *<text>*"]
handler.tags = ["internet","diffusion"]
handler.command = ["animedif"]

module.exports = handler