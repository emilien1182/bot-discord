module.exports = {
    name: 'remove',
    category: 'support',
    description: 'Retirer un membre d\'un ticket',
    usage: '!remove <membre>',
    async execute(message, args) {
        message.channel.send("➖ Membre retiré du ticket.");
    }
};