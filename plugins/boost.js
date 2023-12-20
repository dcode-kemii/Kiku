let { performance } = require('perf_hooks')

let handler = async (m, { conn }) => {

 let start = `Waiting is being accelerated...`
 let boost = `${pickRandom(['[▒▒▒▒▒▒▒▒▒▒]'])}`
 let boost2 = `${pickRandom(['[█▒▒▒▒▒▒▒▒▒]','[██▒▒▒▒▒▒▒▒]'])}`
 let boost3 = `${pickRandom(['[██▒▒▒▒▒▒▒▒]','[███▒▒▒▒▒▒▒▒]','[████▒▒▒▒▒▒▒]'])}`
 let boost4 = `${pickRandom(['[██████▒▒▒▒▒▒▒]','[████████▒▒▒▒▒▒]','[████████▒▒▒▒]'])}`
 let boost5 = `${pickRandom(['[██████████▒▒▒]','[████████████▒]'])}`
 let boost6 = `${pickRandom(['*Conection Lost...*','[████████████▒]','[█▒▒▒▒▒▒▒▒▒]'])}`
 let boost7 = `${pickRandom(['[██████████▒▒▒]','[████████████▒]','[████████████]'])}`

   await conn.reply(m.chat, start, m)
   await conn.reply(m.chat, boost, m)
   await conn.reply(m.chat, boost2, m)
   await conn.reply(m.chat, boost3, m)
   await conn.reply(m.chat, boost4, m)
   await conn.reply(m.chat, boost5, m)
   await conn.reply(m.chat, boost6, m)
   await conn.reply(m.chat, boost7, m)
   let old = performance.now()
   let neww = performance.now()
   let speed = `${neww - old}`
   let finish = `🚩 *Bot succeeded in Accelerate!*\n\n*_Speed: ${speed} Second!*`

     conn.reply(m.chat, finish, m)
}
handler.help = ['boost', 'refresh']
handler.tags = ['info']
handler.command = /^boost|refresh/i

handler.rowner = true 


handler.fail = null
module.exports = handler

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}