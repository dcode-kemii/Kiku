var fetch = require('node-fetch');
var handler = async (m, {
 text, 
 usedPrefix, 
 command
 }) => {
if (!text) return conn.reply(m.chat, `• *Example :* .ai2 Siapa presiden Indonesia? `, m)
  let kemii = await conn.reply(m.chat, '```Sedang mencari jawaban...🔍```', m)
  var apii = await fetch(`https://aemt.me/openai?text=${text}`)
  var js = await apii.json()
  await conn.sendMessage(m.chat, { text: '```' + `${js.result}` + '```', edit: kemii })
}      
handler.command = /^ai2$/i
handler.help = ['ai2 *<text>*']
handler.tags = ['ai'];
handler.premium = false
module.exports = handler;