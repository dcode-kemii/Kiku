let { MessageType } = require('@adiwajshing/baileys')

let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
  let type = (args[0] || '').toLowerCase()
  let _type = (args[0] || '').toLowerCase()
  let user = global.db.data.users[m.sender]
  global.db.data.users[m.sender].pickaxe = global.db.data.users[m.sender].pickaxe || 0
  global.db.data.users[m.sender].sword = global.db.data.users[m.sender].sword || 0
  global.db.data.users[m.sender].fishingrod = global.db.data.users[m.sender].fishingrod || 0
  let botol = global.wm

let lgocraft = `
*${htki} Repair ${htka}*`

  let caption = `
▧ Pickaxe 
▧ Sword 
▧ Fishingrod 

${htki} Pickaxe ${htka}
〉 5 Kayu
〉 3 Batu
〉 3 Iron
〉 1 Diamond

${htki} Sword ${htka}
〉 5 Kayu
〉 9 Iron
〉 1 Diamond

${htki} Armor ${htka}
〉 15 Iron
〉 3 Diamond
`
const sections = [
   {
	title: "REPAIR A TOOLS",
	rows: [
	    {title: "Sword", rowId: ".repair sword", description: "Repair Sword"},
	    {title: "Pickaxe", rowId: ".repair pickaxe", description: "Repair Pickaxe"},
	    {title: "Armor", rowId: ".repair armor", description: "Repair Armor"},
	]
    },
]

const listMessage = {
  text: caption,
  footer: wm,
  title: lgocraft,
  buttonText: "Repair",
  sections
}

  try {
    if (/repair/i.test(command)) {
      const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
        switch (type) {
          case 'pickaxe':
          if (user.pickaxedurability > 99) return m.reply('Tools ini belum memiliki kerusakan')
          if (user.pickaxe == 0) return m.reply('Kamu belum memilik ini')
            if(user.diamond < 1 || user.rock < 3 || user.wood < 5 || user.iron < 3 ) return m.reply(`Barang tidak cukup!`)
             user.rock -= 3
             user.wood -= 5
             user.iron -= 3
             user.diamond -= 1
             user.pickaxedurability = 100
            m.reply("Sukses memperbaiki!")
            break
          case 'sword':
          if (user.sworddurability > 99) return m.reply('Tools ini belum memiliki kerusakan')
          if (user.sword == 0) return m.reply('Kamu belum memilik ini')
            if(user.diamond < 1 || user.wood < 5 || user.iron < 9 ) return m.reply(`Barang tidak cukup!`)
             user.wood -= 5
             user.iron -= 9
             user.diamond -= 1
             user.sworddurability = 100
            m.reply("Sukses memperbaiki!")
            break
            case 'armor':
          if (user.armordurability > 99) return m.reply('Tools ini belum memiliki kerusakan')
          if (user.armor == 0) return m.reply('Kamu belum memilik ini')
            if(user.diamond < 3 || user.iron < 15 ) return m.reply(`Barang tidak cukup!`)
             user.iron -= 15
             user.diamond -= 3
             user.armordurability = 100
            m.reply("Sukses memperbaiki!")
            break
          default:
            return await conn.sendMessage(m.chat, listMessage)
        }
    } else if (/enchant|enchan/i.test(command)) {
      const count = args[2] && args[2].length > 0 ? Math.min(99999999, Math.max(parseInt(args[2]), 1)) : !args[2] || args.length < 4 ? 1 :Math.min(1, count)
      switch (_type) {
        case 't':
          break
        case '':
          break

        default:
          return conn.sendButton( m.chat, caption, wm, null, [['Menu', '.menu']], m)
      }
    }
  } catch (err) {
    m.reply("Error\n\n\n" + err.stack)
  }
}

handler.help = ['repair']
handler.tags = ['rpg']
handler.command = /^(repair)/i

module.exports = handler