let fetch = require("node-fetch")

let handler = async (m, {
    conn,
    args,
    usedPrefix,
    command
}) => {
    let text
    if (args.length >= 1) {
        text = args.slice(0).join(" ")
    } else if (m.quoted && m.quoted.text) {
        text = m.quoted.text
    } else throw "• *Example :* .fastgpt Hello"
    conn.sendMessage(m.chat, { react: { text: '🕒', key: m.key }})
    try {
        let res = await chatWithGPT(text)
        await conn.reply(m.chat, res, m)
    } catch (e) {
        await m.reply(eror)
    }
}
handler.help = ["fastgpt *<text>*"]
handler.tags = ["internet", "ai"];
handler.command = /^(fastgpt)$/i

module.exports = handler

/* New Line */

async function chatWithGPT(your_qus) {
    function generateRandomString(length) {
        var result = '';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }

    let _iam = generateRandomString(8);
    let ops = {};

    const response1 = await fetch("https://chat.aidutu.cn/api/cg/chatgpt/user/info?v=1.5", {
        method: "POST",
        headers: {
            "accept": "*/*",
            "referrer": "https://chat.aidutu.cn/",
            "x-iam": _iam,
            "Cookie": `_UHAO={"uid":"160941","school":"","time":1681704243,"ts":"2","name":"chat_q2Ac","head":"\/res\/head\/2ciyuan\/24.jpg","term":"201801","sign":"714653d141dac0e7709f31003b8df858"}; _UIP=0e98d94e599ef74c29fb40cb35971810`,
            "content-type": "application/json",
        },
        body: JSON.stringify({
            q: your_qus,
            iam: _iam,
        }),
    });

    const data = await response1.json();
    const xtoken = data.data.token;
    const response2 = await fetch("https://chat.aidutu.cn/api/chat-process", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Referer": "https://chat.aidutu.cn/",
            "Cookie": `_UHAO={"uid":"160941","school":"","time":1681704243,"ts":"2","name":"chat_q2Ac","head":"\/res\/head\/2ciyuan\/24.jpg","term":"201801","sign":"714653d141dac0e7709f31003b8df858"}; _UIP=0e98d94e599ef74c29fb40cb35971810`,
            "accept": "application.json, text/plain, */*",
            "x-token": xtoken,
        },
        body: JSON.stringify({
            prompt: your_qus,
            temperature: 0.8,
            top_p: 1,
            options: ops,
            systemMessage: "You are ChatGPT, a large language model trained by OpenAI. Follow the user's instructions carefully. Respond using markdown.",
        }),
    });

    const data2 = await response2.text();
    const jsonArray = JSON.parse(`[${data2.split('\n')}]`);
    const lastJsonObject = jsonArray[jsonArray.length - 1];
    return lastJsonObject.text;
}
