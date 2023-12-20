let handler = async (m, { conn, args }) => {
  let list = Object.entries(global.db.data.users)
  let datas = !args || !args[0] ? 1000 : isNumber(args[0]) ? parseInt(args[0]) : 1000
  datas = Math.max(1, datas)
  list.map(([user, data], i) => (Number(data.limit, data.money, data.balance = datas)))
  conn.reply(m.chat, `Berhasil di reset ${datas}/user`, m)
}

handler.command = handler.help = ['resetdata']
handler.tags = ['owner']
handler.owner = true

module.exports = handler

function isNumber(x = 0) {
 x = parseInt(x)
 return !isNaN(x) && typeof x == 'number'
}