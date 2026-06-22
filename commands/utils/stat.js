module.exports = {
    name: 'stat',
    category: 'utils',
    description: 'Statistiques du serveur',
    usage: '!stat',
    async execute(message, args) {
        message.channel.send("📈 Statistiques générales.");
    }
};