let handler = async (m, { conn, text }) => {
  if (!text) throw '• *Example :* .rating 5'

  let img = 'https://telegra.ph/file/d59776ea4b0efb0879167.jpg'
  let rate = 'Berikan rating dibawah button ini agar bot bersemangat diperbaiki!'
  let sukses = 'Terima kasih atas ratingnya!'

  let rating
  try {
    rating = parseInt(text)
  } catch (e) {
    throw 'Rating harus berupa angka'
  }
  
  switch (rating) {
    case 5:
      conn.sendMessage(m.chat, rate, { quoted: m })
      conn.fakeReply(m.chat, sukses, '0@s.whatsapp.net', '2023 ©Kemii Sazumi', 'status@broadcast')
      break
    case 4:
      conn.sendMessage(m.chat, rate, { quoted: m })
      conn.fakeReply(m.chat, sukses, '0@s.whatsapp.net', '2023 ©Kemii Sazumi', 'status@broadcast')
      break
    case 3:
      conn.sendMessage(m.chat, rate, { quoted: m })
      conn.fakeReply(m.chat, sukses, '0@s.whatsapp.net', '2023 ©Kemii Sazumi', 'status@broadcast')
      break
    case 2:
      conn.sendMessage(m.chat, rate, { quoted: m })
      conn.fakeReply(m.chat, sukses, '0@s.whatsapp.net', '2023 ©Kemii Sazumi', 'status@broadcast')
      break
    case 1:
      conn.sendMessage(m.chat, rate, { quoted: m })
      conn.fakeReply(m.chat, sukses, '0@s.whatsapp.net', '2023 ©Kemii Sazumi', 'status@broadcast')
      break
    default:
      throw 'Rating harus berupa angka antara 1-5'
  }
}

handler.help = ['rate']
handler.tags = ['tools']
handler.command = /^(rate|rating)$/i

module.exports = handler