let FormData = require("form-data");
let Jimp = require("jimp");

async function processing(urlPath, method) {
	return new Promise(async (resolve, reject) => {
		let Methods = ["enhance", "recolor", "dehaze"];
		Methods.includes(method) ? (method = method) : (method = Methods[0]);
		let buffer,
			Form = new FormData(),
			scheme = "https" + "://" + "inferenceengine" + ".vyro" + ".ai/" + method;
		Form.append("model_version", 1, {
			"Content-Transfer-Encoding": "binary",
			contentType: "multipart/form-data; charset=uttf-8",
		});
		Form.append("image", Buffer.from(urlPath), {
			filename: "enhance_image_body.jpg",
			contentType: "image/jpeg",
		});
		Form.submit(
			{
				url: scheme,
				host: "inferenceengine" + ".vyro" + ".ai",
				path: "/" + method,
				protocol: "https:",
				headers: {
					"User-Agent": "okhttp/4.9.3",
					Connection: "Keep-Alive",
					"Accept-Encoding": "gzip",
				},
			},
			function (err, res) {
				if (err) reject();
				let data = [];
				res
					.on("data", function (chunk, resp) {
						data.push(chunk);
					})
					.on("end", () => {
						resolve(Buffer.concat(data));
					});
				res.on("error", (e) => {
					reject();
				});
			}
		);
	});
}
let handler = async (m, { conn, usedPrefix, command }) => {
	switch (command) {
		case "enhancer":
		case "unblur":
		case "enhance":
		case "hdr":
		case "hd":
			{
				conn.enhancer = conn.enhancer ? conn.enhancer : {};
				if (m.sender in conn.enhancer)
					return conn.reply(m.chat, "Masih Ada Proses Yang Belum Selesai Kak, Silahkan Tunggu Sampai Selesai Yah >//<", m)
				let q = m.quoted ? m.quoted : m;
				let mime = (q.msg || q).mimetype || q.mediaType || "";
				if (!mime)
					return conn.reply(m.chat, `Send/Reply Images with the caption *.hd*`, m)
				if (!/image\/(jpe?g|png)/.test(mime))
					return conn.reply(m.chat, `Mime ${mime} tidak support`, m)
				else conn.enhancer[m.sender] = true;
  conn.sendMessage(m.chat, {
    react: {
      text: '🕒',
      key: m.key,
    }
  });
				let img = await q.download?.();
				let error;
				try {
					const This = await processing(img, "enhance");
					conn.chatRead(m.chat);
  conn.sendMessage(m.chat, {
    react: {
      text: '☑️',
      key: m.key,
    }
  });
					conn.sendFile(m.chat, This, "", "```Success...\nDont forget to donate```", m);
				} catch (er) {
					error = true;
				} finally {
					if (error) {
						conn.reply(m.chat, "Proses Gagal :(", m)
					}
					delete conn.enhancer[m.sender];
				}
			}
			break;
		case "colorize":
		case "colorizer":
			{
				conn.recolor = conn.recolor ? conn.recolor : {};
				if (m.sender in conn.recolor)
					return conn.reply(m.chat, "Masih Ada Proses Yang Belum Selesai Kak, Silahkan Tunggu Sampai Selesai Yah >//<", m)
				let q = m.quoted ? m.quoted : m;
				let mime = (q.msg || q).mimetype || q.mediaType || "";
				if (!mime)
					return conn.reply(m.chat, `Fotonya Mana Kak?`, m)
				if (!/image\/(jpe?g|png)/.test(mime))
					return conn.reply(m.chat, `Mime ${mime} tidak support`, m)
				else conn.recolor[m.sender] = true;
  conn.sendMessage(m.chat, {
    react: {
      text: '🕒',
      key: m.key,
    }
  });
				let img = await q.download?.();
				let error;
				try {
					const This = await processing(img, "enhance");
  conn.sendMessage(m.chat, {
    react: {
      text: '☑️',
      key: m.key,
    }
  });
					conn.sendFile(m.chat, This, "", "```Success...\nDont forget to donate```", m);
				} catch (er) {
					error = true;
				} finally {
					if (error) {
						conn.reply(m.chat, "Proses Gagal :(", m)
					}
					delete conn.recolor[m.chat];
				}
			}
			break;
	}
};
handler.help = ["enhancer", "hdr", "colorize","hd","unblur","remini","enhance"].map(v => v + ' *<image>*')
handler.tags = ["tools","hd"];
handler.premium = false;
handler.command = ["unblur", "enchaner", "enhance", "hdr", "colorize","remini","hd"];
module.exports = handler;