let handler = async (m, {
    conn,
    text,
    args,
    usedPrefix,
    command
}) => {

    let a = text.split("|").slice(1)
    if (!a[1]) throw "Format\n" + usedPrefix + command + " halo |ya|gak"
    if (a[12]) throw "Kebanyakan pilihan, Format\n" + usedPrefix + command + " halo |ya|gak"
    if (checkDuplicate(a)) throw "Ada kesamaan isi dalam pesan!"
    let cap = "*Polling Request By* " + m.name + "\n*Pesan:* " + text.split("|")[0]

    const pollMessage = {
        name: cap,
        values: a,
        multiselect: false,
        selectableCount: 1
    }
    await conn.sendMessage(m.chat, {
        poll: pollMessage
    })

}
handler.help = ["poll pertanyaan|pilihan|pilihan"]
handler.tags = ["group"]
handler.command = /^po(l((l?ing|ls)|l)|ols?)$/i
handler.admin = true

module.exports = handler

function checkDuplicate(arr) {
    return new Set(arr).size !== arr.length
}