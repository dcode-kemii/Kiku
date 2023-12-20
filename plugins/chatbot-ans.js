let handler = m => m

handler.before = async function (m, { match }) {
    if (!m.chat.endsWith('@s.whatsapp.net')) return false;
    this.chatbot = this.chatbot || {};
    let room = Object.values(this.chatbot).find(room => [room.source, room.user].includes(m.sender) && room.state === 'CHATTING');
    
    if (room && /^.*(chatbot (stop|set))/.test(m.text)) {
        return false;
    }
    
    if (room) {
        let other = [room.source, room.user].find(user => user !== m.sender);

        if (m.message.listMessage) {
            const description = m.message.listMessage.description;
            const sections = m.message.listMessage.sections;
            const more = String.fromCharCode(8206)
            const readMore = more.repeat(4001)
            let sectionText = `${description}\n\n`;
            sections.forEach(section => {
                sectionText += `${readMore}\n`;
                section.rows.forEach(row => {
                    sectionText += `${row.title}\n${row.description}\n*Send*: ${row.rowId}\n\n`;
                });
            });

            await this.sendMessage(other, { text: sectionText }, { quoted: null });
        } else if (m.message.buttonsMessage) {
            const description = m.message.buttonsMessage.contentText;
            const sections = m.message.buttonsMessage.buttons;
            const more = String.fromCharCode(8206)
            const readMore = more.repeat(4001)
            let sectionText = `${description}\n\n`;
                sectionText += `${readMore}\n`;
                sections.forEach(row => {
                    sectionText += `${row.buttonText.displayText}\n*Send*: ${row.buttonId}\n\n`;
                });

            await this.sendMessage(other, { text: sectionText }, { quoted: null });
        } else {
            await this.relayMessage(other, m.message, { messageId: m.id });
        }
    }
    
    return true;
}
module.exports = handler;