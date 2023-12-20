let handler = m => m
handler.before = async (m, { conn, isPrems, owner }) => {
	if (isPrems) {
    if (new Date() * 1 >= global.db.data.users[m.sender].premiumDate) {
      conn.reply(m.chat, "Maaf waktu Premium anda telah habis!\n\nSilahkan hubungi owner untuk perpanjang waktu Premium!", m).then(() => {
        global.db.data.users[m.sender].premium = false
        const data = global.owner.filter(([id, isCreator]) => id && isCreator)
        this.sendContact(m.chat, data.map(([id, name]) => [id, name]), m)
           })
        }
      }
   }
module.exports = handler