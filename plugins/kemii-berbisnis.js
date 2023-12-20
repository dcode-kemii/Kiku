let handler = async (m, { conn, args, text, usedPrefix, command }) => {
  let who1 = m.mentionedJid[0];
  let who2 = m.mentionedJid[1];
  let who3 = m.mentionedJid[2];

  if (text.split(" ").length < 3) return conn.reply(m.chat,  "Minimal tag 3 member!", m)
  if (!text)
    return conn.reply(
      m.chat,
      `*❏ GET NUMBER*\n\n• ${usedPrefix + command} @tag @tag @tag`,
      m
    );
  if (
    typeof global.db.data.users[who1] == "undefined" ||
    typeof global.db.data.users[who2] == "undefined" ||
    typeof global.db.data.users[who2] == "undefined" ||
    typeof global.db.data.users[who3] == "undefined"
  )
    return conn.reply(m.chat, "Di antara target yang kamu tag\nMereka tidak terdeteksi didalam database", m)
  let __timers = new Date() - global.db.data.users[m.sender].lastbisnis;
  let _timers = 86400000 - __timers;
  let timers = clockString(_timers);
  let users = global.db.data.users;
  let name = m.sender;
  if (
    9999 > users[who1].money ||
    9999 > users[who2].money ||
    9999 > users[who3].money
  )
    return conn.reply(m.chat, "Di antara target yang kamu tag\nMereka tidak memiliki modal..\nHarap masukkan modal terlebih dahulu 10000", m)
  if (9999 > users[m.sender].money)
    return conn.reply(m.chat, "kamu tidak memiliki modal harap masukkan modal 10000", m)
  if (new Date() - global.db.data.users[m.sender].lastbisnis > 86400000) {
    let dapat = Math.floor(Math.random() * 10000);
    let untung = Math.floor(Math.random() * 100000);
    let rugi = Math.floor(Math.random() * 50000);
    // let _money = `${pickRandom(['10000','20000','30000','40000','50000','60000','70000','80000','90000','100000'])}`.trim()
    // let money = (_money * 1)
    global.db.data.users[m.sender].money -= dapat * 1;
    global.db.data.users[who1].money -= dapat * 1;
    global.db.data.users[who2].money -= dapat * 1;
    global.db.data.users[who3].money -= dapat * 1;

    conn.reply(
      m.chat,
      `Mohon tunggu kak..\n\n@${m.sender.split`@`[0]}\n@${who1.split`@`[0]}\n@${
        who2.split`@`[0]
      }\n@${
        who3.split`@`[0]
      }\nSedang berbisnis.. 😅\n\n*Kalian semua meletakkan modal masing-masing -${dapat} 😅*\n@${
        name.split`@`[0]
      }\n@${who1.split`@`[0]}\n@${who2.split`@`[0]}\n@${who3.split`@`[0]}`,
      m,
      { mentions: await conn.parseMention(m.mentionedJid) }
    );
    setTimeout(() => {
      let bis = `Selamat statistik bisnis kalian meningkat\n\nMasing-masing mendapatkan:\n@${
        name.split`@`[0]
      } : *+${(users[m.sender].money += untung * 1)} Money*\n@${
        who1.split`@`[0]
      } : *+${(users[who1].money += untung * 1)} Money*\n@${
        who2.split`@`[0]
      } : *+${(users[who2].money += untung * 1)} Money*\n@${
        who3.split`@`[0]
      } : *+${(users[who3].money += untung * 1)} Money*`;
      conn.reply(m.chat, bis, m, { mentions: conn.parseMention(bis) });
    }, 60000);
    setTimeout(() => {
      let bis = `Waahhh.. statistik bisnis kalian menurun\n\nMasing-masing minus:\n@${
        name.split`@`[0]
      } : *-${(users[m.sender].money -= rugi * 1)} Money*\n@${
        who1.split`@`[0]
      } : *-${(users[who1].money -= rugi * 1)} Money*\n@${
        who2.split`@`[0]
      } : *-${(users[who2].money -= rugi * 1)} Money*\n@${
        who3.split`@`[0]
      } : *-${(users[who3].money -= rugi * 1)} Money*`;
      conn.reply(m.chat, bis, m, { mentions: conn.parseMention(bis) });
    }, 14400000);
    setTimeout(() => {
      let bis = `Selamat statistik bisnis kalian meningkat\n\nMasing-masing mendapatkan:\n@${
        name.split`@`[0]
      } : *+${(users[m.sender].money += untung * 1)} Money*\n@${
        who1.split`@`[0]
      } : *+${(users[who1].money += untung * 1)} Money*\n@${
        who2.split`@`[0]
      } : *+${(users[who2].money += untung * 1)} Money*\n@${
        who3.split`@`[0]
      } : *+${(users[who3].money += untung * 1)} Money*`;
      conn.reply(m.chat, bis, m, { mentions: conn.parseMention(bis) });
    }, 28800000);
    setTimeout(() => {
      let bis = `Selamat statistik bisnis kalian meningkat\n\nMasing-masing mendapatkan:\n@${
        name.split`@`[0]
      } : *+${(users[m.sender].money += untung * 1)} Money*\n@${
        who1.split`@`[0]
      } : *+${(users[who1].money += untung * 1)} Money*\n@${
        who2.split`@`[0]
      } : *+${(users[who2].money += untung * 1)} Money*\n@${
        who3.split`@`[0]
      } : *+${(users[who3].money += untung * 1)} Money*`;
      conn.reply(m.chat, bis, m, { mentions: conn.parseMention(bis) });
    }, 43200000);
    setTimeout(() => {
      let bis = `Mohon tunggu kak..\n\n@${name.split`@`[0]}\n@${
        who1.split`@`[0]
      }\n@${who2.split`@`[0]}\n@${
        who3.split`@`[0]
      }\nSedang berbisnis.. 😅\n\n*Kalian semua meletakkan modal masing-masing -${dapat} 😅*\n@${
        name.split`@`[0]
      }\n@${who1.split`@`[0]}\n@${who2.split`@`[0]}\n@${who3.split`@`[0]}`;
      conn.reply(m.chat, bis, m, { mentions: conn.parseMention(bis) });
    }, 57600000);
    setTimeout(() => {
      let bis = `Selamat statistik bisnis kalian meningkat\n\nMasing-masing mendapatkan:\n@${
        name.split`@`[0]
      } : *+${(users[m.sender].money += untung * 1)} Money*\n@${
        who1.split`@`[0]
      } : *+${(users[who1].money += untung * 1)} Money*\n@${
        who2.split`@`[0]
      } : *+${(users[who2].money += untung * 1)} Money*\n@${
        who3.split`@`[0]
      } : *+${(users[who3].money += untung * 1)} Money*`;
      conn.reply(m.chat, bis, m, { mentions: conn.parseMention(bis) });
    }, 72000000);
  } else conn.reply(m.chat, `Anda Sudah Berbisnis , tunggu ${timers} lagi..`, m)
};
handler.help = ["berbisnis *@user|@user|@user*"];
handler.tags = ["rpg"];
handler.command = /^berbisnis$/i;
handler.limit = true;
handler.group = true;

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)];
}

function clockString(ms) {
  let h = Math.floor(ms / 3600000);
  let m = Math.floor(ms / 60000) % 60;
  let s = Math.floor(ms / 1000) % 60;
  console.log({ ms, h, m, s });
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(":");
}
