let fetch = require( 'node-fetch')

let handler = async (m, {
    command,
    usedPrefix,
    conn,
    text,
    args
}) => {
    
    conn.sendMessage(m.chat, { react: { text: '🕒', key: m.key }})
    try {
        const imgx = await Couple();

        if (imgx) {
            const male = imgx.male;
            const female = imgx.female;

            await conn.sendMessage(m.chat, {
                image: { url: male },
                caption: `*_Male_*`,
                mentions: [m.sender]
            }, {
                quoted: m
            });
            await conn.sendMessage(m.chat, {
                image: { url: female },
                caption: `*_Female_*`,
                mentions: [m.sender]
            }, {
                quoted: m
            });
        } else {
            console.log("Tidak ada respons dari OpenAI atau terjadi kesalahan.");
        }
    } catch (e) {
        await m.reply(eror)
    }
}
handler.help = ["resvcouple"]
handler.tags = ["tools"]
handler.command = /^(resvcouple)$/i
handler.limit = true
module.exports = handler

async function Couple() {
    try {
        const response = await fetch("https://tools.revesery.com/couple/revesery.php");

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        
        return data;
    } catch (error) {
        console.error(`An error occurred: ${error.message}`);
        throw error; // Rethrow the error to handle it further up the call stack
    }
}