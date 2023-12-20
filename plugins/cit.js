let fetch = require('node-fetch')

let handler = async (m, { conn, text, args, usedPrefix, command }) => {
  let cheat = {
    1: 'money',
    2: 'limit',
    3: 'level',
    4: 'limit',
    5: 'exp',
    6: 'potion',
    7: 'aqua',
    8: 'trash',
    9: 'wood',
    10: 'rock',
    11: 'string',
    12: 'iron',
    13: 'diamond',
    14: 'emerald',
    15: 'gold',
    16: 'coal',
    17: 'common',
    18: 'uncommon',
    19: 'mythic',
    20: 'legendary',
    21: 'foodpet',
    22: 'Fox',
    23: 'naga',
    24: 'pet',
    25: 'anggur',
    26: 'apel',
    27: 'batu',
    28: 'berlian',
    29: 'bibitanggur',
    30: 'bibitapel',
    31: 'bibitjeruk',
    32: 'bibitmangga',
    33: 'bibitpisang',
    34: 'botol',
    35: 'centaur',
    36: 'eleksirb',
    37: 'emasbatang',
    38: 'emasbiasa',
    39: 'exp',
    40: 'gardenboc',
    41: 'gardenboxs',
    42: 'griffin',
    43: 'healtmonster',
    44: 'jeruk',
    45: 'kaleng',
    46: 'kardus',
    47: 'kayu',
    48: 'ketake',
    49: 'koinexpg',
    50: 'kucing',
    51: 'kuda',
    52: 'kyubi',
    53: 'makanancentaur',
    54: 'makanangriffin',
    55: 'makanankyubi',
    56: 'makanannaga',
    57: 'makananpet',
    58: 'makananphonix',
    59: 'mangga',
    60: 'pancingan',
    61: 'phonix',
    62: 'pisang',
    63: 'rubah',
    64: 'sampah',
    65: 'serigala',
    66: 'sword',
    67: 'tiketcoin',
    68: 'umpan',
  };

  let user = global.db.data.users[m.sender];
  let MaxCheat = 999999999;

  let input = args[0]; // Ganti dengan input yang diinginkan
  let count = args[1]; // Ganti dengan jumlah count yang diinginkan

  if (!cheat.hasOwnProperty(input)) {
    const availableCheats = Object.entries(cheat)
      .map(([num, c]) => `${num}. ${c}`)
      .join('\n');
    await conn.reply(m.chat, `Tersedia: list cheat dengan nomor\n${availableCheats}\n\n• *Example :* .${command} nomor jumlah`, m)
  } else {
    if (!isNaN(count)) {
      count = parseInt(count);
      if (count) {
        user[cheat[input]] += count;
      } else {
        user[cheat[input]] = MaxCheat;
      }

      let cheatResults = user[cheat[input]];
      await conn.reply(m.chat, `Cheat "${cheat[input]}" telah dieksekusi.\n\nJumlah cheat saat ini:\n${cheatResults}`, m)
    } else {
      await conn.reply(m.chat, 'Format jumlah tidak valid.\n\nContoh format: .cit 3 100', m)
    }
  }

  if (count && input > MaxCheat) {
    await conn.reply(m.chat, 'Lebih', m)
  }
};

handler.help = ['ngechit'];
handler.tags = ['xp','premium'];
handler.command = /^(cit|hesoyam|ngechit)$/i;
handler.private = false
handler.owner = true;

module.exports = handler