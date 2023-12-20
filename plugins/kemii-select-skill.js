let handler = async (m, { conn, usedPrefix, text, command}) => {

var user = global.db.data.users[m.sender]

global.skill = ["swordmaster", "necromancer", "witch", "Archer", "magicswordmaster", "thief", "shadow"]

var bintang = {
"satu": "⭐",
"dua": "⭐⭐",
"tiga": "⭐⭐⭐",
"empat": "⭐⭐⭐⭐",
"lima": "⭐⭐⭐⭐⭐",
"Enam": "⭐⭐⭐⭐⭐⭐"
}//star how good is the skill
   
   let skil = text.trim().toLowerCase() // to filter text
     
   if (!skill.includes(skil)) return conn.reply(m.chat, `Select *skill🃏* what do you want/pilih skill apa yg kamu inginkan:\n\n${skill.map(skil => `› ${skil}`, m).join('\n')}

     How To use/Cara menggunakan:
     ${usedPrefix + command} <nameskill>
     
     Example/Contoh:
     ${usedPrefix + command} necromancer
     `

    if (user.skill == "") {
    user.skill = skil
    conn.reply(m.chat, `Anda telah memilih Skill ${skil}`, m)
    } else if (user.skill) {
    conn.reply(m.chat, `Anda Sudah Punya skill ${user.skill} Tidak bisa diganti`, m)
   }

}

handler.help = ['selectskill *<text>*']
handler.tags = ['rpg']
handler.command = /^(slectskill|selectskill)$/i

module.exports = handler;
