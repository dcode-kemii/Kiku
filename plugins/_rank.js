let handler = m => m

handler.before = function (m) {
  let user = global.db.data.users[m.sender]
       let rank
if ((user.owner === false) && (user.premium === false) && (user.helper === false) && (user.police === false) ) rank =  'Free Helper'
else if ((user.owner === false) && (user.premium === true) ) rank =  'Premium'
else if ((user.police === true) && (user.owner === false)) rank =  'Police'
else if ((user.police === true) && (user.premium === true)) rank =  'Police Premium'
else if ((user.helper === true) && (user.premium === true)) rank =  'Helper Premium'
else if ((user.helper === true) && (user.owner === true)) rank = 'Helper Owner'
else if ((user.helper === true) && (user.premium === false) && (user.owner === false)) rank = 'Free Helper'
else if ((user.owner === true) && (user.premium === true)) rank = 'Owner Premium'
else if ((user.owner === true) && (user.premium === false)) rank = 'Developer'
  user.rank = rank
  return true
}

module.exports = handler