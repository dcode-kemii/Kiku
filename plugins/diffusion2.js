let fetch = require("node-fetch")

let handler = async (m, { conn, isOwner, usedPrefix, command, args }) => {
	let query = "• *Example :* .diffusion hello world"
	let text
	if (args.length >= 1) {
		text = args.slice(0).join(" ")
	} else if (m.quoted && m.quoted.text) {
		text = m.quoted.text
	} else return conn.reply(m.chat, query, m)
	try {
	conn.sendMessage(m.chat, {
		react: {
			text: '🕒',
			key: m.key,
		}
	})
	 await Draw(text).then((img) => {
                conn.sendFile(m.chat, img, null, done, m)
            })
      } catch (e) {
      throw eror
   }
            
}
handler.help = ["diffusion2 *<text>*"]
handler.tags = ["diffusion"]
handler.command = /^(diffusion2)$/i
module.exports = handler;


async function Draw(propmt) {
        const Blobs = await fetch(
		"https://api-inference.huggingface.co/models/runwayml/stable-diffusion-v1-5",
		{
			headers: { Authorization: "Bearer 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" },
			method: "POST",
			body: JSON.stringify({ inputs : propmt }),
		}
	)
      .then((res) => res.blob())
        const arrayBuffer = await Blobs.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);
        return buffer
}

