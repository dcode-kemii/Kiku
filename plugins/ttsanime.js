let fetch = require('node-fetch')
let handler = async(m, { conn, text , command }) => {
if (command == 'keqing') {
if (!text) throw `• *Example :* .keqing kemii Hentai Banget`
conn.sendMessage(m.chat, { react: { text: '🕒', key: m.key }})
let res = await fetch(`https://xzn.wtf/api/tts-anime?text=${text}&lang=english&voice=hu_tao&speed=0.8&symbol=y&apikey=${global.xzn}`)
let kemii = await res.json()
conn.sendFile(m.chat, kemii.data.url, `kemii.mp3`, '', m, true);
}
if (command == 'hutao') {
if (!text) throw `• *Example :* .hutao kemii Hentai Banget`
conn.sendMessage(m.chat, { react: { text: '🕒', key: m.key }})
let res = await fetch(`https://xzn.wtf/api/tts-anime?text=${text}&lang=english&voice=hu_tao&speed=0.8&symbol=y&apikey=${global.xzn}`)
let kemii = await res.json()
conn.sendFile(m.chat, kemii.data.url, `kemii.mp3`, '', m, true);
}
if (command == 'paimon') {
if (!text) throw `• *Example :* .paimon kemii Hentai Banget`
conn.sendMessage(m.chat, { react: { text: '🕒', key: m.key }})
let res = await fetch(`https://xzn.wtf/api/tts-anime?text=${text}&lang=english&voice=paimon&speed=0.8&symbol=y&apikey=${global.xzn}`)
let kemii = await res.json()
conn.sendFile(m.chat, kemii.data.url, `kemii.mp3`, '', m, true);
}
if (command == 'xiao') {
if (!text) throw `• *Example :* .xiao kemii Hentai Banget`
conn.sendMessage(m.chat, { react: { text: '🕒', key: m.key }})
let res = await fetch(`https://xzn.wtf/api/tts-anime?text=${text}&lang=english&voice=xiao&speed=0.8&symbol=y&apikey=${global.xzn}`)
let kemii = await res.json()
conn.sendFile(m.chat, kemii.data.url, `kemii.mp3`, '', m, true);
}
if (command == 'zhongli') {
if (!text) throw `• *Example :* .zhongli kemii Hentai Banget`
conn.sendMessage(m.chat, { react: { text: '🕒', key: m.key }})
let res = await fetch(`https://xzn.wtf/api/tts-anime?text=${text}&lang=english&voice=zhongli&speed=0.8&symbol=y&apikey=${global.xzn}`)
let kemii = await res.json()
conn.sendFile(m.chat, kemii.data.url, `kemii.mp3`, '', m, true);
}
if (command == 'yelan') {
if (!text) throw '• *Example :* .yelan kemii Hentai Banget'
conn.sendMessage(m.chat, { react: { text: '🕒', key: m.key }})
let res = await fetch(`https://xzn.wtf/api/tts-anime?text=${text}&lang=english&voice=yelan&speed=0.8&symbol=y&apikey=${global.xzn}`)
let kemii = await res.json()
conn.sendFile(m.chat, kemii.data.url, `kemii.mp3`, '', m, true);
}
if (command == 'diluc') {
if (!text) throw '• *Example :* .diluc kemii Hentai Banget'
conn.sendMessage(m.chat, { react: { text: '🕒', key: m.key }})
let res = await fetch(`https://xzn.wtf/api/tts-anime?text=${text}&lang=english&voice=diluc&speed=0.8&symbol=y&apikey=${global.xzn}`)
let kemii = await res.json()
conn.sendFile(m.chat, kemii.data.url, `kemii.mp3`, '', m, true);
}
if (command == 'thoma') {
if (!text) throw '• *Example :* .thoma kemii Hentai Banget'
conn.sendMessage(m.chat, { react: { text: '🕒', key: m.key }})
let res = await fetch(`https://xzn.wtf/api/tts-anime?text=${text}&lang=english&voice=thoma&speed=0.8&symbol=y&apikey=${global.xzn}`)
let kemii = await res.json()
conn.sendFile(m.chat, kemii.data.url, `kemii.mp3`, '', m, true);
}
if (command == 'lisa') {
if (!text) throw '• *Example :* .lisa kemii Hentai Banget'
conn.sendMessage(m.chat, { react: { text: '🕒', key: m.key }})
let res = await fetch(`https://xzn.wtf/api/tts-anime?text=${text}&lang=english&voice=lisa&speed=0.8&symbol=y&apikey=${global.xzn}`)
let kemii = await res.json()
conn.sendFile(m.chat, kemii.data.url, `kemii.mp3`, '', m, true);
}
if (command == 'klee') {
if (!text) throw '• *Example :* .klee kemii Hentai Banget'
conn.sendMessage(m.chat, { react: { text: '🕒', key: m.key }})
let res = await fetch(`https://xzn.wtf/api/tts-anime?text=${text}&lang=english&voice=kleee&speed=0.8&symbol=y&apikey=${global.xzn}`)
let kemii = await res.json()
conn.sendFile(m.chat, kemii.data.url, `kemii.mp3`, '', m, true);
}
if (command == 'xinyan') {
if (!text) throw '• *Example :* .xinyan kemii Hentai Banget'
conn.sendMessage(m.chat, { react: { text: '🕒', key: m.key }})
let res = await fetch(`https://xzn.wtf/api/tts-anime?text=${text}&lang=english&voice=xinyan&speed=0.8&symbol=y&apikey=${global.xzn}`)
let kemii = await res.json()
conn.sendFile(m.chat, kemii.data.url, `kemii.mp3`, '', m, true);
}
}
handler.command = handler.help = ['hutao','keqing','paimon','xiao','zhongli','yelan','diluc','thoma','lisa','klee','xinyan']
handler.tags = ['anime']
handler.limit = true

module.exports = handler