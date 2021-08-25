function handler(m) {
  // Ini cuma contoh, jgn di uncomment -_-
  this.sendContact(m.chat, '6282387704390', 'yoga ghanz', m)
  this.sendContact(m.chat, '6289601145546', 'sahabatku Dora :D', m)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
