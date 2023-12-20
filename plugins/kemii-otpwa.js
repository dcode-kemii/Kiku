const moment = require("moment-timezone");
const fetch = require('node-fetch')
const axios = require('axios')
const crypto = require('crypto')
const { sizeFormatter } = require('human-readable')
const { fetchJson, sleep } = require("../lib/functions.js")

let handler = async (m, { conn, args, text, usedPrefix: _p, isPrems, command, isROwner }) => {
    const domainotp = "https://otpku.com"
    const apikeyotp = "SK1yUFwi73cx2ngopB4jGkRmAOPuZI" // APIKEY LU OTPWEB.COM
    
    var who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender
    var userz = global.db.data.users[m.sender]

    const user = global.db.data.users[m.sender]
    const __waktuh = (new Date - global.db.data.users[m.sender].otpcancel)
const _waktuh = (+ 120000 - __waktuh)
   const waktuh = clockString(_waktuh)
    
    switch (command) {
            case "saldoku": {
if (!isROwner) return m.reply('Hadeh lu siape? Owner gw?')
	let u = m.sender.split('@')[0] + "@s.whatsapp.net"
    let hai = user.saldo
//var res = await fetchJson(`${domainotp}/api?api_key=${apikeyotp}&action=balance`)
//if (res.success == false) return m.reply(res.data.messages)
//await sleep(1000)
//let ress = res.data
    await m.reply(`*GET PROFILE*
- Saldo: ${formatRupiah(hai)}`)
            }
            break
            case 'harga-otp':{
//if (!isPrems) return m.reply('Fitur ini khusus Premium')
                                let q = text
if (!q) return m.reply(`*〤  NEGARA YANG TERSEDIA*

❏ *USA*
❏ *INDO*
❏ *MALAY*

Untuk informasi selanjutnya
Silahkan ketik .harga-otp indo
`)
let kode = await fetchJson(`https://otpku.com/api/json.php?api_key=${apikeyotp}&action=services&country=${q}`)
if (kode.status == false) return m.reply(kode.data.msg)
var teks = '*Cara Order Nokos, Silahkan Ketik:*\n.order id_layanan\n\n*Contoh:* .order 14\n\n*List Layanan Kode Otp*\n\n'
let GG = 0
for (let x of kode.data){
teks +=`- ID layanan: ${x.id}\n- Name: ${x.name}\n- Harga: Rp${x.price}\n- Stock: ${x.tersedia} / tersedia\n\n`
}
m.reply(teks)
}
            break
                        case "nokos-tele":{
      //     if (new Date - global.db.data.users[m.sender].otplast > + 60000) {
                user.otplast = new Date * 1
//if (!isPrems) return m.reply('Fitur ini khusus Premium')
var res = await fetchJson(`${domainotp}/api?api_key=${apikeyotp}&action=get_number&country_id=36&service_id=wa&operator=random&order_type=istimewa`)
if (res.success == false) return m.reply(res.data.messages)
await sleep(1000)
var ress = res.data
try {
m.reply(`*〤  DETAIL ORDER*

❏ *ID* : ${ress.order_id}
❏ *NOKOS* : ${ress.number}
❏ *STATUS* : ${ress.status}
❏ *REGION* : Kanada

Untuk informasi selanjutnya
Silahkan ketik .getorder`)
} catch (e) {
    m.reply(`${res.messages}`)
    }
          //  } else m.reply(`Kamu sudah *Mengambil Otp* Saat Ini..\nMohon tunggu ${waktuh} untuk bisa *Mengambil Otp* kembali..`)
}
            break
            case "nokos-wa62":{
     //     if (new Date - global.db.data.users[m.sender].otplast > + 60000) {
       //     user.otplast = new Date * 1
//if (!isPrems) return m.reply('Fitur ini khusus Premium')
if (userz.saldo < nokosindo) {
  m.reply('Saldo User Anda Kurang!. Silahkan Melakukan Deposit Terlebih Dahulu')
  } else if(userz.saldo > nokosindo) {
var res = await fetchJson(`https://otpku.com/api/json.php?api_key=${apikeyotp}&action=order&service=716&operator=any`)
if (res.status == false) return m.reply(res.data.msg)
await sleep(1000)
var ress = res.data
try {
m.reply(`*〤  DETAIL ORDER*

❏ *ID* : ${ress.id}
❏ *SERVICE* : ${ress.service_name}
❏ *NOKOS* : ${ress.number}
❏ *REGION* : Indonesia

Untuk informasi selanjutnya
Silahkan ketik .getorder`)
    var ressa = await fetchJson(`https://otpku.com/api/json.php?api_key=${apikeyotp}&action=set_status&id=${ress.id}&status=1`)
    global.db.data.users[who].saldo -= nokosindo
    user.otpcancel = new Date * 1
} catch (e) {
    m.reply(`${res.data.msg}`)
    }
          //  } else m.reply(`Kamu sudah *Mengambil Otp* Saat Ini..\nMohon tunggu ${waktuh} untuk bisa *Mengambil Otp* kembali..`)
  }
}
            break
            case "nokos-wa-usa":{
      //     if (new Date - global.db.data.users[m.sender].otplast > + 60000) {
       //     user.otplast = new Date * 1
//if (!isPrems) return m.reply('Fitur ini khusus Premium')
if (userz.saldo < nokosusa) {
  m.reply('Saldo User Anda Kurang!. Silahkan Melakukan Deposit Terlebih Dahulu')
  } else if(userz.saldo > nokosusa) {
var res = await fetchJson(`https://otpku.com/api/json.php?api_key=${apikeyotp}&action=order&service=140&operator=any`)
if (res.status == false) return m.reply(res.data.msg)
await sleep(1000)
var ress = res.data
try {
m.reply(`*〤  DETAIL ORDER*

❏ *ID* : ${ress.id}
❏ *SERVICE NAME* : ${ress.service_name}
❏ *NOKOS* : ${ress.number}
❏ *REGION* : USA

Untuk informasi selanjutnya
Silahkan ketik .getorder`)
    var ressa = await fetchJson(`https://otpku.com/api/json.php?api_key=${apikeyotp}&action=set_status&id=${ress.id}&status=1`)
global.db.data.users[who].saldo -= nokosusa
    user.otpcancel = new Date * 1
} catch (e) {
    m.reply(`${res.data.msg}`)
    }
  }
          //  } else m.reply(`Kamu sudah *Mengambil Otp* Saat Ini..\nMohon tunggu ${waktuh} untuk bisa *Mengambil Otp* kembali..`)
}
            break
            case "nokos-wa-malay":{
      //     if (new Date - global.db.data.users[m.sender].otplast > + 60000) {
       //     user.otplast = new Date * 1
//if (!isPrems) return m.reply('Fitur ini khusus Premium')
if (userz.saldo < nokosmalay) {
  m.reply('Saldo User Anda Kurang!. Silahkan Melakukan Deposit Terlebih Dahulu')
  } else if(userz.saldo > nokosmalay) {
    var res = await fetchJson(`https://otpku.com/api/json.php?api_key=${apikeyotp}&action=order&service=313&operator=any`)
    var ressa = await fetchJson(`https://otpku.com/api/json.php?api_key=${apikeyotp}&action=set_status&id=${ress.id}&status=1`)
    if (res.status == false) return m.reply(res.data.msg)
    await sleep(1000)
    var ress = res.data
    try {
    m.reply(`*〤  DETAIL ORDER*
    
    ❏ *ID* : ${ress.id}
    ❏ *SERVICE NAME* : ${ress.service_name}
    ❏ *NOKOS* : ${ress.number}
    ❏ *REGION* : Malaysia
    
    Untuk informasi selanjutnya
    Silahkan ketik .getorder`)
global.db.data.users[who].saldo -= nokosmalay
    user.otpcancel = new Date * 1
        m.reply(`Anda menggunakan saldo sebesar Rp{nokosmalay}`)
} catch (e) {
    if (res.messages == false) return m.reply('Sedang dalam proses restock, mohon tunggu sebentar.')
    m.reply(`${res.messages}`)
    }
  }
          //  } else m.reply(`Kamu sudah *Mengambil Otp* Saat Ini..\nMohon tunggu ${waktuh} untuk bisa *Mengambil Otp* kembali..`)
}
            break
            case "order":{
     //      if (new Date - global.db.data.users[m.sender].otplast > + 60000) {
         //       user.otplast = new Date * 1
let q = text
if (!q) return m.reply(`Masukan Id Order!`)
var res = await fetchJson(`	https://otpku.com/api/json.php?api_key=${apikeyotp}&action=order&service=${q}&operator=any`)
if (res.status == false) return m.reply(res.data.msg)
await sleep(1000)
let ress = res.data
m.reply(`*〤  DETAIL ORDER*

❏ *ID* : ${ress.id}
❏ *SERVICE NAME* : ${ress.service_name}
❏ *NOKOS* : ${ress.number}
❏ *CATEGORY* : ${ress.category}

Untuk informasi selanjutnya
Silahkan ketik .getorder`)
                var ressa = await fetchJson(`https://otpku.com/api/json.php?api_key=${apikeyotp}&action=set_status&id=${ress.id}&status=1`)
       //     } else m.reply(`Kamu sudah *Mengambil Otp* Saat Ini..\nMohon tunggu ${waktuh} untuk bisa *Mengambil Otp* kembali..`)
}
            break
            case "getorder":{
//if (!isPrems) return m.reply('Fitur ini khusus Premium')
let kode = await fetchJson(`https://otpku.com/api/json.php?api_key=${apikeyotp}&action=active_order`)
if (kode.succes == false) return m.reply(kode.data.msg)
await sleep(1000)
let GG = 0
for (let x of kode.data){
teks =`*〤  STATUS ORDER*

❏ *ID* : ${x.id}
❏ *NUMBER* : ${x.number}
❏ *SMS OTP* : ${x.otp}\n\n`
}
// let teks =`*MENGAMBIL OTP*\n\n- ID layanan: ${x.order_id}\n- Nomor: ${x.number}\n- OTP: ${x.sms}\n\n*!Jika Undefined berarti tidak ada otp masuk*`
let cap = teks + '\n\n## *Jika Kosong Tidak ada otp Masuk* ##'
m.reply(cap)
}
            break
            case "cancel":{
//if (!isPrems) return reply('Fitur ini khusus owner bot')
          if (new Date - global.db.data.users[m.sender].otpcancel > + 120000) {
                let q = text
if (!q) return m.reply(`Masukan Id Order!`)
 res = await fetchJson(`https://otpku.com/api/json.php?api_key=${apikeyotp}&action=set_status&id=${q}&status=2`)
//var resa = await fetchJson(`https://otpku.com/api/json.php?api_key=${apikeyotp}&action=set_status&id=${q}&status=2`)
if (res.status == false) return m.reply(res.data.msg)
await sleep(1000)
let ress = res.data
global.db.data.users[who].saldo += nokosindo * 1
m.reply(`Saldo Di Refund Sebesar Rp${nokosindo}`)
m.reply(`*〤  CANCEL BERHASIL*

❏ *ID* : ${q}
❏ *STATUS* : Success Cancel Number
`) 
                 } else m.reply(`Kamu baru saja *Mengambil Otp*..\nMohon tunggu ${waktuh} untuk bisa *cancel Otp* kembali..`)
}
}
}
handler.command = handler.help = [
"saldoku",
"nokos-tele",
"nokos-wa62",
"nokos-wa-usa",
"nokos-wa-malay",
"harga-otp",
"order",
"cancel",
"getorder"
]
handler.tags = ['store']
handler.limit = false
handler.premium = false
module.exports = handler

function formatRupiah(number) {
  const formatter = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  });

  return formatter.format(number);
}

function clockString(ms) {
  let h = Math.floor(ms / 3600000)
  let m = Math.floor(ms / 60000) % 60
  let s = Math.floor(ms / 1000) % 60
  console.log({ms,h,m,s})
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}