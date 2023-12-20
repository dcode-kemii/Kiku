let handler = async (m, { conn, args }) => {
    const sources = [
        { name: 'Chatbot', jid: '6281295891971@s.whatsapp.net' },
        { name: 'YouChat', jid: '15854968266@s.whatsapp.net' },
        { name: 'MobileGPT', jid: '27767346284@s.whatsapp.net' },
        { name: 'WizAI', jid: '4915151853491@s.whatsapp.net' },
        { name: 'Shmooz', jid: '12014166644@s.whatsapp.net' },
        { name: 'GuideGeek', jid: '12058922070@s.whatsapp.net' },
        { name: 'Jinni', jid: '447457403599@s.whatsapp.net' },
        { name: 'Santa Claus', jid: '15855398883@s.whatsapp.net' },
        { name: 'Rose', jid: '6281278380339@s.whatsapp.net' },
    ];
    let id = m.chat;

    if (!conn.chatbot) conn.chatbot = {};

    if (args[0] === 'set') {
        if (conn.chatbot[id] && conn.chatbot[id].state !== 'WAITING') {
            return conn.reply(m.chat, '*Tidak bisa mengatur source karena sedang dalam sesi chatbot chat*', m);
        }
        if (args[1] && !isNaN(args[1])) {
            let selectedSourceIndex = parseInt(args[1]) - 1;
            if (selectedSourceIndex >= 0 && selectedSourceIndex < sources.length) {
                let selectedSource = sources[selectedSourceIndex];
                conn.chatbot[id] = {
                    source: selectedSource.jid,
                    user: '',
                    state: 'WAITING',
                };
                return conn.reply(m.chat, `*Source telah diatur sesuai dengan pilihanmu: ${selectedSource.name}*\nGunakan "/chatbot start" untuk memulai sesi chatbot chat`, m);
            } else {
                return conn.reply(m.chat, '*Pilihan source tidak valid. Gunakan angka urutan source yang tepat*\nContoh: /chatbot set 1', m);
            }
        } else {
            let sourceList = sources.map((source, index) => `${index + 1}. ${source.name}`).join('\n');
            return conn.reply(m.chat, `*Daftar Source:*\n\n${sourceList}\n\nGunakan "/chatbot set [urutan]" untuk mengatur source`, m);
        }
    } else if (args[0] === 'start') {
        if (!conn.chatbot[id] || conn.chatbot[id].state !== 'WAITING') {
            return conn.reply(m.chat, '*Atur source terlebih dahulu dengan "/chatbot set [urutan]*"', m);
        }
        if (conn.chatbot[id].user === '') {
            conn.chatbot[id].user = m.sender;
            conn.chatbot[id].state = 'CHATTING';
            return conn.reply(m.chat, '*Percakapan dimulai!*', m);
        } else {
            return conn.reply(m.chat, '*Kamu sudah dalam sesi chatbot chat, menunggu partner*', m);
        }
    } else if (args[0] === 'stop') {
        if (conn.chatbot[id] && conn.chatbot[id].state === 'CHATTING') {
            delete conn.chatbot[id];
            return conn.reply(m.chat, '*Sesi chatbot chat dihentikan*', m);
        } else {
            return conn.reply(m.chat, '*Kamu tidak sedang dalam sesi chatbot chat*', m);
        }
    } else {
        const usage = `*Cara Penggunaan:*\n\n/chatbot set [urutan] - Mengatur source sesuai urutan yang tepat\n/chatbot start - Memulai sesi chatbot chat setelah source diatur\n/chatbot stop - Menghentikan sesi chatbot chat`;
        return conn.reply(m.chat, `Input salah. ${usage}`, m);
    }
};

handler.help = ['chatbot set *[urutan]*', 'chatbot start', 'chatbot stop'];
handler.tags = ['fun'];
handler.command = ['chatbot'];
handler.private = true;

module.exports = handler;