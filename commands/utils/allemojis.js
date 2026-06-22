module.exports = {
    name: 'allemoji',
    category: 'utils',
    description: 'Voir tous les emojis du serveur',
    usage: '!allemoji',
    async execute(message, args) {
        message.channel.send("😊 Liste des emojis du serveur.");
    }
};