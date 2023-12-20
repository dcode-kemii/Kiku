let ytdl = require('ytdl-core')
let fs = require('fs')
let { pipeline } = require('stream')
let { promisify } = require('util')
let os = require('os')
let streamPipeline = promisify(pipeline);
let handler = async (m, { conn, command, text, usedPrefix }) => {
  if (!text) return conn.reply(m.chat, `• *Example :* .${command} https://www.youtube.com/xxxxxxx`, m)
  conn.sendMessage(m.chat, { react: { text: '🕒', key: m.key }})
  let videoUrl = text; // Gunakan URL video YouTube yang diberikan sebagai input
  let videoInfo = await ytdl.getInfo(videoUrl);
  let { videoDetails } = videoInfo;
  let { title, thumbnails, lengthSeconds, viewCount, uploadDate } = videoDetails;
  let thumbnail = thumbnails[0].url; // Gunakan thumbnail pertama
  let audioStream = ytdl(videoUrl, {
    filter: 'audioonly',
    quality: 'highestaudio',
  });
  let tmpDir = os.tmpdir();
  let writableStream = fs.createWriteStream(`${tmpDir}/${title}.mp3`);
  await streamPipeline(audioStream, writableStream);
  let doc = {
    audio: {
      url: `${tmpDir}/${title}.mp3`
    },
    mimetype: 'audio/mp4',
    fileName: `${title}`,
    contextInfo: {
      externalAdReply: {
        showAdAttribution: true,
        mediaType: 2,
        mediaUrl: videoUrl,
        title: namebot,
        body: 'Kemii',
        thumbnail: await (await conn.getFile(thumbnail)).data
      }
    }
  };
  await conn.sendMessage(m.chat, doc, { quoted: m });
  fs.unlink(`${tmpDir}/${title}.mp3`, (err) => {
    if (err) {
      console.error(`Failed to delete audio file: ${err}`);
    } else {
      console.log(`Deleted audio file: ${tmpDir}/${title}.mp3`);
    }
  });
};

handler.tags = ['downloader']
handler.help = ['ytmp3 *<url>*']
handler.command = /^yta|ytmp3|youtubemp3$/i
module.exports = handler