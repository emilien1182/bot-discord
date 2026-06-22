module.exports = {
    name: 'unwl',
    category: 'antiraid',
    description: 'Retirer un membre de la whitelist',
    usage: '!unwl <membre>',
    async execute(message, args) {
        message.channel.send("❌ Membre retiré de la Whitelist.");
    }
};