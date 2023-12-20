const fetch = require('node-fetch')

let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) return conn.reply(m.chat, `• *Example :* ${usedPrefix + command} kemii`, m)
  conn.sendMessage(m.chat, { react: { text: "🕒", key: m.key } });
  let kemii = `https://api.lolhuman.xyz/api/textprome/${command}?apikey=${global.lolkey}&text=${text}`
   conn.sendFile(m.chat, kemii, '', done, m)
  }

handler.help = ['blackpink','bloodfrosted','bokeh','box3d','breakwall','cloud','deluxesilver','fireworksparkle','foggywindow','futureneon','greenneon','hallowen','harrypotter','holographic','horrorblood','icecold','impressiveglitch','jokerlogo','lightglowsliced','luxury','magma','metaldark','minion','natureleaves','neon','neonlight','neonyearcard','roadwarning','sandsummer','sandwriting','sandengraved','strawberry','summersand','text1917','thunder','toxic','watercolor'].map(v => v + ' *<teks>*')
handler.command = /^(blackpink|bloodfrosted|bokeh|box3d|breakwall|cloud|delexesilver|fireworksparkle|foggywindow|funtureneon|greenneon|hallowen|harrypotter|holographic|horrorblood|icecold|impressiveglitch|jokerlogo|lightglowsliced|luxury|magma|metaldark|minion|natureleaves|neon|neonlight|neonyearcard|roadwarning|sandsummer|sandwriting|sendengraved|strawberry|summersand|text1917|thunder|toxic|watercolor)$/i
handler.tags = ['textprome']
handler.limit = true

module.exports = handler