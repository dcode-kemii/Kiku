let axios = require('axios')
let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) return conn.reply(m.chat, `• *Example :* ${usedPrefix + command} 1girl, solo, ponytail, blush.`, m)
conn.sendMessage(m.chat, { react: { text: "🕒", key: m.key } });
try {
let api = `https://api.yanzbotz.my.id/api/text2img/dalle-3?prompt=${encodeURIComponent(text)}&apiKey=${global.yanz}`
let { data } = await axios.get(api)
let hasil = data.result.img
conn.sendFile(m.chat, hasil, '', '```Success...\nDont forget to donate```', m)
} catch (e) {
    console.log(e);
    conn.reply(m.chat, `Gagal Silahkan Ulangi Command`, m)
  }
};
handler.help = ["create *<text>*"]
handler.tags = ["diffusion","ai"]
handler.command = ["create"]
handler.premium = false

module.exports = handler