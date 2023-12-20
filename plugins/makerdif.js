const axios = require('axios');
const fetch = require('node-fetch');
const fs = require('fs');
const FormData = require('form-data');
const uploadImage = require('../lib/uploadImage.js');

const handler = async (m, { conn, usedPrefix, command, args, text }) => {
  let style = (args[0] || '').toLowerCase();
  let q = m.quoted ? m.quoted : m;
  let mime = (q.msg || q).mimetype || '';
  let listStyle = `┌ ◦ Use Format: *.${command} <style>*
└ ◦ Example: *.${command} gta5*

*— L I S T - S T Y L E*

┌ ◦ gta5
│ ◦ dball
│ ◦ naruto
│ ◦ cyber
│ ◦ killer
│ ◦ kyoto
│ ◦ bikini
└ ◦ iron

*Note:* Reply/Send Image with caption .${command} <style>`;

    if (/makerdiff|jadi|makerdif/i.test(command)) {
      switch (style) {
        case 'killer':
        case 'dball':
        case 'naruto':
        case 'starry_girl':
        case 'bikini':
        case 'gta5':
        case 'kyoto':
        case 'iron':
        case 'cyber':
        if (!mime) return conn.reply(m.chat, `Send/Reply Images with captions .${command} ${style ? style : 'gta5'}`, m)
          conn.sendMessage(m.chat, {
            react: {
              text: '🕒',
              key: m.key,
            }
          });
          let media = await q.download();
          let url = await uploadImage(media);
          let hasil = await fetch(`https://skizo.tech/api/aimirrorvip?&apikey=${global.xzn}&url=${url}&filter=${style.toUpperCase()}`)
          let res = await hasil.json()
          return conn.sendFile(m.chat, res.generated_image_addresses, 'ppk.jpg', '```Success...\nDont forget to donate```', m);
        default:
                        return conn.sendMessage(m.chat, {
text: listStyle,
contextInfo: {
externalAdReply: {
title: "M A K E R D I F F",
body: 'The following styles are available',
thumbnailUrl: "https://telegra.ph/file/a82ad1b37cac63de1ba70.jpg",
mediaType: 1,
renderLargerThumbnail: true
}}})
}
  } else {
  conn.reply(m.chat, 'Invalid command', m)
  }
};

handler.tags = ['diffusion']
handler.command = /^(makerdif|jadi|makerdiff)$/i
handler.help = ['makerdiff'].map(v => v + ' *<style>*')
handler.limit = true;

module.exports = handler;