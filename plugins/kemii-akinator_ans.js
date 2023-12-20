const teks = '0 - Ya\n1 - Tidak\n2 - Saya Tidak Tau\n3 - Mungkin\n4 - Mungkin Tidak\n5 - Kembali ke pertanyaan sebelumnya'
let handler = m => m
handler.before = async function(m) {
    if (global.db.data.users[m.sender].banned) return
    if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !m.text) return !0
    this.akinatorv2 = this.akinatorv2 || {};
    if (!this.akinatorv2[m.sender] || m.quoted.id != this.akinatorv2[m.sender].msg.key.id) return
    try {
        if (!somematch(['0', '1', '2', '3', '4', '5'], m.text)) return this.sendMessage(m.chat, {
            text: `[!] Jawab dengan angka 1, 2, 3, 4, atau 5\n\n${teks}`
        }, {
            quoted: this.akinatorv2[m.sender].msg
        })
        if (this.akinatorv2[m.sender].currentStep == '0' && m.text == '5') return m.reply('Anda telah mencapai pertanyaan pertama')
        if (m.text == '5') {
            await this.akinatorv2[m.sender].back();
            let soal = await this.sendMessage(m.chat, {
                text: `🎮 *Akinator Back* 🎮\n_step ${this.akinatorv2[m.sender].currentStep} ( ${this.akinatorv2[m.sender].progress.toFixed(2)} % )_\n\n@${m.sender.split('@')[0]}\n    ${this.akinatorv2[m.sender].question}\n\n${teks}`,
                mentions: [m.sender]
            }, {
                quoted: m
            })
            this.akinatorv2[m.sender].msg = soal
            this.akinatorv2[m.sender].currentStep = this.akinatorv2[m.sender].currentStep
            this.akinatorv2[m.sender].progress = this.akinatorv2[m.sender].progress
        } else {
            await this.akinatorv2[m.sender].step(m.text);
            if (this.akinatorv2[m.sender].progress >= 70 || this.akinatorv2[m.sender].currentStep >= 78) {
                await this.akinatorv2[m.sender].win();
                const anu = this.akinatorv2[m.sender].answers[0];
                await this.sendMessage(m.chat, {
                    image: {
                        url: anu.absolute_picture_path
                    },
                    caption: `🎮 *Akinator Answer* 🎮\n\nDia adalah *${anu.name}*\n_${anu.description}_`,
                    mentions: [m.sender]
                }, {
                    quoted: m
                })
                delete this.akinatorv2[m.sender]
            } else {
                let soal = await this.sendMessage(m.chat, {
                    text: `🎮 *Akinator* 🎮\n_step ${this.akinatorv2[m.sender].currentStep} ( ${this.akinatorv2[m.sender].progress.toFixed(2)} % )_\n\n@${m.sender.split('@')[0]}\n    ${this.akinatorv2[m.sender].question}\n\n${teks}`,
                    mentions: [m.sender]
                }, {
                    quoted: m
                })
                this.akinatorv2[m.sender].msg = soal
                this.akinatorv2[m.sender].currentStep = this.akinatorv2[m.sender].currentStep
                this.akinatorv2[m.sender].progress = this.akinatorv2[m.sender].progress
            }
        }
    } catch (e) {
        await m.reply(eror)
    }
    return !0
}
handler.exp = 0
module.exports = handler

function somematch(data, id) {
    let res = data.find(el => el === id)
    return res ? true : false;
}