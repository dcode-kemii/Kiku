let fetch = require('node-fetch')

let handler = async (m, { text, args }) => {
  if (!args[0]) {
    m.reply('• *Example :* .simi halo');
    return;
  }

  const response = await fetch('https://api.simsimi.vn/v1/simtalk', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: new URLSearchParams({
        text: text,
        lc: 'id',
        key: ''
      })
      })
  const simi = await response.json()
  await m.reply(simi.message)
};

handler.help = ['simi', 'simsimi', 'simih'].map(v => v + ' *<teks>*')
handler.tags = ['fun']
handler.command = /^((sim)?simi|simih)$/i

module.exports = handler
