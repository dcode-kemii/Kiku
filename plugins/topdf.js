let uploadImage = require('../lib/uploadImage.js')
let handler = async (m, { conn, text, usedPrefix, command, isOwner, args }) => {
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
if (!mime) throw '*Respond / reply to an image*'    
let img = await q.download?.()
let url = await uploadImage(img)
let response = args.join(' ').split('|')
if (!args[0]) throw `Reply Image: .${command} kemii`
let docname = conn.getName(m.sender);
let kemii = `http://api.lolhuman.xyz/api/convert/imgtopdf?apikey=${global.lolkey}&img=${url}`
await conn.sendMessage(m.chat, { 
    document: { url: kemii }, 
    mimetype: 'application/pdf', 
    fileName: `${response[0]}.pdf`,
  }, {quoted: m})
}
handler.command = /^topdf$/i
module.exports = handler