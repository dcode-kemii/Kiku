let handler = async ( m, { conn, args, command}) => {
  conn.duel = conn.duel ? conn.duel : []
  args.length != 0 ? conn.duel.push(m.mentionedJid ? m.mentionedJid[0] : (args[0].replace(/[@ .+-]/g, '').replace(' ', '') + '@s.whatsapp.net')) : ""
  let who = conn.duel[0]
  //let kita = conn.duel[m.sender]
  let enemy = global.db.data.users[who]
  let user = global.db.data.users[m.sender]
  let count = args[1] && args[1].length > 0 ? Math.min(100, Math.max(parseInt(args[1]), 1)) : Math.min(1)
  let nama = conn.getName(m.sender)

  let randomaku = `${Math.floor(Math.random() * 101)}`.trim()
  let randomkamu = `${Math.floor(Math.random() * 81)}`.trim()
  let Aku = (randomaku * 1)
  let Kamu = (randomkamu * 1)

  let __timers = (new Date - user.lastduel)
  let _timers = (300000 - __timers) 
  let timers = clockString(_timers)

   try {
     if (/duel/.test(command)) {
       if (!who) return conn.reply(m.chat, 'Tag salah satu, yang ingin diajak Duel!', m)

     let pler = `@${m.sender.replace(/@.+/, '')} mengajak duel ${args[0]}\n\nPilih Y atau N`
     let mentionedJid = [m.sender]

       if (new Date - user.lastduel > 300000) {
      m.reply(pler)

      } else conn.reply(m.chat, `Kamu sudah bertarung!\n\nTunggu hingga *${timers}*`, m)
     }

     if (/Y/.test(command)) {
     let kenal = !who.includes(m.sender)
     if(kenal) return conn.reply(m.chat, 'Lu siapa?\nkok ikut kut mau duel', m)
     user.lastduel = new Date * 1
     if (Aku > Kamu) {
       user.money -= 900
       enemy.money += 900
       delete conn.duel[m.sender]
       conn.reply(m.chat, `@${who.split("@")[0]} *Menang* Gelud\n*Hadiah:*\n900 Money buat beli gorengan`.trim(), m)
     } else if (Aku < Kamu) {
       user.money += 450
       enemy.money -= 450
       delete conn.duel[m.sender]
       conn.reply(m.chat, `@${who.split("@")[0]} *Kalah* Gelud\n*Hadiah:*\n450 money lumayan buat beli Limit`.trim(), m)
     } else {
       user.money += 250
       enemy.money += 250
       delete conn.duel[m.sender]
       conn.reply(m.chat, `@${who.split("@")[0]}\n *Seri*\nmasing-masing 250 Money`.trim(), m)
     }
   }
   if (/N/.test(command)) {
   let kenal = !who.includes(m.sender)
   if(kenal) return conn.reply(m.chat, 'Tidak bisa mengganggu orang Pertarungan!', m)
    conn.reply(m.chat, `@${who.split("@")[0]} membatalkan Pertarungan!`, m)
    delete conn.duel[m.sender]
   }
 } catch (e) {
   return conn.reply(m.chat, `${e}`, m)
 }
}

handler.help = ['duel *<@user>*']
handler.tags = ['rpg']
handler.command = /^(duel|dya|dno)/i
handler.group = true

module.exports = handler 

function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}
function clockString(ms) {
  let h = Math.floor(ms / 3600000)
  let m = Math.floor(ms / 60000) % 60
  let s = Math.floor(ms / 1000) % 60
  console.log({ms,h,m,s})
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}