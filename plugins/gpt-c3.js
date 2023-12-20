let axios = require('axios')

const handler = async (m, { text }) => {
  if (!text) return conn.reply(m.chat, '• *Example :* .gptc3 Pesan yang ingin Anda sampaikan kepada asisten AI', m)
  conn.sendMessage(m.chat, {
		react: {
			text: '🕒',
			key: m.key,
		}
	})
  const messages = encodeURIComponent(text)
  
  try {
    
    const response = await getgptc3Response(messages);

    m.reply(response);
  } catch (error) {
    console.error('Error:', error);
    conn.reply(m.chat, eror, m)
  }
};

handler.help = ['gptc3 *<text>*'];
handler.tags = ['ai'];
handler.command = /^(gptc3)$/i;

module.exports = handler;


async function getgptc3Response(content) {
	const url = 'https://c3.a0.chat/v1/chat/gpt/';
const headers = {
  'Content-Type': 'application/json',
  'User-Agent': 'Mozilla/5.0 (Linux; Android 11; M2004J19C Build/RP1A.200720.011) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.5060.129 Mobile Safari/537.36 WhatsApp/1.2.3',
  'Referer': 'https://c3.a0.chat/#/web/chat'
};

const requestData = {
  list: [
    {
      content: content,
      role: "user",
      nickname: "Next",
      time: "2023-9-19 14:30:08",
      isMe: true,
      index: 0
    }
  ],
  id: 1695108574472,
  title: "gptc3 kawaii asistant",
  time: "2023-9-19 14:29:34",
  prompt: "",
  models: 0,
  temperature: 0,
  continuous: true
};

  try {
    const response = await axios.post(url, requestData, { headers });
    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}