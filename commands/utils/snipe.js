module.exports = {
    name: 'snipe',
    category: 'utils',
    description: 'Voir le dernier message supprimé',
    usage: '!snipe',
    async execute(message, args) {
        message.channel.send("🎯 Dernier message supprimé : ...");
    }
};