let fs = require('fs') 
let chalk = require('chalk')
let moment = require('moment-timezone')

// Waktu
let wibh = moment.tz('Asia/Jakarta').format('HH')
    let wibm = moment.tz('Asia/Jakarta').format('mm')
    let wibs = moment.tz('Asia/Jakarta').format('ss')
    let wktuwib = `${wibh}:${wibm}:${wibs}`

// Hari Tanggal
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00
    // Offset  420 is  7.00
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })

// Owner
global.owner = [
  ['-'],
  ['-'],
  ['628816609112', 'Takashi Kemii', 'contact@kemii.my.id', true]
] // Put your number here
global.mods = ['-'] // Moderator
global.prems = ['-'] // Premium
global.rose = '-';
global.xyro = '-';
global.btc = '-';
global.xzn = '-';
global.lolkey = '-';
global.yanz = '-';
global.zein = '-',
global.APIs = {
    // API Prefix
    // name: 'https://website'
    xteam: 'https://api.xteam.xyz',
    lol: 'https://api.lolhuman.xyz',
    males: 'https://malesin.xyz',
    neoxr: 'https://api.neoxr.eu',
    xyro: 'https://api.xyroinee.xyz',
    btc: 'https://api.betabotz.org',
    xfarr: 'https://api.xfarr.com',
    dzx: 'https://api.dhamzxploit.my.id',
    zein: 'https://api.zahwazein.xyz',
    rose: 'https://api.itsrose.life',
    popcat: 'https://api.popcat.xyz',
    xzn: 'https://skizo.tech',
    saipul: 'https://saipulanuar.cf',
}
global.APIKeys = {
    // APIKey Here
    // 'https://website': 'apikey'
    'https://api.zahwazein.xyz': '-',
    'https://api.xteam.xyz': '-',
    'https://api.xyroinee.xyz': '-',
    'https://api.neoxr.eu': '-',
    'https://api.xfarr.com': '-',
    'https://api.zahwazein.xyz': '-',
    'https://api.betabotz.org': '-',
    'https://api.lolhuman.xyz': '-',
    'https://api.itsrose.life': '-',
    'https://skizo.tech': '-',
}

process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0

const spack = fs.readFileSync("lib/exif.json")
const stickerpack = JSON.parse(spack)
if (stickerpack.spackname == '') {
  var sticker_name = 'Kiku - Wabot'
  var sticker_author = 'Kemii Elisabeth'
} else {
  var sticker_name = 'Kiku - Wabot'
  var sticker_author = 'Kemii Elisabeth'
}

const file_exif = "lib/exif.json"
fs.watchFile(file_exif, () => {
  fs.unwatchFile(file_exif)
  console.log(chalk.redBright("Update 'exif.json'"))
  delete require.cache[file_exif]
  require('./lib/exif.json')
})

// Document
global.minety = pickRandom(['application/msword', 'application/vnd.ms-excel', 'application/vnd.ms-powerpoint', 'application/vnd.openxmlformats-officedocument.presentationml.presentation', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'])
global.kiku = 'application/vnd.android.package-archive'

// Database
global.version = '5.0.3'
global.sessionName = 'salsa'
global.gcbot = 'https://chat.whatsapp.com/FMzkNwRU9Kg2OG2hq4F0M0'
global.instagram = 'https://instagram.com/kemii.learning'
global.namebot = '© Kiku-Wabot v5.0.3 (Public Bot)'
global.thumb = 'https://telegra.ph/file/7b5416e93b4423845762d.jpg'
global.thumbnail = 'https://telegra.ph/file/7b5416e93b4423845762d.jpg'
global.myfile = fs.readFileSync(`./media/xfile.pdf`)
global.thumb2 = fs.readFileSync('./media/thumbnail.mp4')
global.qris = 'https://telegra.ph/file/bcb93fafb22f139ff1512.jpg'
global.email = 'kiku.wabot@gmail.com'
global.creator = "628816609112@s.whatsapp.net"
global.nomorbot = '-'
global.nomorown = '628816609112'
global.pairingNumber = ''

// Harga Nokos
global.nokosindo = '7000'
global.nokosusa = '8000'
global.nokosmalay = '12000'

// Panel
global.domain = '-' // Domain Web
global.apikey = 'ptla_sp05YjSSsGECwqLcgyDRn2h7lBXirq1r2paxbiVQFE2' // Key PTLA
global.c_apikey = 'ptlc_BQOrpge2VIepKGtZl5ng0qpgqguVst1A8KpKEaDre7s' // Key PTLC
global.eggs = '15'
global.locs = '1'

// Sosial Media
global.sig = '-'
global.syt = '-'
global.sgh = '-'
global.sgc = 'https://chat.whatsapp.com/FMzkNwRU9Kg2OG2hq4F0M0'
global.swa = 'https://wa.me/263734408604'
global.swb = '-' // Link Discord
global.snh = 'https://nhentai.net/g/365296/' // Link nhentai

// Pembayaran
global.pdana = '~Not Found~'
global.povo = '~Not Found~'
global.pgopay = '~Not Found~'
global.pulsa = '~Not Found~'
global.pulsa2 = '~Not Found~'
global.psaweria = '~Not Found~'
global.ptrakteer = '~Not Found~'
global.psbuzz = '~Not Found~'

// Fake Size
global.fsizedoc = '99999999999999' // default 10TB
global.fpagedoc = '999'

global.useMulti = true
global.autoread = true

// Watermark
global.packname = 'Kiku - Wabot'
global.author = '// Elisabeth'
global.wm = 'Kiku - Wabot'
global.wm2 = 'Salsa Javanese'
global.bottime = `Time: ${wktuwib}`
global.botdate = `Date: ${week} ${date}\nTime: ${wktuwib}`
global.titlebot = `${global.wm}`
global.danied = 'A K S E S  K A M U  D I  T O L A K!!'
global.done = '```Success...\nDont forget to donate```'
global.packname = 'Kiku - Wabot'
global.author = 'Takashi Kemii'
global.nameown = 'KemiiSalsabila'
global.wait = 'Wait a moment... '

// Tampilan
global.htki =  '⬣───「' // Hiasan kiri
global.htka = '」───⬣' // Hiasan kanan
global.htjava = '❃' // Hiasan
global.sa = '╭─'
global.gx = '│✇'
global.gy = '│•'
global.gz = '│'
global.sb = '╰────࿐'
global.kki = '「'
global.kka = '」'

global.multiplier = 1000 // The higher, The harder levelup

global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      exp: '✉️',
      money: '💵',
      potion: '🥤',
      diamond: '💎',
      common: '📦',
      uncommon: '🎁',
      mythic: '🗳️',
      legendary: '🗃️',
      pet: '🎁',
      trash: '🗑',
      armor: '🥼',
      sword: '⚔️',
      wood: '🪵',
      rock: '🪨',
      string: '🕸️',
      horse: '🐎',
      cat: '🐈' ,
      dog: '🐕',
      fox: '🦊',
      petFood: '🍖',
      iron: '⛓️',
      gold: '👑',
      emerald: '💚'
    }
    let results = Object.keys(emot).map(v =>vv [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})//