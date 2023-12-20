const {
	createHash
} = require('crypto');
const fetch = require('node-fetch');
const canvafy = require ('canvafy')

let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i;
let handler = async function(m, {
	text,
	usedPrefix
}) {
	let user = global.db.data.users[m.sender];
	let name = conn.getName(m.sender)
	let pp = await conn.profilePictureUrl(m.sender, 'image').catch((_) => "https://telegra.ph/file/1ecdb5a0aee62ef17d7fc.jpg");
	let age = `0`
	if (user.registered === true) throw '```✅ Nomor Kamu Udah Terverifikasi```';
	user.regTime = +new Date();
	user.registered = true;
	user.age = age
	let sn = createHash('md5').update(m.sender).digest('hex');
    let capt = `乂  *R E G I S T E R  S U C C E S S*\n\n`
    capt += `┌  ◦ *Name* : ${name}\n`
    capt += `│  ◦ *Number* : ${m.sender.split("@")[0]}\n`
    capt += `│  ◦ *Age* : ${age}\n`
    capt += `└  ◦ *Serial Number* : .ceksn\n\n`
    capt += `ᴋɪᴋᴜ - ᴡᴀʙᴏᴛ ᴍᴀᴅᴇ ʙʏ ᴛᴀᴋᴀꜱʜɪ ᴋᴇᴍɪɪ`
    let p = await new canvafy.Security()
.setAvatar(pp)
.setBackground("image", "https://cdn.discordapp.com/attachments/1087030211813593190/1110243947311288530/beeautiful-sunset-illustration-1212023.webp")
.setCreatedTimestamp(Date.now())
.setSuspectTimestamp(1)
.setBorder("#f0f0f0")
.setLocale("id") // country short code - default "en"
.setAvatarBorder("#f0f0f0")
.setOverlayOpacity(0.9)
.build();
await conn.sendFile(m.chat, p, '', capt, m)
};

handler.help = ['verify']
handler.tags = ['start']
handler.command = /^(verify)$/i;

module.exports = handler;

function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}