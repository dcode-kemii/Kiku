let fetch = require("node-fetch")
let handler = async (m, usedPrefix, command) => {
 let g = await fetch(`https://raw.githubusercontent.com/inirey/RESTAPI/master/data/deidara.json`)
let f = await g.json()
let a = f[Math.floor(Math.random() * f.length)]
conn.sendFile(m.chat, a, 'deidara.jpg', done, m)
}
handler.help = ['deidara']
handler.tags = ['anime']
handler.command = /^deidara$/i

module.exports = handler