let axios = require('axios')
let cheerio = require('cheerio')
let handler = async (m, { conn, text, command, usedPrefix }) => {
    if (!text) return conn.reply(m.chat, `• *Example :* ${usedPrefix + command} Poco x3 pro`, m)
    conn.sendMessage(m.chat, {
    react: {
      text: '🕒',
      key: m.key,
    }
  });
    if (!/https:\/\/carisinyal.com/i.test(text)) {
        let res = await spek(text)
        let cap = res.map((v, i) => {
            return `
_*${i + 1}. ${v.title}*_
❃ Harga: ${v.harga}
❃ Link: ${v.link}
`.trim()
        }).join('\n\n')
        m.reply(cap)
    } else {
        let { fitur, spek, img } = await speklengkap(text)
        let cap1 = fitur.map(v => {
            return v.desc
        }).join('\n\n')
        let cap2 = spek.map(v => {
            return `
_*${v.name} :*_
${v.fitur}
`.trim()
        }).join('\n\n')
        conn.sendMessage(m.chat, { image: { url: img }, fileName: 'fotohp.jpg', mimetype: 'image/jpeg', caption: `_*Fitur Unggulan:*_ \n\n${cap1}\n\n_*Spesifikasi Lengkap:*_\n\n${cap2}` }, { quoted: m })
    }
}
handler.help = ['spesifikasi *<text>*']
handler.tags = ['internet']
handler.command = /^spesifikasi|spek/i

module.exports = handler

async function spek(query) {
    return new Promise((resolve, reject) => {
    let result = axios.get('https://carisinyal.com/hp/?_sf_s=' + query).then(v => {
        let $ = cheerio.load(v.data)
        let list = $("div.oxy-posts > div.oxy-post")
        let index = []
        list.each((v, i) => {
            let title = $(i).find("a.oxy-post-title").text()
            let harga = $(i).find("div.harga").text()
            let link = $(i).find("a.oxy-post-image").attr('href')
            let res = {
                title: title,
                harga: harga,
                link: link
            }
            index.push(res)
        })
        return index
    })
    resolve(result)
    })
}

async function speklengkap(link) {
    return new Promise((resolve, reject) => {
    let result = axios.get(link).then(v => {
        let $ = cheerio.load(v.data)
        let fitur = []
        let spesifikasi = []
        let list = $("div#_dynamic_list-777-114924 > div.ct-div-block")
        list.each((v, i) => {
            let fitur_unggulan = $(i).find("span.ct-span").text()
            fitur.push({
                desc: fitur_unggulan
            })
        })
        let spek = $("div.ct-code-block > div > table.box-info")
        spek.each((v, i) => {
            let name = $(i).find("tr.box-baris > td.kolom-satu").text().trim()
            let fitur = $(i).find("tr.box-baris > td.kolom-dua").text().trim()
            spesifikasi.push({
                name: name,
                fitur: fitur
            })
        })
        let img = $("meta[name='twitter:image']").attr('content')
        return {
            fitur: fitur,
            spek: spesifikasi,
            img: img
        }
    })
    resolve(result)
    })
}