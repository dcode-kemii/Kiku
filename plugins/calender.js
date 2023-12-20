let fetch = require('node-fetch');
let handler = async (m, { conn, args }) => {
  let date = new Date();
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();
  let hour = date.getHours();
  let minute = date.getMinutes();
  let second = date.getSeconds();
  
  let clockString = `${day}/${month}/${year} ${hour}:${minute}:${second}`;
  
  // Mengirimkan hasil ke grup atau pengguna
  conn.reply(m.chat, clockString, m);
}

handler.help = ['clock'];
handler.tags = ['tools'];
handler.command = /^(clock)$/i;

module.exports = handler;