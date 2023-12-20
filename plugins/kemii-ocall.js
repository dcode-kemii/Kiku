const axios = require('axios')

let handler = async (m, {text, args}) => {

if (!args[0]) throw conn.reply(m.chat, `• *Example :* .ocall ${nomorown}`, m)
				let nosend = "+" + text.split("|")[0].replace(/[^0-9]/g, '')
				axios.post('https://magneto.api.halodoc.com/api/v1/users/authentication/otp/requests', {
					'phone_number': `${nosend}`,
					'channel': 'voice'
				}, {
					headers: {
						'authority': 'magneto.api.halodoc.com',
						'accept-language': 'id,en;q=0.9,en-GB;q=0.8,en-US;q=0.7',
						'cookie': '_gcl_au=1.1.1860823839.1661903409; _ga=GA1.2.508329863.1661903409; afUserId=52293775-f4c9-4ce2-9002-5137c5a1ed24-p; XSRF-TOKEN=12D59ACD8AA0B88A7ACE05BB574FAF8955D23DBA28E8EE54F30BCB106413A89C1752BA30DC063940ED30A599C055CC810636; _gid=GA1.2.798137486.1664887110; ab.storage.deviceId.1cc23a4b-a089-4f67-acbf-d4683ecd0ae7=%7B%22g%22%3A%2218bb4559-2170-9c14-ddcd-2dc80d13c3e3%22%2C%22c%22%3A1656491802961%2C%22l%22%3A1664887110254%7D; amp_394863=nZm2vDUbDAvSia6NQPaGum...1gehg2efd.1gehg3c19.f.0.f; ab.storage.sessionId.1cc23a4b-a089-4f67-acbf-d4683ecd0ae7=%7B%22g%22%3A%22f1b09ad8-a7d9-16f3-eb99-a97ba52677d2%22%2C%22e%22%3A1664888940400%2C%22c%22%3A1664887110252%2C%22l%22%3A1664887140400%7D',
						'origin': 'https://www.halodoc.com',
						'sec-ch-ua': '"Microsoft Edge";v="105", "Not)A;Brand";v="8", "Chromium";v="105"',
						'sec-ch-ua-mobile': '?0',
						'sec-ch-ua-platform': '"Windows"',
						'sec-fetch-dest': 'empty',
						'sec-fetch-mode': 'cors',
						'sec-fetch-site': 'same-site',
						'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36 Edg/105.0.1343.53',
						'x-xsrf-token': '12D59ACD8AA0B88A7ACE05BB574FAF8955D23DBA28E8EE54F30BCB106413A89C1752BA30DC063940ED30A599C055CC810636'
					}
				}).then(function(response) {
					m.reply(`${JSON.stringify(response.data, null, 2)}`)
				}).catch(function(error) {
					m.reply(`${JSON.stringify(error, null, 2)}`)
				})

}
handler.command = ['ocall']
handler.tags = ['tools','owner']
handler.help = ['ocall'].map(v => v + ' *<number>*')
handler.owner = true

module.exports = handler