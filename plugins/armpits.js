const axios = require('axios')

let handler = async (m, { conn }) => {
  try {
	conn.sendMessage(m.chat, { react: { text: "🕒", key: m.key } });
    let res = await axios.get(`https://api.lolhuman.xyz/api/random/nsfw/armpits?apikey=${global.lolkey}`, { responseType: 'arraybuffer' })
    let image = Buffer.from(res.data, 'binary')
    conn.sendFile(m.chat, image, 'armpits.jpg', done, m)
  } catch (err) {
    console.log(err)
    conn.reply(m.chat, 'Error!', m)
  }
}
handler.help = ['armpits']
handler.tags = ['internet']

handler.command = /^armpits|arm$/i

module.exports = handler