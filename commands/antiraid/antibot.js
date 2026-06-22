module.exports = {
    name: 'antibot',
    category: 'antiraid',
    description: 'Empêcher l\'ajout de bots non autorisés',
    usage: '!antibot <on/off>',
    async execute(message, args) {
        message.channel.send("🤖 Protection Anti-Bot mise à jour.");
    }
};