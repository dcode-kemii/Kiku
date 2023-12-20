let fetch = require('node-fetch')

let handler = async(m, { conn, usedPrefix, command }) => {

let res = await fetch('https://raw.githubusercontent.com/binjaicity/warga62/master/bocil.json')

let asup = await res.json()

let json = asup[Math.floor(Math.random() * asup.length)]

conn.sendFile(m.chat, json.url, '', done, m)

}

handler.help = ['bocil']

handler.tags = ['asupan']


handler.command = /^(bocil)$/i

module.exports = handler