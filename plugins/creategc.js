let handler = async (m, { conn, text, isOwner }) => {
   
   if (!text) return conn.reply(m.chat, '• *Example :* .creategroup CHATBOT', m)
   try{
    m.reply(wait)
    let group = await conn.groupCreate(text, [m.sender])
    let link = await conn.groupInviteCode(group.gid)
    let url = 'https://chat.whatsapp.com/' + link;
 /// console.log(chalk.bold.red('Membuat Grup: ' + group.gid + '\nNama Grup: ' + text + '\n\nViolet'))
    conn.reply(m.chat, `_Berhasil Membuat Grup *' + text + '*_\n\n*Nama:* ' + text + '\n*ID:* ' + group.gid + '\n*Link:* {$link}`, m)
       } catch (e) {
    let [namagc, partici] = text.split('|')
    if (!namagc) return conn.reply(m.chat, 'Format Salah!!!', m)
    if (!partici) return conn.reply(m.chat, 'Tag user sebagai member baru!', m)
    let mem = conn.parseMention(`@${parseInt(m.sender)} ${partici}`)
    let ha = await conn.groupCreate(namagc, mem).catch(console.error)
    console.log(JSON.stringify(ha));
    await conn.reply(m.chat, `*GROUP CREATE*

\`\`\`Group Telah Dibuat @${m.sender.replace(/@.+/, '')}\`\`\`


${JSON.stringify(ha.participants)}`, m)
     conn.groupMakeAdmin(ha.gid, [m.sender])
   if (!isOwner) {
      await conn.modifyChat(ha.gid, 'delete', {
            includeStarred: false
          }).catch(console.error)
         conn.groupLeave(ha.gid)
    }
  }
}
handler.help = ['creategroup *<text>*']
handler.tags = ['owner']
handler.command = /^((create|buat)(gc|grup|group))$/
handler.owner = true
handler.group = false
handler.premium = false
module.exports = handler