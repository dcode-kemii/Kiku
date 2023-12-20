const fetch = require("node-fetch");

let handler = async (m, { conn, isOwner, usedPrefix, command, args }) => {
  let query = "• *Example :* .midjourney orange cat";
  let text;
  if (args.length >= 1) {
    text = args.slice(0).join(" ");
  } else if (m.quoted && m.quoted.text) {
    text = m.quoted.text;
  } else return conn.reply(m.chat, query, m)
  try {
    conn.sendMessage(m.chat, {
      react: {
        text: '🕒', 
        key: m.key,
      }
    })
    await Draw(text).then((img) => {
      conn.sendFile(m.chat, img, text, "Here your image " + text, m);
    });
  } catch (e) {
    throw eror;
  }
};

handler.help = ["midjourney","mid"].map(v => v + ' *<teks>*')
handler.tags = ["internet"];
handler.command = /^mid|midjourney$/i;

module.exports = handler;

async function Draw(propmt) {
  const Blobs = await fetch(
    "https://api-inference.huggingface.co/models/prompthero/openjourney-v2",
    {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Authorization: "Bearer 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",
      },
      body: JSON.stringify({ inputs: propmt }),
    }
  ).then((res) => res.blob());
  const arrayBuffer = await Blobs.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);
  return buffer;
}