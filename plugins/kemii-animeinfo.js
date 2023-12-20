let fetch = require('node-fetch')

var handler = async (m, { conn, text }) => {

	if (!text) return conn.reply(m.chat, `Enter the Anime Title You Want to Search!`, m)
	conn.sendMessage(m.chat, { react: { text: '🕐', key: m.key }})
	try {
	let res = await fetch("https://api.jikan.moe/v4/anime?q=" + text);
	if (!res.ok) return conn.reply(m.chat, "Not found", m)
	let json = await res.json();
	let {
		episodes,
		url,
		type,
		score,
		rating,
		scored_by,
		popularity,
		rank,
		season,
		year,
		members,
		background,
		status,
		duration,
		synopsis,
		favorites,
	} = json.data[0];
	// let studio = json.data[0].authors[0].name
	// let studiomynimelist = json.data[0].authors[0].url
	let producers = json.data[0].producers
		.map((prod) => `${prod.name} (${prod.url})`)
		.join(", ");
	let studio = json.data[0].studios
		.map((stud) => `${stud.name} (${stud.url})`)
		.join(", ");
	let genre = json.data[0].genres
		.map((xnuvers007) => `${xnuvers007.name}`)
		.join(", ");
	let judul = json.data[0].titles
		.map((jud) => `${jud.title} [${jud.type}]`)
		.join(", ");
	let trailerUrl = json.data[0].trailer.url;

	let animeingfo = `*-* Tittle : ${judul}
*-* Episode : ${episodes}
*-* Type : ${type}
*-* Genre : ${genre}
*-* Status : ${status}
*-* Durasi : ${duration}
*-* Favorite : ${favorites}
*-* Score : ${score}
*-* Rating : ${rating}
*-* Score Member : ${scored_by}
*-* Tingkat Popularitas : ${popularity}
*-* Peringkat : ${rank}
*-* Musim : ${season}
*-* Tahun Rilis : ${year}
*-* Studio : ${studio}
*-* Trailer : ${trailerUrl}
*-* Produser : ${producers}
*-* Members : ${members}
*-* Url : ${url}
*-* Background : ${background}

*Sinopsis*
${synopsis}\n\n©Kikuchanj`;
	conn.sendFile(
		m.chat,
		json.data[0].images.jpg.image_url,
		"animek.jpg",
		`*Search Results from ${text}*\n\n` + animeingfo,
		m,
	);
	 } catch (error) {
    console.log(error)
    conn.reply('🚩 Sorry, I couldn\'t process your request.')
  }
};
handler.help = ["animeinfo *<text>*"];
handler.tags = ["anime"];
handler.command = /^(animeinfo|anime|infoanime|nimeinfo|nime)$/i;

module.exports = handler;
