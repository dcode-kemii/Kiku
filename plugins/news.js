let { FajarNews, BBCNews, metroNews, CNNNews, iNews, KumparanNews, TribunNews, DailyNews, DetikNews, OkezoneNews, CNBCNews, KompasNews, SindoNews, TempoNews, IndozoneNews, AntaraNews, RepublikaNews, VivaNews, KontanNews, MerdekaNews, KomikuSearch, AniPlanetSearch, KomikFoxSearch, KomikStationSearch, MangakuSearch, KiryuuSearch, KissMangaSearch, KlikMangaSearch, PalingMurah, LayarKaca21, AminoApps, Mangatoon, WAModsSearch, Emojis, CoronaInfo, JalanTikusMeme,  Cerpen, Quotes, Couples, Darkjokes } = require("dhn-api")
let handler = async (m, { conn, usedPrefix, command }) => {
  try {
    switch (command) {
    case 'cnn-news': {
            let res = await CNNNews()
            let no = 0
            let teks = "=============="
            for (let i of res) {
            no += 1
            teks += `\n│⭔ ${no.toString()} │⭔\n`
            teks += `Berita: ${i.berita}\n`
            teks += `Link: ${i.berita_url}\n`
            }
            teks += "=============="
    conn.sendMessage(m.chat, { text: teks }, { quoted: m });
        break;
      } 
    case 'sindo-news': {    
    let res = await SindoNews()
    let no = 0
    let teks = "=============="
    for (let i of res) {
    no += 1
    teks += `\n│⭔ ${no.toString()} │⭔\n`
    teks += `Berita: ${i.berita}\n`
    teks += `Jenis: ${i.berita_jenis}\n`
    teks += `Link: ${i.berita_url}\n`
        }
    teks += "=============="
    conn.sendMessage(m.chat, { text: teks }, { quoted: m });
        break;
      }
      case 'fajar-news': {
        let res = await FajarNews();
        let no = 0;
        let teks = "=============\n";
        
        for (let i of res) {
          no += 1;
          teks += `=============\n`;
          teks += `│⭔ ${no.toString()} │⭔\n`;
          teks += `Berita: ${i.berita}\n`;
          teks += `Upload: ${i.berita_diupload}\n`;
          teks += `Jenis: ${i.berita_jenis}\n`;
          teks += `Link: ${i.berita_url}\n`;
        }
        
        teks += "=============";
        conn.sendMessage(m.chat, { text: teks }, { quoted: m });
        break;
      }
      case 'jalantikus-meme': {
        let res = await JalanTikusMeme();
        let teks = "==============\n";
        teks += `Source: ${res}\n`;
        teks += "==============";
        conn.sendMessage(m.chat, { image: { url: res }, caption: teks }, { quoted: m });
        break;
      }
      case 'merdeka-news': {
        let res = await MerdekaNews();
        let no = 0;
        let teks = "==============\n";
        
        for (let i of res) {
          no += 1;
          teks += `│⭔ ${no.toString()} │⭔\n`;
          teks += `Berita: ${i.berita}\n`;
          teks += `Upload: ${i.berita_diupload}\n`;
          teks += `Link: ${i.berita_url}\n\n`;
        }
        
        teks += "==============";
        conn.sendMessage(m.chat, { image: { url: res[0].berita_thumb }, caption: teks }, { quoted: m });
        break;
      }
            case 'cnbc-news': {
            let res = await CNBCNews()
            let no = 0
            let teks = "=============="
            for (let i of res) {
            no += 1
            teks += `\n│⭔ ${no.toString()} │⭔\n`
            teks += `Berita: ${i.berita}\n`
            teks += `Upload: ${i.berita_diupload}\n`
            teks += `Link: ${i.berita_url}\n`
            }
            teks += "=============="
            conn.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : m })
              break;
            }
           case 'tribun-news': {  
        let res = await TribunNews()
        let no = 0
        let teks = "=============="
        for (let i of res) {
        no += 1
        teks += `\n│⭔ ${no.toString()} │⭔\n`
        teks += `Berita: ${i.berita}\n`
        teks += `Upload: ${i.berita_diupload}\n`
        teks += `Jenis: ${i.berita_jenis}\n`
        teks += `Link: ${i.berita_url}\n`
        }
        teks += "=============="
        conn.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : m })
              break;
            }
        case 'indozone-news': {
        let res = await IndozoneNews()
        let no = 0
        let teks = "=============="
        for (let i of res) {
        no += 1
        teks += `\n│⭔ ${no.toString()} │⭔\n`
        teks += `Berita: ${i.berita}\n`
        teks += `Upload: ${i.berita_diupload}\n`
        teks += `Jenis: ${i.berita_jenis}\n`
        teks += `Link: ${i.berita_url}\n`
        }
        teks += "=============="
        conn.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : m })
              break;
            }
        case 'detik-news': {
        let res = await DetikNews()
        let no = 0
        let teks = "=============="
        for (let i of res) {
        no += 1
        teks += `\n│⭔ ${no.toString()} │⭔\n`
        teks += `Berita: ${i.berita}\n`
        teks += `Upload: ${i.berita_diupload}\n`
        teks += `Link: ${i.berita_url}\n`
        }
        teks += "=============="
        conn.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : m })
              break;
            }
        case 'daily-news': {
        let res = await DailyNews()
        let no = 0
        let teks = "=============="
        for (let i of res) {
        no += 1
        teks += `\n│⭔ ${no.toString()} │⭔\n`
        teks += `Berita: ${i.berita}\n`
        teks += `Link: ${i.berita_url}\n`
        }
        teks += "=============="
        conn.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : m })
              break;
            }
        case 'okezone-news': {
        let res = await OkezoneNews()
        let no = 0
        let teks = "=============="
        for (let i of res) {
        no += 1
        teks += `\n│⭔ ${no.toString()} │⭔\n`
        teks += `Berita: ${i.berita}\n`
        teks += `Upload: ${i.berita_diupload}\n`
        teks += `Link: ${i.berita_url}\n`
        }
        teks += "=============="
        conn.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : m })
              break;
            }
        case 'tempo-news': {
        let res = await TempoNews()
        let no = 0
        let teks = "=============="
        for (let i of res) {
        no += 1
        teks += `\n│⭔ ${no.toString()} │⭔\n`
        teks += `Berita: ${i.berita}\n`
        teks += `Upload: ${i.berita_diupload}\n`
        teks += `Link: ${i.berita_url}\n`
        }
        teks += "=============="
        conn.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : m })
              break;
            }
        case 'antara-news': {
        let res = await AntaraNews()
        let no = 0
        let teks = "=============="
        for (let i of res) {
        no += 1
        teks += `\n│⭔ ${no.toString()} │⭔\n`
        teks += `Berita: ${i.berita}\n`
        teks += `Upload: ${i.berita_diupload}\n`
        teks += `Jenis: ${i.berita_jenis}\n`
        teks += `Link: ${i.berita_url}\n`
        }
        teks += "=============="
        conn.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : m })
        break
        }
      case 'kontan-news': {
        let res = await KontanNews();
        let no = 0;
        let teks = "==============\n";
        
        for (let i of res) {
          no += 1;
          teks += `│⭔ ${no.toString()} │⭔\n`;
          teks += `Berita: ${i.berita}\n`;
          teks += `Jenis: ${i.berita_jenis}\n`;
          teks += `Upload: ${i.berita_diupload}\n`;
          teks += `Link: ${i.berita_url}\n\n`;
        }
        
        teks += "==============";
        conn.sendMessage(m.chat, { image: { url: res[0].berita_thumb }, caption: teks }, { quoted: m });
        break;
      }
    }
  } catch (e) {
    console.error(e);
    m.reply("Terjadi kesalahan saat mengambil data.");
  }
};

handler.command = handler.help = ['jalantikus-meme',
'merdeka-news',
'kontan-news',
'cnbc-news',
'tribun-news',
'indozone-news',
'detik-news',
'daily-news',
'inews-news',
'okezone-news',
'sindo-news',
'tempo-news',
'antara-news',
'cnn-news',
'fajar-news']
handler.tags = ['internet']
module.exports = handler