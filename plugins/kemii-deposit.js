let fetch = require('node-fetch')
let fs = require('fs')
let handler = async (m, { conn, args, text }) => {
    if (!text) return conn.reply(m.chat, `• *Example :* .deposit 5000`, m)
    if (text < 5000) return conn.reply(m.chat, 'Minimal Deposit 5000', m)
    const prem = JSON.parse(fs.readFileSync("./lib/deposit.json"))
    let qris = `${global.qris}` // ISI QRIS LU
  let pp = await conn.profilePictureUrl(m.sender, 'image').catch(_ => 'https://telegra.ph/file/a2ae6cbfa40f6eeea0cf1.jpg')
  let user = global.db.data.users[m.sender]
  let thm = 'https://telegra.ph/file/5e52b6e8ab1ed136705ad.jpg'
  let admin = `${Math.floor(Math.random() * 500)}`
  let id = `${Math.floor(Math.random() * 99999)}`
  let tg = `${m.sender.split('@')[0]}@s.whatsapp.net`
  //let kata = `${pickRandom('1291912', '12177819', '928192', '12919929', '12729890', '7625410', '272829', '7524136', '2712514', '121872756' )}`
  let cpt = `*ADA TRANSAKSI MASUK*\n*SEJUMLAH Rp${toRupiah(text)} DARI ${m.sender.split('@')[0]}*\n\nDENGAN ID DEPOSIT : ${id}\n*Tunggu sampai dia tf hihi*`
  let capt = `*───◆ TRANSAKSI DIBUAT ◆───*
❏ *NOMINAL* : Rp.${toRupiah(text)} + ${admin}
❏ *PAYMENT* : QRIS
❏ *SISTEM* : DIRECT
❏ *ID TRANSAKSI* : ${id}

*PERINGATANN!!*
JIKA DEPOSIT HANYA ${toRupiah(text)} tanpa biaya admin maka tidak akan di konfirmasikan oleh sistem
*DIMOHON JIKA SUDAH TOP UP SALDO ATAU TRANSFER JANGAN LUPA KONFIRMASI*
*BERIKUT CARA KONFIRMASI BUKTI :  .bukti ${id}*`
    	prem.push(id)
  fs.writeFileSync("./lib/deposit.json", JSON.stringify(prem))
 // global.db.data.users[m.sender].banteng += id
    await conn.sendFile(m.chat, qris, 'order.jpg', `${capt}`, m)
    return conn.sendFile(nomorown + '@s.whatsapp.net', thm, 'order.jpg', `${cpt}`, m)
}
handler.help = ['deposit *<amount>*']
handler.tags = ['store']

handler.command = /^(deposit|depo)$/i
handler.premium = false
handler.register = false
handler.limit = 5
module.exports = handler

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}
function toRupiah(angka) {
var saldo = '';
var angkarev = angka.toString().split('').reverse().join('');
for (var i = 0; i < angkarev.length; i++)
if (i % 3 == 0) saldo += angkarev.substr(i, 3) + '.';
return '' + saldo.split('', saldo.length - 1).reverse().join('');
}