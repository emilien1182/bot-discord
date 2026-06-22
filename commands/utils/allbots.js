module.exports = {
    name: 'allbot',
    category: 'utils',
    description: 'Voir tous les bots du serveur',
    usage: '!allbot',
    async execute(message, args) {
        message.channel.send("🤖 Liste de tous les bots du serveur.");
    }
};