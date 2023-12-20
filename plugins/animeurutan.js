var handler = async (m, { args, text, conn, usedPrefix, command }) => {
	if (!text)
		return conn.reply(m.chat, `• *Type :* ${usedPrefix}${command} < title>
• *Example :* ${usedPrefix}${command} Fate

*「 Title Anime 」*
- Amagi Brilliant Park 
- Ao No Exorcist
- Arifureta
- Berserk
- Bleach
- Boku no Hero Academia
- Bungou Stray Dogs
- Chuunibyou Demo Koi ga Shitai
- Date A Live
- Danmachi
- Danganronpa
- Digimon
- Dragon Ball
- Fairy Tail
- Fate
- Gintama
- Gochuumon wa Usagi Desu ka
- Grisaia
- Gundam
- Haikyuu
- Hibike Euphonium
- High School Dxd
- Himouto Umaru-chan
- Hitsugi no Chaika
- Infinite Stratos
- Kaguya-sama Love is War
- Kamisama Hajimemashita
- Kara no Kyoukai
- Kimetsu no Yaiba
- Kingdom
- Magi
- Meitantei Conan
- Monogatari
- Nanatsu no Taizai
- Naruto
- Naruto Shippuden
- Natsume Yuujinchou
- Non Non Biyori
- No Game No Life
- One Piece
- One Punch Man
- Owari no Seraph
- Oregairu
- Overlord
- Psycho Pass
- Re Zero
- Saiki Kusuo
- Saint Seiya
- Shingeki no Kyojin
- Shokugeki no Souma
- Slam Dunk
- Strike The Blood
- Strike Witches
- Steins Gate
- Sword Art Online
- Tensei Shitara Slime Datta Ken
- Toaru
- To Love-ru
- Tokyou Ghoul
- Himouto Umaru-chan
- Yuuki Yuuna
- Yuru Camp
- Yuru Yuri
- Zero no Tsukaima`, m)
	if (args[0]?.toLowerCase() === "arifureta") {
		conn.sendMessage(
			m.chat,
			{
				text: `*Urutan nonton Arifureta Shokugyou de Sekai Saikyou ࿐໋*\n
- Arifureta Shokugyou de Sekai Saikyou
- Arifureta Shokugyou de Sekai Saikyou Specials
- Arifureta Shokugyou de Sekai Saikyou 2nd Season`,
			},
			{ quoted: m },
		);
	} else if (text === "amagi brilliant park") {
		conn.sendMessage(
			m.chat,
			{
				text: `*Urutan Nonton Amagi Brilliant Park ࿐໋*\n
- Amagi Brilliant Park
- Amagi Brilliant Park: Wakuwaku Mini Theater - Rakugaki Backstage
- Amagi Brilliant Park: Nonbirishiteiru Hima ga Nai!`,
			},
			{ quoted: m },
		);
	} else if (text === "zero no tsukaima") {
		conn.sendMessage(
			m.chat,
			{
				text: `*Urutan Nonton Zero no Tsukaima ࿐໋*

- Zero no Tsukaima
- Zero no Tsukaima: Futatsuki no Kishi
- Zero no Tsukaima: Princesses no Rando
- Zero no Tsukaima: Princesses no Rondo Picture Drama
- Zero no Tsukaima: Princesses no Rondo - Yuuwaku no Sunahama
- Zero no Tsukaima F`,
			},
			{ quoted: m },
		);
	} else if (text === "tokyo ghoul") {
		conn.sendMessage(
			m.chat,
			{
				text: `*Urutan Nonton Tokyo Ghoul ࿐໋*

Urutan nonton tokyo ghoul berdasarkan storyline :
- Tokyo Ghoul
- Tokyo Ghoul: Pinto
- Tokyo Ghoul √A
- Tokyo Ghoul: Jack
- Tokyo Ghoul: Re
- Tokyo Ghoul: Re 2`,
			},
			{ quoted: m },
		);
	} else if (text === "to love-ru") {
		conn.sendMessage(
			m.chat,
			{
				text: `*Urutan Nonton To LOVE-Ru ࿐໋*

Urutan nonton dari alur cerita:
- To LOVE-Ru
- To LOVE-Ru OVA
- Motto to LOVE-Ru
- To LOVE-Ru Darkness
- To LOVE-Ru Darkness 2nd

Urutan nonton Rekomendasi:
- To LOVE-Ru
- To LOVE-Ru OVA
- Motto to LOVE-Ru
- To LOVE-Ru Darkness
- To Love-Ru: Trouble - Darkness OVA
- To LOVE-Ru Darkness 2nd
- To LOVE-Ru Darkness 2nd OVA
- To LOVE-Ru Darkness 2nd Specials
- To Love-Ru: Trouble - Multiplication - Mae kara Ushiro kara`,
			},
			{ quoted: m },
		);
	} else if (text === "sword art online") {
		conn.sendMessage(
			m.chat,
			{
				text: `*Urutan Nonton Sword Art Online ࿐໋*

- Sword Art Online Season 1
- Sword Art Online: Progressive (ini sama dengan season 1, bedanya disini Asuna lebih sering muncul)
- Sword Art Online: Extra Edition
- Sword Art Online Season 2
- Sword Art Online Alternative: Gun Gale Online (Spin Off)
- Sword Art Online Ordinal Scale
- Sword Art Online: Alicization
- Sword Art Online: Alicization War of Underworld
- Sword Art Online: Alicization War of Underworld Part 2`,
			},
			{ quoted: m },
		);
	} else if (text === "tensei shitara slime datta ken") {
		conn.sendMessage(
			m.chat,
			{
				text: `*Urutan nonton Tensei shitara slime Datta Ken ࿐໋*

- Tensei Shitara Slime Datta Ken
- Tensei Shitara Slime Datta Ken OVA
- Tensei Shitara Slime Datta Ken 2nd Season
- Tensei Shitara Slime Datta Ken 2nd Season Part 2

Spin Off : 
- Tensura Nikki: Tensei Shitara Slime Datta Ken`,
			},
			{ quoted: m },
		);
	} else if (text === "steins gate") {
		conn.sendMessage(
			m.chat,
			{
				text: `*Urutan Nonton Steins Gate ࿐໋*

- Steins; Gate
- Steins; Gate: Kyoukaimenjou no Missing Link Divide by Zero
- Steins;Gate: Soumei Eichi no Cognitive Computing
- Steins; Gate: Kesshou Takei no Valentine Bittersweet Intermedio
- Steins; Gate 0
- Steins; Gate 0 OVA Oukoubakko no Porlomania
- Steins; Gate: Fuka Ryouiki no Deja Vu`,
			},
			{ quoted: m },
		);
	} else if (text === "strike the blood") {
		conn.sendMessage(
			m.chat,
			{
				text: `*Urutan nonton Strike the Blood ࿐໋*

- Strike the Blood
- Strike the Blood: Valkyria no Oukoku-hen
- Strike the Blood II
- Strike the Blood III
- Strike the Blood: Kieta Seisou-hen
- Strike the Blood IV`,
			},
			{ quoted: m },
		);
	} else if (text === "strike witches") {
		conn.sendMessage(
			m.chat,
			{
				text: `*Ururan Nonton Strike Witches ࿐໋*

- Strike Witches
- Brave Witches
- Strike Witches 2
- Strike Witches: Operation Victory Arrow 
- Strike Witches Movie
- Strike Witches: Road to Berlin`,
			},
			{ quoted: m },
		);
	} else if (text === "slam dunk") {
		conn.sendMessage(
			m.chat,
			{
				text: `*Urutan Nonton Slam Dunk ࿐໋*

- Slam Dunk Eps 1-20
- *Slam Dunk (Movie)*
- Slam Dunk Eps 21-26
- *Slam Dunk: Zenkoku Seiha Da! - Sakuragi Hanamichi*
- Slam Dunk Eps 37-60
- *Slam Dunk: Shouhoku Saidai no Kiki! Moero Sakuragi Hanamichi*
- *Slam Dunk: Hoero Basketman-damashii! Hanamichi to Rukawa no Atsuki Natsu*
- Slam Dunk Eps 61-101
- *THE FIRST SLAM DUNK*`,
			},
			{ quoted: m },
		);
	} else if (text === "shokugeki no souma") {
		conn.sendMessage(
			m.chat,
			{
				text: `*Urutan Nonton Shokugeki no Souma ࿐໋*

- Shokugeki no Souma
- Shokugeki no Souma Ova 1 & 2
- Shokugeki no Souma : Ni no Sora 
- Shokugeki no Souma : Ni no Sora Ova 1 & 2
- Shokugeki no Souma : San no Sara
- Shokugeki no Souma : San no Sara - Tootsuki Ressha - hen
- Shokugeki no Souma : San no Sara - Kyokuseiryou no Erina
- Shokugeki no Souma : Shin no Sara
- Shokugeki no Souma : Gou no Sara`,
			},
			{ quoted: m },
		);
	} else if (text === "shingeki no kyojin") {
		conn.sendMessage(
			m.chat,
			{
				text: `*Urutan Nonton Shingeki no Kyojin ࿐໋*

- Shingeki no Kyojin Season 1
- Chimi Kyara Gekijō – Tondeke! Kunren Heidan
- Shingeki no Kyojin Season 1 OVA
- Attack on Titan – Part 1: Crimson Bow and Arrow
- Shingeki no Kyojin Kui Naki Sentaku
- Attack on Titan – Part 2: Wings of Freedom
- Shingeki no Kyojin Season 2
- Shingeki no Kyojin: Lost Girls
- Attack on Titan: The Roar of Awakening
- Shingeki no Kyojin Season 3 Court/Part 1
- Shingeki no Kyojin Season 3 Court/Part 2
- Shingeki no Kyojin: Chronicle
- Shingeki no Kyojin: The Final Season`,
			},
			{ quoted: m },
		);
	} else if (text === "re zero") {
		conn.sendMessage(
			m.chat,
			{
				text: `*Urutan Nonton Re: Zero kara Hajimeru ࿐໋*

- Re:Zero kara Hajimeru Isekai Seikatsu
- Re:Zero kara Hajimeru Break Time (Gak Wajib)
- Re:Petit kara Hajimeru Isekai Seikatsu (Gak Wajib)
- Re:Zero kara Hajimeru Isekai Seikatsu - Memory Snow
- Re:Zero kara Hajimeru Isekai Seikatsu - Hyouketsu no Kizuna
- Re:Zero kara Hajimeru Isekai Seikatsu 2nd Season
- Re:Zero kara Hajimeru Break Time 2nd Season (Gak Wajib)
- Re:Zero kara Hajimeru Isekai Seikatsu 2nd Season Part 2`,
			},
			{ quoted: m },
		);
	} else if (text === "boku no hero academia") {
		conn.sendMessage(
			m.chat,
			{
				text: `*Urutan Nonton Boku no Hero Academia ࿐໋*

- Boku no Hero Academia
- Boku no Hero Academia: Sukue! Kyuujo Kunren!
- Boku no Hero Academia Season 2
- Boku no Hero Academia: Training of the Death
- Boku no Hero Academia Season 3
- Boku no Hero Academia: All Might Rising
- Boku no Hero Academia: Futari Hero (Movie 1)
- Boku no Hero Academia Season 4
- Boku no Hero Academia: Heroes: Rising (Movie 2)
- Boku no Hero Academia: Make it! Do or Die Survival Training!
- Boku no Hero Academia Season 5
- Boku no Hero Academia Movie 3`,
			},
			{ quoted: m },
		);
	} else if (text === "chuunibyou demo koi ga shitai") {
		conn.sendMessage(
			m.chat,
			{
				text: `*Urutan Nonton Chuunibyou demo koi ga shitai ࿐໋*

- Chuunibyou Demo Koi ga Shitai
- Chuunibyou Demo Koi ga Shitai: Takanashi Rikka kai!
- Chuunibyou Demo Koi ga Shitai: Lite!
- Chuunibyou Demo Koi ga Shitai: Depth of Field
- Chuunibyou Demo Koi ga Shitai: Ren!
- Chuunibyou Demo Koi ga Shitai: Ren Lite!
- Chuunibyou Demo Koi ga Shitai: Special
- Chuunibyou Demo Koi ga Shitai: Take on Me!`,
			},
			{ quoted: m },
		);
	} else if (text === "high school dxd") {
		conn.sendMessage(
			m.chat,
			{
				text: `*Urutan Nonton High School Dxd ࿐໋*

- Highschool DxD
- Highschool DxD: OVA
- Highschool DxD New
- Highschool DxD New Episode 13 Special
- Highschool DxD BorN
- Highschool DxD BorN: Yomigaerani Fushichou
- Highschool DxD Hero: Taiikukan-ura no Holy
- Highschool DxD Hero`,
			},
			{ quoted: m },
		);
	} else if (text === "hibike euphonium") {
		conn.sendMessage(
			m.chat,
			{
				text: `*Urutan Nonton Hibike! Euphonium ࿐໋*

Main Story
- Hibike! Euphonium 
- Hibike! Euphonium S2
- Hibike! Euphonium: Chikai no Finale

Movie Recap
- Hibike! Euphonium: Kitauji Koukou Suisougaku-bu e Youkoso (recap season 1)
- Hibike! Euphonium: Todoketai Melody (recap season 2)

Movie Spin-off
- Liz to Aoi Tori`,
			},
			{ quoted: m },
		);
	} else if (text === "fairy tail") {
		conn.sendMessage(
			m.chat,
			{
				text: `*Urutan Nonton Fairy Tail ࿐໋*

- Fairy Tail
- Fairy Tail Ova
- Fairy Tail Movie 1: Hounou no Miko
- Fairy Tail: Hounou no Miko – Hajimari no Asa Spesial
- Fairy Tail x Rave
- Fairy Tail Season 2
- Fairy Tail Movie 2: Dragon City
- Fairy Tail: Final Series`,
			},
			{ quoted: m },
		);
	} else if (text === "date a live") {
		conn.sendMessage(
			m.chat,
			{
				text: `*Urutan Nonton Date A Live ࿐໋*

- Date A Live
- Date A Live: Date to Date (Ova)
- Date A Live II
- Date A Live: Encore (Ova)
- Date A Live Movie: Mayuri Judgment
- Date A Live II

Spin off : 
- Date A Bullet: Dead or Bullet 
- Date A Bullet: Nightmare or Queen`,
			},
			{ quoted: m },
		);
	} else if (text === "one punch man") {
		conn.sendMessage(
			m.chat,
			{
				text: `*Urutan Nonton One Punch Man ࿐໋*

- One Punch Man
- One Punch Man: Road to Hero (Ova)
- One Punch Man Specials
- One Punch Man Season 2
- One Punch Man Season 2 Specials`,
			},
			{ quoted: m },
		);
	} else if (text === "kamisama hajimemashita") {
		conn.sendMessage(
			m.chat,
			{
				text: `*Urutan Nonton Kamisama Hajimemashita ࿐໋*

- Kami-sama Hajimemashita
- Kamisama Hajimemashita OVA
- Kamisama Hajimemashita◎
- Kamisama Hajimemashita: Kako-hen`,
			},
			{ quoted: m },
		);
	} else if (text === "psycho pass") {
		conn.sendMessage(
			m.chat,
			{
				text: `*Urutan Nonton Psycho Pass ࿐໋*

- Psycho Pass S1
- Psycho Pass S2
- Psycho Pass the Movie
- Psycho Pass: Sinners of the System :
     Psycho-Pass: Sinners of the System Case.1 – Tsumi to Bachi.
     Psycho-Pass: Sinners of the System Case.2 – First Guardian.
     Psycho-Pass: Sinners of the System Case.3 – Onshuu no Kanata ni.
- Psycho Pass: First Inspector
- Psycho Pass S3`,
			},
			{ quoted: m },
		);
	} else if (text === "kara no kyoukai") {
		conn.sendMessage(
			m.chat,
			{
				text: `*Urutan Nonton Kara no Kyoukai ࿐໋*

- Kara no Kyoukai 2: Satsujin Kousatsu (Zen)
- Kara no Kyoukai 4: Garan no Dou
- Kara no Kyoukai 3: Tsuukaku Zanryuu
- Kara no Kyoukai 1: Fukan Fuukei
- Kara no Kyoukai 5: Mujun Rasen
- Kara no Kyoukai 6: Boukyaku Rokuon
- Kara no Kyoukai 7: Satsujin Kousatsu (Kou)
- Kara no Kyoukai: Shuushou
- Kara no Kyoukai Remix: Gate of Seventh Heaven
- Kara no Kyoukai: Mirai Fukuin
- Kara no Kyoukai: Mirai Fukuin Extra Chorus`,
			},
			{ quoted: m },
		);
	} else if (text === "hitsugi no chaika") {
		conn.sendMessage(
			m.chat,
			{
				text: `*Urutan nonton Hitsugi no Chaika ࿐໋*

- Hitsugi no Chaika
- Hitsugi no Chaika: Avenging Battle
- Hitsugi no Chaika: Nerawareta Hitsugi / Yomigaeru Iseki`,
			},
			{ quoted: m },
		);
	} else if (text === "kimetsu no yaiba") {
		conn.sendMessage(
			m.chat,
			{
				text: `*Urutan nonton Kimetsu no Yaiba ࿐໋*

- Kimetsu no Yaiba
- Kimetsu no Yaiba: Kyoudai no Kizuna
- Kimetsu no Yaiba Movie: Mugen Ressha-hen
- Kimetsu no Yaiba: Yuukaku-hen

Spin Off : 
- Kimetsu Gakuen: Valentine-hen`,
			},
			{ quoted: m },
		);
	} else if (text === "no game no life") {
		conn.sendMessage(
			m.chat,
			{
				text: `*Urutan nonton No Game No Life ࿐໋*

- No Game No Life
- No Game No Life Specials
- No Game No Life: Zero

Spin Off :
- No Game No Life: Zero - Manner Movie`,
			},
			{ quoted: m },
		);
	} else if (text === "owari no seraph") {
		conn.sendMessage(
			m.chat,
			{
				text: `*Urutan nonton Owari no Seraph ࿐໋*

- Owari no Seraph
- Owari no Seraph: Owaranai Seraph
- Owari no Seraph: The Beginning of the End
- Owari no Seraph: Nagoya Kessen-hen
- Owari no Seraph: Kyuuketsuki Shahal
- Owari no Seraph: Nagoya Kessen-hen - Owaranai Seraph - Nagoya Kessen-hen`,
			},
			{ quoted: m },
		);
	} else if (text === "non non biyori") {
		conn.sendMessage(
			m.chat,
			{
				text: `*Urutan nonton Non Non Biyori ࿐໋*

- Non Non Biyori
- Non Non Biyori Repeat
- Non Non Biyori Repeat: Hotaru ga Tanoshinda
- Non Non Biyori: Okinawa e Ikukoto ni Natta
- Non Non Biyori: Vacation
- Non Non Biyori Nonstop`,
			},
			{ quoted: m },
		);
	} else if (text === "natsume yuujinchou") {
		conn.sendMessage(
			m.chat,
			{
				text: `*Urutan Nonton Natsume Yuujinchou ࿐໋*

- Natsume Yuujinchou
- Natsume Yuujinchou: Ishi Okoshi to Ayashiki Raihousha
- Zoku Natsume Yuujinchou
- Natsume Yuujinchou San
- Natsume Yuujinchou Shi
- Natsume Yuujinchou Go
- Natsume Yuujinchou Go Specials
- Natsume Yuujinchou: Itsuka Yuki no Hi ni
- Natsume Yuujinchou: Nyanko-sensei to Hajimete no Otsukai
- Natsume Yuujinchou Roku
- Natsume Yuujinchou Roku Specials
- Natsume Yuujinchou Movie: Utsusemi ni Musubu`,
			},
			{ quoted: m },
		);
	} else if (text === "bungou stray dogs") {
		conn.sendMessage(
			m.chat,
			{
				text: `*Urutan nonton Bungou Stray Dogs*

- Bungou Stray Dogs
- Bungou Stray Dogs: Hitori Ayumu
- Bungou Stray Dogs S2
- Bungou stray Dogs: Dead Apple
- Bungou Stray Dogs S3


*Spin Off:*
- Bungou Stray Dogs Wan!`,
			},
			{ quoted: m },
		);
	} else if (text === "kaguya-sama") {
		conn.sendMessage(
			m.chat,
			{
				text: `*Urutan Nonton Kaguya-sama*

- Kaguya-sama wa Kokurasetai: Tensai-tachi no Renai Zunousen
- Kaguya-sama wa Kokurasetai? Tensai-tachi no Renai Zunousen
- Kaguya-sama wa Kokurasetai: Tensai-tachi no Renai Zunousen OVA
- Kaguya-sama wa Kokurasetai: Tensai-tachi no Renai Zunousen 3`,
			},
			{ quoted: m },
		);
	} else if (text === "himouto umaru-chan") {
		conn.sendMessage(
			m.chat,
			{
				text: `- Himouto! Umaru-chan
- Himouto! Umaru-chan OVA
- Himouto! Umaru-chan R

Gak Wajib ditonton :
- Himouto! Umaru-chan'S`,
			},
			{ quoted: m },
		);
	} else if (text === "saiki kusou") {
		conn.sendMessage(
			m.chat,
			{
				text: `*Ururan Nonton Saiki Kusuo ࿐໋*

Menurut tanggal rilis
- Saiki Kusuo no Ψ-nan (ONA)
- Saiki Kusuo no Ψ-nan
- Saiki Kusuo no Ψ-nan 2nd Season
- Saiki Kusuo no Ψ-nan Conclusion
- Saiki Kusuo no Ψ-nan: Shidou-hen`,
			},
			{ quoted: m },
		);
	} else if (text === "one piece") {
		conn.sendMessage(
			m.chat,
			{
				text: `*Urutan Nonton One Piece ࿐໋*

*_Full Series:_*
*【 East Blue Saga 】*
- Romance Dawn: Episode 1-3
- Orange Town: Episode 4-8
- Syrup Village: Episode 9-18
*- Movie 1: One Piece: The Movie*
- Baratie: Episode 19-30
- Arlong Park: Episode 31-44
- Loguetown: Episode 45
- Buggy Adventure: Episode 46-47
- Loguetown: Episode 48-53
- Warship Island Arc: Episode 54-61
*- Movie 2: Clockwork Island Adventure*

*【 Arabasta Saga 】*
- Reverse Mountain: Episode 62-63
- Whisky Peak: Episode 64-67
- Diary of Koby-Meppo: Episode 68-69
- Little Garden: Episode 70-77
- Drum Island: Episode 78-91
- Arabasta: Episode 92-130
*- Movie 3: Chopper’s Kingdom on the Island of Strange Animals*
- Post-Arabasta: 131-135
*Movie 8: The Desert Princess and the Pirates: Adventures in Alabasta*

*【 Sky Island Saga 】*
- Goat Island: Episode 136-138
- Ruluka Island: Episode 139-143
- Jaya: Episode 144-152
*- Movie 4: Dead End Adventure*
- Skypiea: Episode 153-195
*- Movie 5: The Cursed Holy Sword*
- G-8: Episodes 196-206
- Long Ring Long Land: Episode 207-219
- Oceans Dream: Episode 220-224
*- Movie 6: Baron Omatsuri and the Secret Island*
Foxy’s Return: Episode 225-228

*【 Water 7 Saga 】*
- Water 7: Episode 229-263
*- Movie 7: Giant Mecha Soldier of Karakuri Castle*
- Enies Lobby: Episode 264-290, 293-302, 304-312
- Boss Luffy Historical Specials: Episode 291-292, 303, 406-407
- Post-Enies Lobby: Episode 313-325

*【 Thriller Bark 】*
- Ice Hunter: Episode 326-335
- Chopper Man Special: Episode 336
*- Movie 9: Episode of Chopper Plus: Bloom in the Winter, Miracle Sakura*
- Thriller Bark: Episode 337-381
- Spa Island: Episode 382-384

*【 Summit War Saga 】*
- Sabaody Archipelago: Episode 385-405
- Amazon Lily: Episodes 408-417
- Straw Hats Separation: Episode 418-421
- Impel Down: Episode 422-425
- A Gold Lion's Ambition: Episode 426-429
*- One Piece Episode 0*
*- Movie 10: One Piece Film: Strong World*
- Impel Down: Episode 430-452
- Straw Hats Separation: Episodes 453-456
- Marineford: Episodes 457-489
- Post-War: Episodes 490-491
- Toriko Crossover: Episode 492
- Post-War: Episode 493-516
*- One Piece 3D2Y: Ace no shi wo Koete! Luffy Nakama Tono Chikai*

*【 Fish-Man Island Saga 】*
- Return to Sabaody: Episode 517-522
- Fish-Man Island: Episode 523-541
- Toriko Crossover: Episode 542
*- Movie 11: One Piece 3D: Straw Hat Chase*
Fish-Man Island: Episode 543-574

*【 Dressrosa Saga 】*
- Z’s Ambition: Episodes 575-578
*- One Piece: Episode of Merry - Mou Hitori no Nakama no Monogatari*
*- One Piece Episode of Luffy: Hand Island Adventure*
*- Movie One Piece Film: Z*
*- One Piece: Adventure of Nebulandia*
- Punk Hazard: Episode 579-589
- Toriko & Dragon Ball Crossover: Episode 590
- Punk Hazard: Episode 591-625
- Caesar Retrieval: Episode 626-628
- Dressrosa: Episode 629-746
*- One Piece: Episode of Sabo - 3 Kyoudai no Kizuna Kiseki no Saikai to Uketsugareru Ishi*

*【 Yonkou Saga 】*
- Silver Mine: Episode 747-750
*- Movie 13: One Piece Film: Gold*
*- One Piece: Heart of Gold*
- Zou: Episode 751-779
- Marine Rookie: Episode 780-782
- Whole Cake Island: Episode 783-877
- Levely: Episode 878-889
- Cidre Guild: Episode 895-896
*- Movie 14: One Piece: Stampede*
- Wano Country 1&2: Episode 890-958
- 20th Anniversary: Episode 907
- Wano Country Act 3: 959-On Going

_*Skipable Filler*_
Episode ini dapat dilewati karena biasanya memiliki sedikit pengaruh pada plot utama dan karakter cerita.

*-* _Warship Island ( 54-61)_ – Ini adalah arc pertama yang tidak didasarkan pada manga, menjadikannya episode filler pertama One Piece.

*-* _Post-Alabasta (131-135)_ – Arc filler ini menyediakan lima episode yang berdiri sendiri yang menggambarkan masa lalu dan tujuan banyak Bajak Laut Topi Jerami. Baik Luffy maupun Robin tidak diberi episode mereka sendiri.

*-* _Goat Island (136-138)_ – Bajak Laut Topi Jerami membantu seorang lelaki tua bernama Zenny di sebuah pulau untuk melarikan diri dari penangkapan oleh marinir sambil bersembunyi dari mereka.

*-* _Ruluka Island (139-143)_ – Going Merry rusak setelah diserang oleh Ape’s Concert. Topi Jerami kemudian dikirim ke Ruluka untuk menambal kapal sebelum bisa melanjutkan perjalan.

*-* _G-8 (196-206)_ – Arc filler ini, dengan 11 episode, adalah yang terpanjang dari seri. Namun, itu dianggap sebagai arc filler terbaik One Piece berkat antagonisnya yang menarik dan menghibur.

*-* _Ocean’s Dream (220-224)_ – Arc ini terinspirasi oleh video game One Piece, “Ocean’s Dream” untuk PlayStation.

*-* _Foxy (225-226)_ – Selama arc ini, kru Topi Jerami harus berurusan dengan bajak laut Foxy sekali lagi.

*-* _Ice Hunter/Lovely Land (326-335)_ – Dalam arc ini, para kru berhadapan dengan kelompok pemburu hadiah yang dikenal sebagai Keluarga Accino di sebuah pulau musim dingin.

*-* _Spa Island (382-384)_ – Ini adalah arc pengisi lain di mana bajak laut Foxy mengambil alih sebagai antagonis.

*-* _Little East Blue (426-429)_ – Arc prolog untuk film One Piece: Strong World. Jika tertarik untuk melihat filmnya, maka tonton ini dulu.

*-* _Z (575-578)_ – Mirip dengan Little East Blue, arc ini memiliki ikatan dengan film One Piece: Z.

*-* _Caesar Retrieval (626-628)_ – Caesar Clown diculik dari Thousand Sunny oleh karakter misterius dengan kemampuan yang tidak biasa.

*-* _Silver Mine (747-750)_ – Kru Topi Jerami berusaha untuk melarikan diri dari Silver Mine, dan arc ini juga berfungsi sebagai pendahuluan untuk One Piece: Gold.

*-* _Marine Rookie (780-782)_ – Dalam arc ini, kelompok Luffy menyusup ke pangkalan laut untuk kedua kalinya.

*-* _Cidre Guild (895-896)_ – Hanya ada dua episode di filler arc ini, yang merupakan yang terpendek di seluruh anime. Selain itu, ini adalah arc khusus yang terhubung ke film One Piece: Stampede.`,
			},
			{ quoted: m },
		);
	} else if (text === "gochuuman wa usagi desu ka") {
		conn.sendMessage(
			m.chat,
			{
				text: `*Urutan Nonton Gochuumon wa Usagi Desu ka? ࿐໋*

- Gochuumon wa Usagi desu ka?
- Gochuumon wa Usagi desu ka?? Season 2
- Gochuumon wa Usagi desu ka??: Dear My Sister
- Gochuumon wa Usagi desu ka??: Sing For You
- Gochuumon wa Usagi desu ka? Bloom Season 3`,
			},
			{ quoted: m },
		);
	} else if (text === "ao no exorcist") {
		conn.sendMessage(
			m.chat,
			{
				text: `*Urutan nonton Ao no Exorcist ࿐໋*

- Ao no Exorcist
- Ao no Exorcist: Ura Ex
- Ao no Exorcist: Kuro no Iede
- Ao no Exorcist Movie
- Ao no Exorcist Movie Special
- Ao no Exorcist: Kyoto Fujouou-hen
- Ao no Exorcist: Kyoto Fujouou-hen OVA

Versi Rekomendasi : 
- Ao no Exorcist
- Ao no Exorcist Movie
- Ao no Exorcist: Kyoto Fujouou-hen`,
			},
			{ quoted: m },
		);
	} else if (text === "mahouka koukou") {
		conn.sendMessage(
			m.chat,
			{
				text: `*Urutan Nonton Mahouka Koukou ࿐໋*

- Mahouka Koukou no Rettousei: Tsuioku-hen
- Mahouka Koukou no Rettousei
- Mahouka Koukou no Yuutousei (Spin off)
- Mahouka Koukou no Rettousei: Raihousha-hen
- Mahouka Koukou no Rettousei Movie: Hoshi wo Yobu Shoujo
- Mahouka Koukou no Rettousei Zoku-hen (belum rilis)`,
			},
			{ quoted: m },
		);
	} else if (text === "nanatsu no taizai") {
		conn.sendMessage(
			m.chat,
			{
				text: `*Urutan Nonton Nanatsu No Taizai ࿐໋*

Berdasarkan Alur :
- Nanatsu No Taizai 
- Nanatsu No Taizai: Ban no Bangai-hen
- Nanatsu No Taizai: Imashime no Fukkatsu
- Nanatsu No Taizai Movie: Tenkuu no Torawarebito
- Nanatsu No Taizai: Eiyuu-tachi wa Hashagu
- Nanatsu No Taizai: Kamigami no Gekirin
- Nanatsu No Taizai: Fundo no Shinpan
- Nanatsu No Taizai Movie: Hikari ni Norowareshi Mono-tachi

Berdasarkan Tanggal Rilis :
- Nanatsu No Taizai
- Nanatsu No Taizai; Ban no Bangai-hen
- Nanatsu No Taizai: Seisen no Shirushi
- Nanatsu No Taizai: Imashime no Fukkatsu
- Nanatsu No Taizai Movie: Tenkuu no Torawarebito
- Nanatsu No Taizai: Revival of the Commandments OVA - Heroes Frolic
- Nanatsu No Taizai: Kamigami no Gekirin
- Nanatsu No Taizai: Fundo no Shinpan
- Nanatsu No Taizai Movie: Hikari ni Norowareshi Mono-tachi

Rekomendasi (+) :
- Nanatsu No Taizai
- Nanatsu No Taizai: Imashime no Fukkatsu
- Nanatsu No Taizai Movie: Tenkuu no Torawarebito
- Nanatsu No Taizai: Kamigami no Gekirin
- Nanatsu No Taizai: Fundo no Shinpan
- Nanatsu No Taizai Movie: Hikari ni Norowareshi Mono-tachi`,
			},
			{ quoted: m },
		);
	} else if (text === "naruto shippuuden") {
		conn.sendMessage(
			m.chat,
			{
				text: `*Urutan Nonton Anime Naruto Shippuuden ࿐໋*

「 Full Series: 」
*【 Naruto Homecoming 】*
- Kazekage Rescue Mission Arc: Episode 1-32
- Naruto: Shippuuden Movie 1
- Tenchi Bridge Reconnaissance Mission Arc: Episode 33-53
- Twelve Guardian Ninja Arc: Episode 54-71 (Filler)
- *Naruto: Shippuuden Movie - Bonds*

*【 Akatsuki Movement 】*
- Akatsuki Suppression Mission Arc: Episode (72-88)
- Three-Tails' Appearance Arc: Episode 89-112 (Filler)
- Itachi Pursuit Mission Arc: Episode 113-118
- Kakashi Gaiden Arc: Episode 119-121
- *Naruto: Shippuuden Movie - Inheritors of the will of fire*
- Tale of Jiraiya the Gallant Arc: Episode 122-133
- Fated Battle Between Brothers Arc: Episode 134-143
- Six-Tails Unleashed Arc: Episode 144-151 (Filler)

*【 Akatsuki Last Steps 】*
- Pain's Assault Part 1 Arc: Episode 152-169
- Naruto: Shippuuden Movie - The Lost Tower
- Pain's Assault Part 2 Arc: Episode 172-175
- The Locus of Konoha Arc: Episode 176-196 (Filler)
- Five Kage Summit Arc: Episode 197-214

*【 Shinobi World War 】*
- Fourth Shinobi World War: Countdown Part 1 Arc: 215-222
- *Naruto: Shippuuden Movie - Blood Prison*
- Paradise Life on Boat Arc: Episode 223-242 (Filler)
- Fourth Shinobi World War: Countdown Part 2 Arc: Episode 243-255
- Fourth Shinobi World War: Confrontation Part 1 Arc: Episode 256-289
- *Naruto: Shippuuden - Road To Ninja*
- Naruto Shippuden Power Arc: Episode 290-295 (Filler)
- Fourth Shinobi World War: Confrontation Part 2 Arc: Episode 296-321

*【 End Of Shinobi World War 】*
- Fourth Shinobi World War: Climax Part 1 Arc: Episode 322-348
- Kakashi's Anbu Arc: The  Shinobi that Lives in the Darkness: Episode 349-361 (Filler)
- Fourth Shinobi World War: Climax Part 2 Arc: Episode 362-377
- Birth of the Ten-Tails' Jinchuriki Part 1 Arc: Episode 378-393
- In Naruto's Footsteps: The Friends Paths Arc: Episode 394-413
- Birth of the Ten-Tails' Jinchuriki Part 2 Arc: Episode 414-431
- Jiraiya Shinobi HandBook: The Tale of Naruto the Hero Arc: Episode 432-450 (Filler)
- Itachi Shinden Book: Light and Darkness Arc: Episode 451-457
- Kaguya Ootsuki Strikes Arc: Episode 458-479

*【The Day of Peace has Arrived】*
- Childhood Arc: Episode 480-483 (Filler)
- Sasuke Shinden: Book of Sunrise Arc: Episode 484-488
- Shikamaru Hidden: A Cloud Drifting in Silent Darkness Arc: Episode 489-493
- *Naruto: Shippuuden - The Last*
- Konoha Hidden: The Perfect Day for a Wedding Arc: Episode 494-500

*Note: Filler diAnime Naruto agak berbeda dengan anime lain, yakni diAnime Naruto sendiri Filler banyak yang ngaruh ke jalan utamanya. Jadi banyak Filler yang saya gabung diArc utama soalnya sayang kalo gadiliat, saya kasih list fillernya kalau kalian emang bener bener anti filler.*

*Filler Episode List: 28, 57-71, 91-111, 144-151, 170-171, 176-196, 223-242, 257-260, 271, 279-281, 284-295, 303-320, 347-361, 376-377, 388-390, 394-413, 416-417, 422-423, 427-450, 464-468, 480-483*`,
			},
			{ quoted: m },
		);
	} else if (text === "dragon ball") {
		conn.sendMessage(
			m.chat,
			{
				text: `*Urutan Nonton Anime Dragon Ball Seres ࿐໋*
				
「 Berdasarkan Tanggal Rilis: 」
- Dragon Ball: Episode 1-43 (Filler: 30-33)
- *Dragon Ball Movie: The Bloods Rubies*
- Dragon Ball: Episode 44-70 (Filler: 45)
- *Dragon Ball Movie: Sleeping Princess in Devil's Castle*
- Dragon Ball: Episode 71-118 (Filler: 79-83)
- *Dragon Ball Movie: Mystical Adventure*
- Dragon Ball: Episode 119-153 (Filler: 127-132, 149-153)

「 Rekomendasi [No Movie]: 」
- Dragon Ball
- Dragon Ball Z
- Dragon Ball GT
- Dragon Ball Z Kai
- Super Dragon Ball Heroes`,
			},
			{ quoted: m },
		);
	} else if (text === "infinite stratos") {
		conn.sendMessage(
			m.chat,
			{
				text: `*Urutan Nonton Infinite Stratos ࿐໋*

- IS: Infinite Stratos 
- IS: Infinite Stratos Encore – Koi ni Kogareru Rokujuusou OVA 
- IS: Infinite Stratos 2 
- IS: Infinite Stratos 2 – Hitonatsu no Omoide OVA 
- IS: Infinite Stratos 2 – World Purge-hen OVA 
- IS: Infinite Stratos 2 – Infinite Wedding Special`,
			},
			{ quoted: m },
		);
	} else if (text === "saint seiya") {
		conn.sendMessage(
			m.chat,
			{
				text: `*Urutan Nonton Saint Seiya ࿐໋*

Urutan nonton dari Alur Cerita:
• Saint Seiya: The Lost Canvas - Meiou Shinwa
• Saint Seiya: The Lost Canvas - Meiou Shinwa 2
• Saint Seiya 
• Saint Seiya: Meiou Hades Juuni Kyuu-hen
• Saint Seiya: Meiou Hades Meikai-hen
• Saint Seiya: Meiou Hades Elysion-hen
• Saint Seiya: Tenkai-hen Josou - Overture
• Saint Seiya Omega

Untuk Movienya ada:
- *Saint Seiya: Shinku no Shounen Densetsu (1988)*
- *Saint Seiya: Jashin Eris (1987)*
- *Saint Seiya: Kamigami no Atsuki Tatakai (1988)*
- *Saint Seiya: Saishuu Seisen no Senshi-tachi (1989)*
- *Saint Seiya: Soul of Gold (2015)*

Alternative/Another/Recap Story:
- Saint Seiya: Legend of Sanctuary
- Knights of the Zodiac: Saint Seiya
- Saint Seiya Recap
- Saint Seiya: Saintia Shou
- Saint Seiya: Meiou Hades Juuni Kyuu-hen 
- Yomigaerishi Gold Saint-tachi no Shinwa
- Saint Seiya: Gold Saints Data File`,
			},
			{ quoted: m },
		);
	} else if (text === "yuru camp") {
		conn.sendMessage(
			m.chat,
			{
				text: `*Urutan nonton Yuru Camp△ ࿐໋*

- Yuru Camp△
- Yuru Camp△ Specials
- Heya Camp△
- Yuru Camp△ Season 2
- Yuru Camp△ Season 2 Specials
- Yuru Camp△ Movie`,
			},
			{ quoted: m },
		);
	} else if (text === "yuru yuri") {
		conn.sendMessage(
			m.chat,
			{
				text: `*Ururan Nonton Yuru Yuri ࿐໋*

- Yuru Yuri
- Yuru Yuri ♪♪
- Yuru Yuri Nachuyachumi!
- Yuru Yuri Nachuyachumi!+
- Yuru Yuri San☆Hai!
- Yuru Yuri, (Ten)
- Mini Yuri`,
			},
			{ quoted: m },
		);
	} else if (text === "yuuki yuuna") {
		conn.sendMessage(
			m.chat,
			{
				text: `*Urutan Nonton Yuuki Yuuna wa Yuusha de Aru ࿐*

Menurut tanggal rilis :
- Yuuki Yuuna wa Yuusha de Aru
- Yuuki Yuuna wa Yuusha de Aru: Washio Sumi no Shou Movie 1 - Tomodachi
- Yuuki Yuuna wa Yuusha de Aru: Washio Sumi no Shou Movie 2 - Tamashii
- Yuuki Yuuna wa Yuusha de Aru: Washio Sumi no Shou Movie 3 - Yakusoku
- Yuuki Yuuna wa Yuusha de Aru: Washio Sumi no Shou
- Yuuki Yuuna wa Yuusha de Aru: Yuusha no Shou
- Yuuki Yuuna wa Yuusha de Aru: Hidamari
- Yuuki Yuuna wa Yuusha de Aru Churutto!
- Yuuki Yuuna wa Yuusha de Aru: Dai Mankai no Shou

Gak wajib ditonton : 
- Yuuki Yuuna wa Yuusha-bu Shozoku
- Yuuki Yuuna wa Yuushabu Shozoku 2
- Yuuki Yuuna wa Yuushabu Shozoku 3`,
			},
			{ quoted: m },
		);
	} else if (args[0]?.toLowerCase() === "fate") {
		conn.sendMessage(
			m.chat,
			{
				text: `*Urutan Nonton Anime Fate Serie ࿐໋*

*【 Fate Story Timeline 】*
- Fate/Zero
- Fate/stay night 2006
- Fate/stay night : Unlimited Blade Works
- Fate/stay night : Heaven's Feel

*【 Untuk Another Animenya ada 】*
- Fate/Apocrypha
- Fate/Extra Last Encore
- Fate/Grand Order
- Fate/Kaleid Liner Prisma Illya
- Lord el-melloi II
- Fate/Prototype

*【 Spin-off 】*
- Carnival Phantasm
- Emiya-san Chi no kyou no gohan
- Guda guda order
- FGO Manga de Wakaru!
- Onegai Ainzbern Soudanshitsu
- Fate/Zero cafe

*【 Fate Series Full 】*
- Fate/Zero
- Fate/Zero ll
- Fate/Zero: Onegai! Einzbern Soudanshitsu
- Fate/Stay Night (2006)
- Fate/Stay Night TV Reproduction
- Fate/Stay Night: Unlimited Blade Work
- Fate/Stay Night: UBW S2
- Fate/Stay Night: UBW: Sunny Days
- Fate/Stay Night: Heaven Feel: Pressage Flower
- Fate/Stay Night: Heaven Feel: Lost Butterfly
- Fate/Stay Night: Heaven Feel: Spring Song
- Fate/Kaleid liner Prisma Illya
- Fate/Kaleid liner Prisma Illya 2wei!
- Fate/Kaleid liner Prisma Illya 2wei Herz!
- Fate/Kaleid liner Prisma Illya 3rei!!
- *Fate/Kaleid liner Prisma Illya Movie: Sekka no Chikai*
- *Fate/Kaleid liner Prisma Illya Movie: Licht - Namae no Nai Shoujo*
- Fate/Kaleid liner Prisma Illya (Zoku-hen) [TBA]
- Fate/Kaleid liner Prisma Illya Specials
- Fate/Kaleid liner Prisma Illya 2wei! Specials
- Fate/Kaleid liner Prisma Illya: Undoukai de Dance!
- Fate/Kaleid liner Prisma Illya 2wei Herz! Specials
- Fate/Kaleid liner Prisma Illya 3rei!! Specials
- Fate/Kaleid liner Prisma Illya: Prisma Phantasm
- Fate/Kaleid liner Prisma Illya 2wei!: Mahou Shoujo in Onsen Ryokou
- Fate/Kaleid liner Prisma Illya Movie: Sekka no Chikai - Kuro Sakura no Heya
- Fate/Kaleid liner Prisma Illya Movie: Licht - Namae no Nai Shoujo Mini Anime
- Fate/Grand Order: Babylonia Zettai Majuu Sensen 0: Initier Itium
- Fate/First Order
- Fate/Grand Order: Lost Room/Moonlight
- Fate/Grand Order: Shinsei Entaku Ryouiki Camelot 1- Wandering Agateram
- Fate/Grand Order: Shinsei Entaku Ryouiki Camelot 2 - Paladin Agateram
- Fate/Grand Order: Babylonia Zettai Majuu Sensen
- Fate/Grand Order: Zettai Majuu Sensen Babylonia - Initium Iter
- Fate/Grand Order: Shuukyoku Tokuiten - Kani Jikan Shinden Solomon
- Fate/Grand Order: 7 Himuro no Techi
- Manga de Wakeru! Fate/Grand Order
- Fate/Grand Carnival
- Carnival Phantasm
- Fate/Apochrypa
- Fate/Apochrypa Recaps
- Fate/Prototype
- Fate/Extra: Last Encore
- Fate/Extra: Last Encore - Illustrias Tendousetsu
- Fate/Zero Cafe
- Fate/Zero Remix
- Fate/Strange Fake
- Emiya-san Chi no Kyou no  Gohan
- Lord El-Melloi II Sei no Jikenbo: Rail Zeppelin Grace Note`,
			},
			{ quoted: m },
		);
	} else if (args[0]?.toLowerCase() === "toaru") {
		conn.sendMessage(
			m.chat,
			{
				text: `*Urutan Nonton Toaru Series ࿐໋*

*【 Touru berdasarkan Seriesnya 】*
- Toaru Majutsu no Index
- Toaru Majutsu no Index II
- Toaru Majutsu no Index III
- Toaru Majutsu no Index Movie: Endymion no Kiseki
- Toaru Kagaku no Railgun
- Toaru Kagaku no Railgun II
- Toaru Kagaku no Railgun III
- Toaru Kagaku no Accelerator

*【 Urutan berdasarkan alurnya 】*
- Toaru Kagaku no Railgun
- Toaru Kagaku no Railgun II
- Toaru Kagaku no Railgun III
- Toaru Kagaku no Accelerator
- Toaru Majutsu no Index
- Toaru Majutsu no Index II
- Toaru Majutsu no Index III
- Toaru Majutsu no Index Movie: Endymion no Kiseki`,
			},
			{ quoted: m },
		);
	} else if (args[0]?.toLowerCase() === "overlord") {
		conn.sendMessage(
			m.chat,
			{
				text: `*Urutan Nonton Overlord ࿐໋*

Urutan nonton overlord berdasarkan storyline :
- Overlord
- Overlord movie 1 : Funisha no Ou (Recap 1)
- Overlord movie 2 : Shikokku no Eiyuu (Recap 2)
- Overlord Ple Ple Pleiades
- Overlord ll
- Overlord Ple Ple Pleiades S2
- Overlord Ple Ple Pleiades: Nazarick Saidai no Kiki
- Overlord lll
- Overlord Ple Ple Pleiades Season 3

Spin Off : 
- Isekai Quartet S1
- Isekai Quartet S2`,
			},
			{ quoted: m },
		);
	} else if (args[0]?.toLowerCase() === "monogatari") {
		conn.sendMessage(
			m.chat,
			{
				text: `*Urutan Nonton Monogatari ࿐໋*

*【 Berdasarkan tahun Rilis 】*
- Bakemonogatari
- Nisemonogatari
- Nekomonogatari (Kuro)
- Nekomonogatari (Shiro)
- Kabukimonogatari
- Otorimonogatari
- Onimonogatari
- Koimonogatari
- Hanamonogatari
- Tsukimonogatari
- Owarimonogatari
- Koyomimonogatari
- Owarimonogatari Season 2
- Kizumonogatari I
- Kizumonogatari II
- Kizumonogatari III
- Zoku Owarimonogatari

*【 Berdasarkan season 】*
Season Pertama
- Kizumonogatari I
- Kizumonogatari II
- Kizumonogatari III
- Nekomonogatari (Kuro)
- Bakemonogatari
- Nisemonogatari
Season Kedua
- Kabukimonogatari
- Onimonogatari
- Nekomonogatari (Shiro)
- Owarimonogatari
- Otorimonogatari
- Koimonogatari
Season ketiga atau Final Season
- Tsukimonogatari
- Owarimonogatari S2
- Hanamonogatari
- Koyomimonogatari
- Zoku Owarimonogatari

*【 Rekomendasi 】*
- Kizumonogatari I
- Kizumonogatari II
- Kizumonogatari III
- Nekomonogatari (Kuro)
- Bakemonogatari
- Nisemonogatari
- Kabukimonogatari
- Onimonogatari
- Owarimonogatari
- Nekomonogatari (Shiro)
- Otorimonogatari
- Koimonogatari
- Tsukimonogatari
- Koyomimonogatari
- Owarimonogatari S2
- Hanamonogatari
- Zoku Owarimonogatari`,
			},
			{ quoted: m },
		);
	} else if (args[0]?.toLowerCase() === "danmachi") {
		conn.sendMessage(
			m.chat,
			{
				text: `*Urutan Nonton Dungeon ni Deai wo Motomeru no wa Machigatteiru no Darou ka ࿐໋*
				
- Dungeon ni Deai wo Motomeru no wa Machigatteiru no Darou ka
- Sword Oratoria (Ga Wajib)
- Dungeon ni Deai wo Motomeru no wa Machigatteiru no Darou ka OVA
- Dungeon ni Deai wo Motomeru no wa Machigatteiru Darou ka Movie: Orion no Ya
- Dungeon ni Deai wo Motomeru no wa Machigatteiru no Darou ka II
- Dungeon ni Deai wo Motomeru no wa Machigatteiru no Darou ka II OVA
- Dungeon ni Deai wo Motomeru no wa Machigatteiru no Darou ka III
- Dungeon ni Deai wo Motomeru no wa Machigatteiru no Darou ka III OVA
- Dungeon ni Deai wo Motomeru no wa Machigatteiru no Darou ka IV`,
			},
			{ quoted: m },
		);
	} else if (args[0]?.toLowerCase() === "oregairu") {
		conn.sendMessage(
			m.chat,
			{
				text: `*Urutan nonton Yahari Ore no Seishun Love Comedy wa Machigatteiru. ࿐໋*

- Yahari Ore no Seishun Love Comedy wa Machigatteiru.
- Yahari Ore no Seishun Love Comedy wa Machigatteiru.: Kochira Toshite mo Karera Kanojora no Yukusue ni Sachioukaran Koto o Negawazaru o Enai.
- Yahari Ore no Seishun Love Comedy wa Machigatteiru. Zoku
- Yahari Ore no Seishun Love Comedy wa Machigatteiru. Zoku: Kitto, Onna no Ko wa Osatou to Spice to Suteki na Nanika de Dekiteiru
- Yahari Ore no Seishun Love Comedy wa Machigatteiru. Kan
- Yahari Ore no Seishun Love Comedy wa Machigatteiru. Kan OVA`,
			},
			{ quoted: m },
		);
	} else if (args[0]?.toLowerCase() === "gintama") {
		conn.sendMessage(
			m.chat,
			{
				text: `*Urutan Nonton Gintama ࿐໋*

- Gintama (S1, 201 Eps)
- Gintama: Gekijouban Shinyaku Benizakura-Hen
- Gintama' (S2, 50 Eps)
- Gintama': Futon ni Haitte kara Buki Nokoshi ni Kizuite Neru ni Nerenai Toki mo Aru 
- Gintama' Enchousen (S3, 13 Eps)
- Gintama: Gekijoban Gintama Kanketsu-hen : Yorozuya yo Eien Nare
- Gintama°: Umai-mono wa Atomawashi ni Suru to Yokodorisareru kara Yappari Saki ni Kue
- Gintama° (2015, S4, 51 Eps)
- Gintama°: Aizome Kaori-Hen (OVA, 2 Eps)
- Gintama. (S5, 12 Eps)
- Gintama: Monster Strike Hen
- Gintama: Porori Hen (S6, 13 Eps)
- Gintama: Shirogane no Tamashii-hen (S7, 12 Eps)
- Gintama: Shirogane no Tamashii-hen : Kouhan-sen (S7 Part 2, 14 Eps)
- Gintama the Semi-Final (Spesial, 2 Eps)
- Gintama: The Finale`,
			},
			{ quoted: m },
		);
	} else if (args[0]?.toLowerCase() === "kaguya-sama") {
		conn.sendMessage(
			m.chat,
			{
				text: `*Urutan Nonton Kaguya-sama ࿐*

- Kaguya-sama wa Kokurasetai: Tensai-tachi no Renai Zunousen
- Kaguya-sama wa Kokurasetai? Tensai-tachi no Renai Zunousen
- Kaguya-sama wa Kokurasetai: Tensai-tachi no Renai Zunousen OVA
- Kaguya-sama wa Kokurasetai: Tensai-tachi no Renai Zunousen 3`,
			},
			{ quoted: m },
		);
	} else if (args[0]?.toLowerCase() === "haikyuu!!") {
		conn.sendMessage(
			m.chat,
			{
				text: `*Urutan nonton Haikyuu!! ࿐໋*

- Haikyuu!! Season 1
- Haikyuu!!: Lev Genzan
- Haikyuu!! Movie 1: Owari to Hajimari
- Haikyuu!! Movie 2: Shousha to Haisha
- Haikyuu!!: Karasuno Koukou vs. Shiratorizawa Gakuen Koukou Season 3
- Haikyuu!!: Riku vs. Kuu
- Haikyuu!! Movie 3: Sainou to Sense
- Haikyuu Movie 4: Concept no Tatakai
- Haikyuu!!: Tokushuu! Haru-kou Volley ni Kaketa Seishun
- Haikyuu!!: vs. "Akaten"
- Haikyuu!!: To the Top
- Haikyuu!! Season 5: To the Top Part 2nd Season`,
			},
			{ quoted: m },
		);
	} else if (args[0]?.toLowerCase() === "mushishi") {
		conn.sendMessage(
			m.chat,
			{
				text: `*Urutan nonton Mushishi ࿐໋*

- Mushishi
- Mushishi: Hihamukage
- Mushishi Zoku Shou
- Mushishi: Odoro no Michi
- Mushishi Zoku Shou 2nd season
- Mushishi: Suzu no Shizuku`,
			},
			{ quoted: m },
		);
	} else if (args[0]?.toLowerCase() === "barserk") {
		conn.sendMessage(
			m.chat,
			{
				text: `*Urutan nonton Berserk ࿐໋*

- Kenpuu Denki Berserk
- Berserk: Ougon Jidai-hen I - Haou no Tamago
- Berserk: Ougon Jidai-hen II - Doldrey Kourayku
- Berserk: Ougon Jidai-hen III -  Kourin
- Berserk
- Berserk 2nd Season
- Berserk Recap
 -Berserk: Majo no Tsuisou`,
			},
			{ quoted: m },
		);
	} else if (args[0]?.toLowerCase() === "bleach") {
		conn.sendMessage(
			m.chat,
			{
				text: `*Urutan Nonton Bleach ࿐໋*

*「 Rekomendasi: 」*
- Arc Agen Shinigami Eps 1-20
- Arc Menyelinap ke Soul Society Eps 21-32 & 34-41
- Arc Penyelamatan di Soul Society Eps 42-49 & 51-63
*- Bleach Movie 1: Memories of Nobody*
- Arc Kedatangan Arrancar Eps 110-127
- Arc Menyelinap ke Hueco Mundo Eps 138-146
- Arc Pertarungan Sengit Melawan Arrancar Eps 150-167
*- Bleach Movie 2: The Diamond Dust Rebellion - Mou Hitotsu no Hyourinmaru*
- Arc Arrancar Melawan Shinigami Eps 190-203
*- Bleach Movie 3: Fade to Black - Kimi no Na wo Yobu*
- Arc Masa Lalu Eps 206-212
- Arc Pertempuran Penentu Karakura Eps 215-226
- Arc Kehancuran Arrancar Eps 266-286
& 288-297
*- Bleach Movie 4: Jigoku-hen*
- Arc Kehancuran Arrancar Eps 300-302 & 306-310
- Arc Shinigami Pengganti yang Hilang Eps 343-354 & 356-366

*「 Full Series: 」*
- Arc Agen Shinigami Eps 1-20
*- Bleach: Memories in the Rain*
- Arc Menyelinap ke Soul Society Eps 21-32
- Pahlawan Baru Misterius Eps 33 (Filler)
- Arc Menyelinap ke Soul Society Eps 34-41
- Arc Penyelamatan di Soul Society Eps 42-49
- Menghidupkan kembali Singa Eps 50 (Filler)
- Arc Penyelamatan di Soul Society Eps 51-63
*- Bleach: The Sealed Sword Frenzy*
- Arc Bount Eps 64-109 (Filler)
*- Bleach Movie 1: Memories of Nobody*
- Arc Kedatangan Arrancar Eps 110-127
- Arc Hogyoku Dicuri Eps 128-137 (Filler)
- Arc Menyelinap ke Hueco Mundo Eps 138-146
- Sub Arc Hutan Menos Episode 147-149 (Filler)
- Arc Pertarungan Sengit Melawan Arrancar Eps 150-167
*- Bleach Movie 2: The Diamond Dust Rebellion - Mou Hitotsu no Hyourinmaru*
- Arc Menghentikan Kapten Shuusuke Eps 168-189 (Filler)
- Arc Arrancar Melawan Shinigami Eps 190-203
*- Bleach Movie 3: Fade to Black - Kimi no Na wo Yobu*
- Strategi Persuasi Ichigo Eps 204 (Filler)
- Turnamen dengan Cekungan Eps 205 (Filler)
- Arc Masa Lalu Eps 206-212
- Mini-Arc Karakuraizer Eps 213-214 (Filler)
- Arc Pertempuran Penentu Karakura Eps 215-226
- Kesalahan Indah Eps 227 (Filler)
- Musim Panas! Festival Baju Renang!! Eps 228 (Filler)
- Jeritan Jiwa? Karpet Shinigami Lahir! Eps 229 (Filler)
- Zanpakutou Unknown Tales Arc Eps 230-265 (Filler)
- Arc Kehancuran Arrancar Eps 266-286
- Ichigo dan Lampu Ajaib Eps 287 (Filler)
- Arc Kehancuran Arrancar Eps 288-297
- Film Festival Shinigami! Eps 298 (Filler)
- The Hell Verse: Prolog Eps 299 (Filler)
*- Bleach Movie 4: Jigoku-hen*
- Arc Kehancuran Arrancar Eps 300-302
- Dunia Nyata dan Shinigami! Tahun Baru Spesial! Eps 303 (Filler)
- Sisi Lain Cerita! Musuh Monster!? Eps 304 (Filler)
- Hisagi, Menuju Onsen! Eps 305 (Filler)
- Arc Kehancuran Arrancar Eps 306-310
- Pengisi Miscellaneous Eps 311-316 (Filler)
- Arc Gotei 13 Eps 317-342 (Filler)
- Arc Shinigami Pengganti yang Hilang Eps 343-354
- Tahun baru di Seireitei Khusus! Eps 355 (Filler)
- Arc Shinigami Pengganti yang Hilang Eps 356-366

*Note:* Filler adalah Episode yang dapat dilewati karena biasanya memiliki sedikit pengaruh pada plot utama dan karakter cerita.`,
			},
			{ quoted: m },
		);
	} else if (args[0]?.toLowerCase() === "magi") {
		conn.sendMessage(
			m.chat,
			{
				text: `Urutan Nonton Magi ࿐໋*

_Urutan Anime Magi dari Rilis :_
Magi: The Labyrinth Of Magic (Season 1)
Magi: The Kingdom Of Magic (Season 2)
Magi: Sinbad no Bouken (OVA)
Magi: Sinbad no Bouken (Season 3)

_Urutan Anime Magi dari Cerita :_
Magi: Sinbad no Bouken (OVA)
Magi: Sinbad no Bouken (Season 3)
Magi: The Labyrinth Of Magic (Season 1)
Magi: The Kingdom Of Magic (Season 2)`,
			},
			{ quoted: m },
		);
	} else if (args[0]?.toLowerCase() === "gundam") {
		conn.sendMessage(
			m.chat,
			{
				text: `*Urutan Gundam Universal Century (UC) ࿐໋*

• Mobile Suit Gundam The Origin (UC 0068) (Secara kronologi Origin lebih dulu dari Gundam 0079 tapi disarankan ditonton setelah Mobile Suit Gundam: Char’s Counterattack )
• Mobile Suit Gundam (UC 0079)
• Mobile Suit Gundam: The 08th MS Team (UC 0079)
• Mobile Suit Gundam War in The Pocket (UC 0079)
• Mobile Suit Gundam IGLOO (UC 0079)
• Mobile Suit Gundam Thunderbolt (UC 0079)
• Mobile Suit Gundam 0083: Stardust Memory (UC 0083)
• Mobile Suit Zeta Gundam (UC 0087)
• Mobile Suit Gundam ZZ (UC 0088)
• Mobile Suit Gundam: Char’s Counterattack (UC 0093)
• Mobile Suit Gundam Unicorn (UC 0096)
• Mobile Suit Gundam Narrative (UC 0097)
• Mobile Suit Gundam Hathaway (UC 0105)
• Mobile Suit Gundam F91 (UC 0123)
• Mobile Suit Victory Gundam (UC 0153)
• G-Savior(ini live action, ga usah ditonton kalo anda sayang dengan mata anda (UC 0223) 

Future Century
• Mobile Fighter G Gundam 

After Colony
• Gundam Wing
• Gundam Wing: Endless Waltz 

After War
• Gundam X 

Correct Century
• Turn A Gundam 

Cosmic Era
• Gundam Seed
• Gundam Seed Destiny 

Anno Domini
• Gundam 00 

Advanced Generation
• Gundam AGE 

Regild Century
• G no Reqonquista (jangan ditonton kalo gamau kena tumor otaķ) 

Post Disaster
• Gundam Iron Blooded Orphan 

Spin off (Our Universe)
• Gundam Build Fighter
• Gundam Build Fighter Try
• Gundam Build Divers
• Gundam Build Divers Re Rise`,
			},
			{ quoted: m },
		);
	} else if (args[0]?.toLowerCase() === "naruto") {
		conn.sendMessage(
			m.chat,
			{
				text: `*Urutan Nonton Naruto ࿐໋*

「 Full Series: 」
*【 Season 1 】*
- Prologue - Land of Waves Arc: Episode 1-19
- Chunin Exams Arc: Episode 20-67

*【 Season 2 】*
- Konoha Crush Arc: Episode 68-80
- Search for Tsunade Arc: Episode 81-100
- *Naruto The Movie: Clash in The Land of Snow*

*【 Season 3 】*
- Land of Tea Escort Mission Arc: Episode 101-106 (Filler)
- Sasuke Recovery Mission Arc: Episode 107-135
- Land of Rice Fields Investigation Mission Arc: Episode 136-140 (Filler)
- Eps 141 & 142 Mixed Canon/Filler
- *Naruto The Movie: Legend of The Stone of Gelel*

*【 Season 4 】*
- Mizuki Tracking Mission Arc: 142-147 (Filler)
- Bikochu Search Mission Arc: Episode 148-151 (Filler)
- Kurosuki Family Removal Mission Arc: 152-158 (Filler)
- Gosunkugi Capture Mission Arc: Episode 159-161 (Filler)
- Cursed Warrior Extermination Mission Arc: Episode 162-168 (Filler)
- Kaima Capture Mission Arc: Episode 169-174 (Filler)
- Buried Gold Excavation Mission Arc: Episode 175-177 (Filler)
- Star Guard Mission Arc: Episode 178-183 (Filler)

*【 Season 5 】*
- Sasuke Recovery Mission Arc: Episode 184-186 (Filler)
- Peddlers Escort Mission Arc: Episode 187-194 (Filler)
- *Naruto The Movie: Guardian of The Crescent Moon Kingdom*
- Third Great Beast Arc: Episode 195-196 (Filler)
- Konoha Plans Recapture Mission Arc: Episode 197-202 (Filler)
- Yakumo Kurama Rescue Mission Arc: Episode 203-208 (Filler)
- Gantetsu Escort Mission Arc: Episode 209-212 (Filler)
- Menma Memory Search Mission Arc: Episode 213-215 (Filler)
- Sunagakure Support Mission: Episode 216-219 (Filler)
- Departure Eps 220 Mixed Canon/Filler

*Note:* Filler adalah Episode yang dapat dilewati karena biasanya memiliki sedikit pengaruh pada plot utama dan karakter cerita.`,
			},
			{ quoted: m },
		);
	} else if (args[0]?.toLowerCase() === "digimon") {
		conn.sendMessage(
			m.chat,
			{
				text: `*Urutan Nonton Anime Digimon ࿐໋*

「 Berdasarkan Tanggal Rilis: 」
- Digimon Adventure
- Digimon Adventure 02
- Digimon Tamers
- Digimon Frontier
- Digimon Data Squad
- Digimon Fusion
- Digimon Adventure Tri
- Digimon Universe: App Monsters
- Digimon Ghost Game

「 Full Series/Sesuai Series: 」
*【 Season 1 】*
- Digimon Adventure 
- *Digimon Adventure Movie 1*
- *Digimon Adventure: Our War Game*

*【 Season 2 】*
- Digimon Adventure 02
- *Digimon Adventure 02 Movie: Digimon Hurricane Touchdown*
- *Digimon Adventure 02 Movie: Revenge of Diaboromon*

*【 Season 3 】*
- Digimon Tamers
- *Digimon Tamers Movie: The Adventures Battle*
- *Digimon Tamers Movie: Digimon Runaway Express*

*【 Season 4 】*
- Digimon Frontier
- *Digimon Frontier Movie: Revival of the Ancient Digimon!*

*【 Season 5 】*
- Digimon Savers
- *Digital Monster X-Evolution*
- *Digimon Savers Movie: Ultimate Power! Activate Burst Mode*

*【 Season 6 】*
- Digimon Xros Wars

*【 Season 7 】*
- Digimon Xros Wars: The Young Hunters Who Leapt Through Time

*【 Season 8 】*
- Digimon Adventure Tri
- *Digimon Adventure Tri Movie: Saikai*
- *Digimon Adventure Tri Movie: Ketsui*
- *Digimon Adventure Tri Movie: Kokuhaku*
- *Digimon Adventure Tri Movie: Soushitsu*
- *Digimon Adventure Tri Movie: Kyousei*
- *Digimon Adventure Tri Movie: Bokura no Mirai*

*【 Season 9 】*
- Digimon Universe: Appli Monster

*【 Season 10 】*
- Digimon Adventure (2020)

「 Another Movie: 」
- Digimon Adventure 3D: Digimon Grand Prix
- Digimon Savers 3D: The Digital World in Imminent Danger!`,
			},
			{ quoted: m },
		);
	} else if (args[0]?.toLowerCase() === "grisaia") {
		conn.sendMessage(
			m.chat,
			{
				text: `*Urutan Nonton Grisaia ࿐໋*

*「 Berdasarkan Alur: 」*
- Season 1: Grisaia no Kajitsu
- Grisaia no Kajitsu Specials
- Grisaia no Meikyuu: Caprice no Mayu 0
- Season 2: Grisaia no Rakuen
- Grisaia no Meikyuu: Caprice no Mayu 0 – Takizono Basketball Club no Nama Cream Party!
- Grisaia no Rakuen Specials
- *Grisaia: Phantom Trigger The Animation*
- *Grisaia: Phantom Trigger The Animation – Stargazer*

*「 Berdasarkan Tahun Rilis: 」*
_TV Series_
- Grisaia no Kajitsu (2014)
- Grisaia no Rakuen (2015)
_Specials_
- Grisaia no Kajitsu Specials (2014)
- Grisaia no Meikyuu: Caprice no Mayu 0 (2015)
- Grisaia no Meikyuu: Caprice no Mayu 0 - Takizono Basketball Club no Nama Cream Party! (2015)
- Grisaia no Rakuen Specials (2015)
_Movies_
- Grisaia: Phantom Trigger the Animation (2019)
- Grisaia: Phantom Trigger the Animation - Stargazer (2020)`,
			},
			{ quoted: m },
		);
	} else if (args[0]?.toLowerCase() === "kingdom") {
		conn.sendMessage(
			m.chat,
			{
				text: `*Urutan Nonton Kingdom ࿐໋*

- Kingdom Season 1
- Kingdom Season 2
- Kingdom Season 3
- Kingdom Season 4 (2024)`,
			},
			{ quoted: m },
		);
	} else if (args[0]?.toLowerCase() === "meitantei conan") {
		conn.sendMessage(
			m.chat,
			{
				text: `*Urutan Nonton Meitantei Conan*

- Eps 1-54
- *Meitantei Conan Movie 01: Tokei Jikake no Matenrou*
- Eps 55-97
- *Meitantei Conan Movie 02: Jyuuyonbanme no Target*
- Eps 98-140
- *Meitantei Conan Movie 03: Seikimatsu no Majutsushi*
- Eps 141-173
- _Meitantei Conan OVA 01: Conan VS KID VS YAIBA_
- Eps 174-186
- *Meitantei Conan Movie 04: Hitomi no Naka no Ansatsusha*
- Eps 187-231
- *Meitantei Conan Movie 05: Tengoku e no Count Down*
- Eps 232-262
- _Meitantei Conan OVA 02: 16 Nin no Yougisha_
- Eps 263-275
- *Meitantei Conan Movie 06: Baker Street no Bourei*
- Eps 276-303
- _Meitantei Conan OVA 03: Conan to Heiji to Kieta Shounen_
- Eps 304-315
- *Meitantei Conan Movie 07: Meikyuu no Crossroad*
- Eps 316-344
- _Meitantei Conan OVA 04: Conan to Kid to Crystal Mother_
- Eps 345-356
- *Meitantei Conan Movie 08: Ginyoku no Magician*
- Eps 357-383
- _Meitantei Conan OVA 05: Hyouteki wa Kogoro! Shounen Tanteidan Maruchichousa_
- Eps 384-396
- *Meitantei Conan Movie 09: Suihei Senjou no Strategy*
- Eps 397-424
- _Meitantei Conan OVA 06: Kieta Daiya wo Oe! Conan & Heiji VS Kid!_
- Eps 425-434
- *Meitantei Conan Movie 10: Tantei-tachi no Requiem*
- Eps 435-452
- 
- Eps 453-459
- _Meitantei Conan OVA 07: Agasa-sensei no Chousenjou! Agasa vs Conan & Shounen Tanteidan_

*Segini dulu ya gan*

*Tebal* = Movie
_Miring_ = Ova`,
			},
			{ quoted: m },
		);
	} else if (args[0]?.toLowerCase() === "waduh") {
		conn.sendMessage(
			m.chat,
			{
				text: `tekspanjang`,
			},
			{ quoted: m },
		);
	} else if (args[0]?.toLowerCase() === "waduh") {
		conn.sendMessage(
			m.chat,
			{
				text: `tekspanjang`,
			},
			{ quoted: m },
		);
	} else if (args[0]?.toLowerCase() === "waduh") {
		conn.sendMessage(
			m.chat,
			{
				text: `tekspanjang`,
			},
			{ quoted: m },
		);
	} else if (args[0]?.toLowerCase() === "waduh") {
		conn.sendMessage(
			m.chat,
			{
				text: `tekspanjang`,
			},
			{ quoted: m },
		);
	} else if (args[0]?.toLowerCase() === "waduh") {
		conn.sendMessage(
			m.chat,
			{
				text: `tekspanjang`,
			},
			{ quoted: m },
		);
	} else if (args[0]?.toLowerCase() === "waduh") {
		conn.sendMessage(
			m.chat,
			{
				text: `tekspanjang`,
			},
			{ quoted: m },
		);
	} else if (args[0]?.toLowerCase() === "waduh") {
		conn.sendMessage(
			m.chat,
			{
				text: `tekspanjang`,
			},
			{ quoted: m },
		);
	} else if (args[0]?.toLowerCase() === "waduh") {
		conn.sendMessage(
			m.chat,
			{
				text: `tekspanjang`,
			},
			{ quoted: m },
		);
	} else if (args[0]?.toLowerCase() === "waduh") {
		conn.sendMessage(
			m.chat,
			{
				text: `tekspanjang`,
			},
			{ quoted: m },
		);
	} else if (args[0]?.toLowerCase() === "waduh") {
		conn.sendMessage(
			m.chat,
			{
				text: `tekspanjang`,
			},
			{ quoted: m },
		);
	} else if (args[0]?.toLowerCase() === "waduh") {
		conn.sendMessage(
			m.chat,
			{
				text: `tekspanjang`,
			},
			{ quoted: m },
		);
	} else if (args[0]?.toLowerCase() === "waduh") {
		conn.sendMessage(
			m.chat,
			{
				text: `tekspanjang`,
			},
			{ quoted: m },
		);
	} else if (args[0]?.toLowerCase() === "waduh") {
		conn.sendMessage(
			m.chat,
			{
				text: `tekspanjang`,
			},
			{ quoted: m },
		);
	} else if (args[0]?.toLowerCase() === "waduh") {
		conn.sendMessage(
			m.chat,
			{
				text: `tekspanjang`,
			},
			{ quoted: m },
		);
	} else if (args[0]?.toLowerCase() === "waduh") {
		conn.sendMessage(
			m.chat,
			{
				text: `tekspanjang`,
			},
			{ quoted: m },
		);
	} else if (args[0]?.toLowerCase() === "waduh") {
		conn.sendMessage(
			m.chat,
			{
				text: `tekspanjang`,
			},
			{ quoted: m },
		);
	} else if (args[0]?.toLowerCase() === "waduh") {
		conn.sendMessage(
			m.chat,
			{
				text: `tekspanjang`,
			},
			{ quoted: m },
		);
	}
};
handler.help = ["urutannonton"];
handler.tags = ["anime"];
handler.command = /^(urutannontonanime|un|urutannonton)$/i;

module.exports = handler;