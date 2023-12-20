let handler = async (m, { args }) => {
  if (args.length !== 1) {
    return conn.reply(m.chat, '• *Example :* .spin 1000', m)
  }
  let bet = parseInt(args[0])
  if (isNaN(bet) || bet < 1000) {
    throw 'Total poin yang ingin dipertaruhkan harus lebih dari atau sama dengan 1000!'
  }

  let message = ''
  let poinAwal = global.db.data.users[m.sender].poin || 0
  if (poinAwal < bet) {
    throw 'Maaf, kamu tidak memiliki cukup poin untuk memainkan game spin.'
  }
  let poinAkhir = poinAwal - bet
  let spinResult = [
    { value: 0, sign: '-' },
    { value: 0, sign: '-' },
    { value: 0, sign: '-' }
  ]

  let winProbabilities = [
    { value: 80, sign: '+' },
    { value: 80, sign: '+' },
    { value: 20, sign: '+' }
  ]

  for (let i = 0; i < spinResult.length; i++) {
    let rand = Math.floor(Math.random() * 100) + 1
    let winProb = winProbabilities[i].value
    let sign = winProbabilities[i].sign
    if (rand <= winProb) {

      let winAmount = Math.floor(Math.random() * 500000) + 100000
      if (i === 2) {

        winAmount = Math.floor(Math.random() * 10000000000) + 1000000000
      }
      poinAkhir += winAmount
      spinResult[i].value = winAmount
      spinResult[i].sign = '+'
    } else {

      let loseAmount = Math.floor(Math.random() * 5000) + 1000
      poinAkhir -= loseAmount
      spinResult[i].value = loseAmount
    }
  }

  if (poinAkhir < 0) {
    poinAkhir = 0
  }

  message += 'Hasil Spin Kamu Adalah\n\n'
  for (let i = 0; i < spinResult.length; i++) {
    let value = spinResult[i].value
    let sign = spinResult[i].sign
    message += `    ${sign} ${value.toString().padStart(7)}\n`
  }
  message += '\n• Total : ' + (poinAkhir - poinAwal).toString()
  message += '\n\nPoin kamu sekarang: ' + poinAkhir.toString()

  global.db.data.users[m.sender].poin = poinAkhir
  global.db.write()

  await new Promise(resolve => setTimeout(resolve, 3000))

  m.reply(message)
}

handler.help = ['spin *<amount>*']
handler.tags = ['game']
handler.command = /^spin$/i
handler.register = true
handler.limit = true

module.exports = handler