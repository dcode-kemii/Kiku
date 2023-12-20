const fs = require('fs');
const archiver = require('archiver');
const path = require('path');

let handler = async (m, { conn }) => {
  conn.sendMessage(m.chat, { react: { text: '🕐', key: m.key }})
  let backupName = `backup_${new Date().toISOString().replace(/:/g, '-')}.zip`
  let output = fs.createWriteStream(backupName);
  let archive = archiver('zip', { zlib: { level: 9 } });

  output.on('close', function () {
    let caption = `Below is the bot code backup file:\nName file: ${backupName}\nSize file: ${(archive.pointer() / 1024 / 1024).toFixed(2)} MB`
    conn.sendFile(m.chat, backupName, backupName, caption, m)
  });

  archive.on('warning', function (err) {
    if (err.code === 'ENOENT') {
      console.warn(err);
    } else {
      throw err;
    }
  });

  archive.on('error', function (err) {
    throw err;
  });

  archive.pipe(output);
  archive.glob('**/*', {
    cwd: path.resolve(__dirname, '../'),
    ignore: ['node_modules/**', 'kemii.data.json/', 'tmp/**', '.npm/**', backupName]
  });
  archive.finalize();
}

handler.help = ['backup']
handler.tags = ['owner']
handler.command = /^backup$/i

handler.owner = true

module.exports = handler