let fetch = require("node-fetch")
let handler = async (m, {
    conn,
    isOwner,
    usedPrefix,
    command,
    text
}) => {
    conn.secmail = conn.secmail ? conn.secmail : {}
    let id = "secmail"

    let lister = [
        "create",
        "message",
        "delete"
    ]

    let [feature, inputs, inputs_, inputs__, inputs___] = text.split(" ")
    if (!lister.includes(feature)) return m.reply("• *Example :*\n" + usedPrefix + command + " create\n\n*Pilih type yg ada*\n" + lister.map((v, index) => "◦" + v).join("\n"))

    if (lister.includes(feature)) {

        if (feature == "create") {

            try {
                let eml = await random_mail()
                let info = eml[0].split('@')
                conn.secmail[id] = [
                    await m.reply("*EMAIL:*\n" + eml[0] + "\n\n" + "*Login:*\n" + info[0] + "\n\n*Domain:*\n" + info[1] + "\n\n_Ketik *" + usedPrefix + command + " message* Untuk mengecek inbox_"),
                    eml[0],
                    info[0],
                    info[1]
                ]
            } catch (e) {
                await m.reply(eror)
            }
        }

        if (feature == "message") {
            if (!conn.secmail[id]) return m.reply("Tidak ada pesan, buat email terlebih dahulu\nKetik *" + usedPrefix + command + " create*")

            try {
                let eml = await get_mails(conn.secmail[id][2], conn.secmail[id][3])
                let teks = eml.map((v, index) => {
                    return `*EMAIL [ ${index + 1} ]*
*ID* : ${v.id}
*Dari* : ${v.from}

*Subjek* : ${v.subject}
*Date* : ${v.date}
   `.trim()
                }).filter(v => v).join("\n\n________________________\n\n")
                await m.reply(teks || "*KOSONG*" + "\n\n_Ketik *" + usedPrefix + command + " delete* Untuk menghapus email_")
            } catch (e) {
                await m.reply(eror)
            }
        }
        if (feature == "delete") {
            if (!conn.secmail[id]) return m.reply("Tidak ada email yang terpakai")

            try {
                delete conn.secmail[id]
                await m.reply("Sukses menghapus email")
            } catch (e) {
                await m.reply(eror)
            }
        }

    }
}
handler.help = ["secmail"]
handler.tags = ["internet"]
handler.command = /^(secmail)$/i
module.exports = handler

function msToTime(duration) {
    const milliseconds = parseInt((duration % 1000) / 100);
    const seconds = Math.floor((duration / 1000) % 60);
    const minutes = Math.floor((duration / (1000 * 60)) % 60);
    const hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

    return `${hours}h ${minutes}m ${seconds}s ${milliseconds}ms`;
}

function formatSize(sizeInBytes) {
    const units = ["B", "KB", "MB", "GB", "TB"];
    let index = 0;

    while (sizeInBytes >= 1024 && index < units.length - 1) {
        sizeInBytes /= 1024;
        index++;
    }

    return sizeInBytes.toFixed(2) + " " + units[index];
}

async function random_mail() {
    const link = "https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1"

    try {
        let response = await fetch(link);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        let data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}

async function get_mails(id, domain) {
    const link = `https://www.1secmail.com/api/v1/?action=getMessages&login=${id}&domain=${domain}`;

    try {
        let response = await fetch(link);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        let data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
} 