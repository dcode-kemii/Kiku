let { tiktok2 } = require('../lib/scrape.js')

let handler = async (m, { conn, text, args, usedPrefix, command }) => {
  if (!text) {
    conn.sendPresenceUpdate("composing", m.chat)
    return conn.reply(m.chat, `• *Example :* .tiktok https://vm.tiktok.com/xxxxx`, m)
  }
  if (!text.match(/tiktok/gi)) {
    return conn.reply(m.chat, 'Make sure the link is from TikTok', m)
  }
  conn.sendMessage(m.chat, {
    react: {
      text: '🕒',
      key: m.key,
    }
  });
  try {
    let old = new Date();
    let p = await tiktok2(`${text}`);
    let kemii =`乂  *T I K T O K*\n\n`
    kemii +=`┌  ◦ *Title* : ${p.title}\n`
    kemii +=`└  ◦ *Fetch* : ${((new Date - old) * 1)} ms\n\n` 
    kemii +=`ᴋɪᴋᴜ - ᴡᴀʙᴏᴛ ᴍᴀᴅᴇ ʙʏ ᴛᴀᴋᴀꜱʜɪ ᴋᴇᴍɪɪ`
    await conn.sendFile(m.chat, p.no_watermark, 'tiktok.mp4', kemii, m);
    conn.sendMessage(m.chat, {
      react: {
        text: '✅',
        key: m.key,
      }
    });
   } catch (e) {
    console.log(e);
    conn.sendMessage(m.chat, {
      react: {
        text: '🍉',
        key: m.key,
      }
    });
  }

};

handler.help = ['tiktok'].map(v => v + ' *<url>*')
handler.tags = ['downloader'];
handler.command = /^(tiktok|tt|tiktokdl|tiktoknowm)$/i;
handler.limit = false;
handler.group = false;

module.exports = handler;