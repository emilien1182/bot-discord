module.exports = {
    name: 'alladmin',
    category: 'utils',
    description: 'Voir tous les administrateurs',
    usage: '!alladmin',
    async execute(message, args) {
        message.channel.send("👑 Liste des administrateurs récupérée.");
    }
};