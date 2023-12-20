const handler = async (m, {conn, isAdmin}) => {
  if (m.fromMe) return;
  if (isAdmin) return conn.reply(m.chat, '*You Are Aldready An Admin✅*', m)
  try {
    await conn.groupParticipantsUpdate(m.chat, [m.sender], 'promote');
  } catch {
    await conn.reply(m.chat, '*Error, It Was Not Possible To  Make You Admin❌*', m)
  }
};
handler.command = /^autoadmin$/i;
handler.owner = true;
handler.group = true;
handler.botAdmin = true;
module.exports = handler