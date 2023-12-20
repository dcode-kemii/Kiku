var fetch = require("node-fetch")

var handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) throw `• *Example :* ${usedPrefix + command} stepmoms`
  var dann = await fetch(`https://api.lolhuman.xyz/api/xnxxsearch?apikey=${global.lolkey}&query=${text}`)
  var res = await dann.json()

  var resultText = ''
  for (let i = 0; i < res.result.length; i++) {
    var result = res.result[i]
    var hasil = `• Title: *${result.title}*\n• Views: *${result.views}*\n• Duration: *${result.duration}*\n• Uploader: *${result.uploader}*\n\n• Link: *${result.link}*\n`
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
        title: namebot,
        body: wm,
        thumbnailUrl: thumb,
        sourceUrl: sig,
        mediaType: 1,
        renderLargerThumbnail: true
      }
    }
  })
}

handler.command = handler.help = ['xnxxsearch']
handler.tags = ['internet']
handler.premium = true

module.exports = handler