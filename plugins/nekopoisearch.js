var fetch = require("node-fetch")

var handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) return conn.reply(m.chat, `• *Example :* ${usedPrefix + command} isekai`, m)
  var kemii = await fetch(`https://api.lolhuman.xyz/api/nekopoisearch?apikey=${global.lolkey}&query=${text}`)
  var res = await kemii.json()

  var resultText = ''
  for (let i = 0; i < res.result.length; i++) {
    var result = res.result[i]
    var hasil = `• Title: *${result.title}*\n• Link: *${result.link}*\n`
    resultText += hasil + '\n'
  }

  var thumb = res.result[0].thumbnail
  var name = m.sender
  var fkonn = {
    key: {
      fromMe: false,
      participant: `0@s.whatsapp.net`,
      ...(m.chat ? { remoteJid: '6283137550315@s.whatsapp.net' } : {})
    },
    message: {
      contactMessage: {
        displayName: await conn.getName(name),
        vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${name}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
      }
    }
  }
  
  await conn.reply(m.chat, wait, fkonn)

  conn.sendMessage(m.chat, {
    text: resultText,
    contextInfo: {
      externalAdReply: {
        title: 'Nekopoi Search - Kikuchanj',
        thumbnailUrl: 'https://telegra.ph/file/f85d08f5e5e75147807a0.jpg',
        mediaType: 1,
        renderLargerThumbnail: true
      }
    }
  })
}

handler.help = ['nekopoisearch'].map(v => v + ' *<text>*')
handler.tags = ['anime']

handler.command = /^nekopoisearch|nekopois$/i
handler.premium = false

module.exports = handler