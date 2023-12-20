let handler = async (m, { command, text }) => {
try {
if
	(m.message.extendedTextMessage) 
{
  var dataVideo = { ptvMessage: m.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage }
    conn.relayMessage(m.chat, dataVideo, {})
 }
} catch (error) {
  console.error(error) 

 }
}

handler.help = ['ptv']
handler.tags = ['tools']
handler.command = /^ptv$/i
handler.register = true
handler.limit = true

module.exports = handler