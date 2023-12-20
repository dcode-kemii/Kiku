const canvafy = require("canvafy");
const fsPromises = require('fs').promises;
const crypto = require("crypto");
const fetch = require("node-fetch");

const Reg = /\|?(.*)([^\w\s])([0-9]*)$/i;

const handler = async (m, {
    conn, text, usedPrefix, command
}) => {
    conn.registrasi = conn.registrasi ? conn.registrasi : {};

    if (conn.registrasi[m.chat]?.[m.sender]) return m.reply('You are requesting verification!');
    let user = global.db.data.users[m.sender];
    let kemii = await conn.getName(m.sender)
    if (user.registered === true) return conn.reply(m.chat, '```✅ Nomor Kamu Udah Terverifikasi```', m)
    const umurRandom = Math.floor(Math.random() * 100) + 1;
    const formatSalah = `• *Example :* ${usedPrefix + command} ${kemii}.${umurRandom}`;
    await conn.sendMessage(m.chat, { react: { text: '🕒', key: m.key }})
    if (!Reg.test(text)) throw formatSalah;
    let [_, name, splitter, age] = text.match(Reg);
    if (!name) return conn.reply(m.chat, "🚩 Nama tidak boleh kosong (Alphanumeric)", m)
    if (!age) return conn.reply(m.chat, "🚩 Umur tidak boleh kosong (Angka)", m)
    age = parseInt(age);
    if (age > 50) return conn.reply(m.chat, "🚩 *Gak boleh!*,\nTua amat dah", m)
    if (age < 5) return conn.reply(m.chat, "🚩 *Gak boleh!*,\nBanyak pedo", m)

    let sn = crypto.createHash("md5").update(m.sender).digest("hex");
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : m.fromMe ? conn.user.jid : m.sender;
    let pp = await conn.profilePictureUrl(who, 'image').catch((_) => "https://cdn.jsdelivr.net/gh/SazumiVicky/MakeMeow-Storage@main/avatar_contact.png");

    let cap = `
*Kamu terverifikasi*

• *Nama:* ${name}
• *Umur:* ${age} tahun
• *Serial Number (SN):* ${sn}

`;

    const json = await createOtpCanvas(pp);

    let confirm = "Reply pesan ini dengan mengetik kode OTP yang ada pada gambar!";
    let { key } = await conn.sendFile(m.chat, json.image, '', confirm, m);

    conn.registrasi[m.chat] = {
        ...conn.registrasi[m.chat],
        [m.sender]: {
            message: m,
            sender: m.sender,
            otp: json.otp,
            verified: json.verified,
            caption: cap,
            pesan: conn,
            age,
            user,
            name,
            key,
            timeout: setTimeout(() => {
                conn.sendMessage(m.chat, { delete: key });
                delete conn.registrasi[m.chat][m.sender];
            }, 60 * 1000)
        }
    };
}

handler.before = async (m, { conn }) => {
    conn.registrasi = conn.registrasi ? conn.registrasi : {};
    if (m.isBaileys) return;
    if (!conn.registrasi[m.chat]?.[m.sender]) return;
    if (!m.text) return;
    let { timeout, otp, verified, message, sender, pesan, caption, user, name, age, key } = conn.registrasi[m.chat]?.[m.sender];
    if (m.id === message.id) return;
    if (m.id === key.id) return;
    if (m.text == otp) {
        user.name = name.trim();
        user.age = age;
        user.regTime = +new Date;
        user.registered = true;
        let capt = `乂  *R E G I S T E R  S U C C E S S*\n\n`
        capt += `┌  ◦ *Name* : ${name}\n`
        capt += `│  ◦ *Number* : ${m.sender.split("@")[0]}\n`
        capt += `│  ◦ *Age* : ${age}\n`
        capt += `└  ◦ *Serial Number* : .ceksn\n\n`
        capt += `ᴋɪᴋᴜ - ᴡᴀʙᴏᴛ ᴍᴀᴅᴇ ʙʏ ᴛᴀᴋᴀꜱʜɪ ᴋᴇᴍɪɪ`
        pesan.sendFile(m.chat, verified, '', capt, m);
        clearTimeout(timeout);
        pesan.sendMessage(m.chat, { delete: key });
        delete conn.registrasi[m.chat]?.[m.sender];
    } else {
        conn.reply(m.chat, `✖️ OTP Salah!\n${m.sender.split('@')[0]} tidak di verifikasi!`, m)
        clearTimeout(timeout);
        pesan.sendMessage(m.chat, { delete: key });
        delete conn.registrasi[m.chat]?.[m.sender];
    }
}

handler.help = ["register","daftar"].map(v => v + " *<name>.<age>*");
handler.tags = ["start"];
handler.command = /^(register|daftar)$/i;

module.exports = handler;

function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)];
}

function isNumber(x) {
    return !isNaN(x);
}

function generateRandomCharacter() {
    const characters = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    return characters[Math.floor(Math.random() * characters.length)];
}

async function createOtpCanvas(avatar) {
    const codetext = Array.from({ length: 4 }, generateRandomCharacter).join('');
    const captchaBuffer = await new canvafy.Captcha()
        .setBackground("image", "https://cdn.discordapp.com/attachments/1087030211813593190/1110243947311288530/beeautiful-sunset-illustration-1212023.webp")
        .setCaptchaKey(codetext.toString())
        .setBorder("#f0f0f0")
        .setOverlayOpacity(0.7)
        .build();
    const securityBuffer = await new canvafy.Security()
        .setAvatar(avatar)
        .setBackground("image", "https://cdn.discordapp.com/attachments/1087030211813593190/1110243947311288530/beeautiful-sunset-illustration-1212023.webp")
        .setCreatedTimestamp(Date.now())
        .setSuspectTimestamp(1)
        .setBorder("#f0f0f0")
        .setLocale("id") // country short code - default "en"
        .setAvatarBorder("#f0f0f0")
        .setOverlayOpacity(0.9)
        .build();
    return {
        image: captchaBuffer,
        otp: codetext,
        verified: securityBuffer
    };
}