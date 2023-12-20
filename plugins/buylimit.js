let handler = async (m, {
	conn,
	args
}) => {
	if (!args[0] || isNaN(args[0])) {
		return conn.reply(m.chat, '• *Example :* .buylimit 10', m)
	}

	conn.sendMessage(m.chat, {
		react: {
			text: '🕒',
			key: m.key,
		}
	})

	let count = parseInt(args[0]);
	let price = count * 100;
	let users = global.db.data.users;
	let user = users[m.sender];
	if (price > user.money) {
		return conn.reply(m.chat, `🚩 Maaf, uang kamu tidak cukup untuk membeli ${count} limit. Harga 1 limit adalah 100 balance.`, m)
	}
	user.money -= price;
	user.limit += count;
	conn.reply(m.chat, `🚩 Berhasil membeli ${count} limit dengan harga ${price} balance.`, m);
}

handler.help = ['buylimit *<amount>*'];
handler.tags = ['xp'];
handler.command = /^buylimit$/i;
handler.register = true;
handler.limit = false;

module.exports = handler;