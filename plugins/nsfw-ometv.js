let handler = async (m, { conn, usedPrefix, command }) => {
  conn.sendMessage(m.chat, {
    react: {
      text: '🕒',
      key: m.key,
    }
  });
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let name = conn.getName(who)
  //conn.sendButton(m.chat, `Nih *${name}*`, botdate, pickRandom(ometv), [['Next', `/ometv`]],m)
  conn.sendFile(m.chat, pickRandom(ometv), null, done, m)
}
handler.help = ['ometv']
handler.tags = ['nsfw']
handler.command = /^(ometv)$/i

handler.premium = true

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

const ometv = [

      "https://i.top4top.io/m_2341xq9cq0.mp4",
      "https://k.top4top.io/m_2341fb4jm0.mp4",
      "https://k.top4top.io/m_2341jvbzy1.mp4",
      "https://h.top4top.io/m_2438kl6kw0.mp4",
      "https://i.top4top.io/m_2438k4cf70.mp4",
      "https://d.top4top.io/m_24387catm0.mp4",
      "https://h.top4top.io/m_2438l5utb0.mp4",
      "https://g.top4top.io/m_2438v1w7l0.mp4",
      "https://f.top4top.io/m_2341fihfn1.mp4",
      "https://j.top4top.io/m_2341jyxgq1.mp4",
      "https://d.top4top.io/m_23418161e1.mp4",
      "https://j.top4top.io/m_2341x8erk1.mp4",
      "https://j.top4top.io/m_2344852jl1.mp4",  
]