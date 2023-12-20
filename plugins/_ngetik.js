let handler = m => m

handler.before = async (m) {
  const chat = global.db.data.chats[m.chat];
  if (!chat.ngetik) return;

  const commands = Object.values(global.plugins).flatMap((plugin) => [].concat(plugin.command));
  const presenceStatus = commands.some((cmd) => (cmd instanceof RegExp ? cmd.test(m.text) : m.text.includes(cmd))) ? 'composing' : 'composing';

  if (presenceStatus) await this.sendPresenceUpdate(presenceStatus, m.chat);
}

module.exports = handler