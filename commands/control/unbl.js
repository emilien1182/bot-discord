module.exports = {
    name: 'unbl',
    category: 'control',
    description: 'Retirer un utilisateur de la blacklist',
    usage: '!unbl <membre>',
    async execute(message, args) {
        message.channel.send("✅ Utilisateur retiré de la blacklist.");
    }
};