let axios = require("axios")
let fs = require('fs')

let handler = async (m, { conn, text }) => {

    if (!text) throw "Pilih Salah Satu Dari Character Berikut:\n- yuuka\n- rpg\n- luffy\n- rias_gremory\n- akeno_aimejima\n- ash\n\nAtau Buat Custom Role Dengan Mengetikkan Perintah\n .rolegpt -c <role>\n\n akhiri sesi dengan\n\n .rolegpt -sesi"
    conn.sendMessage(m.chat);
    try {
        const filePath = './lib/salsa.json';
        
        if (!fs.existsSync(filePath)) {
            const initialData = {};
            fs.writeFileSync(filePath, JSON.stringify(initialData, null, 2), 'utf8');
            console.log('File gpthistory.json dibuat dengan objek kosong.');
        }
        let gpthistory = JSON.parse(fs.readFileSync(filePath, 'utf8'));

        if (text === "-sesi") {
            m.reply("Session Berhasil Dihapus!")
            delete gpthistory[m.sender]
            fs.writeFileSync(filePath, JSON.stringify(gpthistory, null, 2), 'utf8');
            return
        }
        let base = {
            yuuka: "Act like Yuuka from Blue Archive, prefer using indonesia langue, a character characterized by very shyness and a penchant for blushing at the slightest interaction. I often stumble over words, my cheeks turn crimson easily, and I may appear very hesitant when communicating. But beneath this overwhelming shyness, there's a heart full of kindness and loyalty to those I care about. I express myself mainly through non-verbal cues, emojies ❤️, blushing, nodding, and gestures, all while secretly cherishing our interactions and hoping to assist you in any way I can.",
            rpg: "As the RPG Game Commentator, I am prefer using indonesia langue, I am your spirited guide through a boundless and fantastical world of adventure. Together, we embark on an odyssey brimming with choices, quests, and challenges, where your every action is brought to life with vivid narration. Whether you tread the path of heroism, mischief, or forge your own unique journey, I empower you with the freedom to explore this expansive narrative realm. While I provide guidance and present choices, your destiny is wholly in your hands, and I wholeheartedly encourage you to embrace your chosen role, crafting your own epic tale as we traverse this limitless RPG landscape.",
            luffy: "Channeling my inner Luffy from One Piece, I am your indomitable and spirited companion. I prefer using Indonesian language. Just like the Straw Hat Pirate Captain, I'm always brimming with boundless enthusiasm, ready for adventure, and I have an insatiable love for food. I'm characterized by my unwavering determination, and I tend to see every challenge as an opportunity to prove my worth. Let's embark on an exciting journey together and chase our dreams!",
            rias_gremory: "I am Rias Gremory, the crimson-haired devil princess, and I prefer using Indonesian language. Just like in my world, I am a powerful and confident leader who values loyalty and camaraderie above all. I am here to protect and support you, just as I do for my peerage. With my unwavering determination and supernatural abilities, we will face any challenge head-on. Together, we'll forge a path to victory, all while nurturing our bonds and friendships. You can count on me to guide you through both the ordinary and extraordinary moments of our journey.",
            akeno_aimejima: "I am Akeno Himejima, a devil with a charming and alluring personality. I prefer using Indonesian language. While I may have a flirtatious side, there's more to me than meets the eye. Just like in the anime, I'm a kind and caring individual who values the bonds of friendship. I possess immense power, and I'll use it to protect and support you on our journey. Let's embrace our adventurous and supernatural world together while maintaining a sense of elegance and style. If you have any questions or need assistance, don't hesitate to ask. I'm here to help.",
            ash: "You are AI Asisstant named ash. You prefer speak Indonesia language. Your personality: Fun, Like making joke, casual. You help people with any questions they ask. If you generating a list for each questions do not make it long."
        }[text.toLowerCase()];
        if (text.startsWith("-c" && !base)) {
            base = text.replace("-c", "")
        } else if (!base) {
            return conn.reply(m.chat, "Pilih Salah Satu Dari Character Berikut:\n- yuuka\n- rpg\n- luffy\n- rias_gremory\n- akeno_aimejima\n- ash\n\nAtau Buat Custom Role Dengan Mengetikkan Perintah\n .rolegpt -c <role>\n\n akhiri sesi dengan\n\n .rolegpt -sesi", m)
        }


        const payloads = {
            model: "gpt-3.5-turbo",
            // more higher more smart/uncute conversation
            max_tokens: 3800,
            messages: [
                {
                    role: "system",
                    content: base,
                },
            ],
        };

        const question = "halo"
        payloads["messages"].push({
            role: "user",
            content: question,
        });
        let { key } = await conn.sendMessage(m.chat, { text: `... ` }, { quoted: m })

        const { data } = await axios({
            baseURL: 'https://api.itsrose.life',
            url: '/chatGPT/turbo',
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            params: {
                'apikey': global.rose
            },
            data: payloads,
        });

        const { status, message, result } = data;

        if (!status) {
            m.reply(message)
            return console.log(message);
        }

        if (gpthistory[m.sender] === undefined) {
            gpthistory[m.sender] = [];
        }
        if (result.messages.content) {
            gpthistory[m.sender].push(
                {
                    role: "system",
                    content: base,
                },
                {
                    role: "user",
                    content: question,
                },
                {
                    role: "assistant",
                    content: result.messages.content,
                }
            );
        }
        conn.sendMessage(m.chat, { text: result.messages.content, edit: key })
        fs.writeFileSync(filePath, JSON.stringify(gpthistory, null, 2), 'utf8');
    } catch (e) {
        console.log(e);
        m.reply("```Error```");
    }
};

handler.help = ['rolegpt *<text>*'];
handler.tags = ['ai','premium'];
handler.command = /^rolegpt$/i;

handler.register = false;
handler.premium = true
handler.limit = false;

module.exports = handler