let handler = async (m, { conn }) => {
let user = global.db.data.users[m.sender]
    conn.sendMessage(m.chat, {
    react: {
      text: '😕',
      key: m.key,
    }
  });    
   user.warning += 1
 if (user.warning >= 1) {
            user.warning = 0
            global.db.data.users[m.sender].banned = true
        }
}

handler.customPrefix = /^(botkontol|bot kontol|botasu|bot asu|botsters|bot gila|botnyagoblok|bot nya goblok|bot goblok|bot sters|bot kentang|gilabotnya|hadeh bot kontol|bot ngentod|botngentod)$/i 
handler.command = new RegExp

module.exports = handler