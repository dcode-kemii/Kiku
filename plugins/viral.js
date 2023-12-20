let handler = async (m, { conn, usedPrefix, command }) => {
  conn.sendMessage(m.chat, { react: { text: '🕒', key: m.key }})
  conn.sendFile(m.chat, pickRandom(viral), 'viral.mp4', done, m)
}
handler.help = ['viral']
handler.tags = ['info']
handler.command = /^(viral)$/i

handler.premium = true
handler.limit = true

handler.fail = null
handler.register = true

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

const viral = [

"https://telegra.ph/file/f9f3d01fead02386e5331.mp4",
"https://telegra.ph/file/d1d7b11f5ab57b3e57d01.mp4",
"https://telegra.ph/file/11e0d15aac245accb6217.mp4",
"https://telegra.ph/file/dadd5f030d75ff9e787c8.mp4",
"https://telegra.ph/file/d18b06f324412d2cdb270.mp4",
"https://telegra.ph/file/7d3a354b69fe2e1c60d34.mp4",
"https://telegra.ph/file/1ae88269d50a627761072.mp4", "https://e.top4top.io/m_2344gqc9p1.mp4",   "https://f.top4top.io/m_2344zxnbv0.mp4", "https://e.top4top.io/m_234403ua01.mp4", "https://g.top4top.io/m_23444af6m0.mp4", "https://e.top4top.io/m_23444qdm11.mp4",
"https://d.top4top.io/m_2344zr3je1.mp4",    "https://b.top4top.io/m_2344w2x0n1.mp4",
"https://f.top4top.io/m_23441a9rx1.mp4",
"https://d.top4top.io/m_234461kmn0.mp4"

]