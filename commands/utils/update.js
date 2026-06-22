module.exports = {
    name: 'update',
    category: 'utils',
    description: 'Vérifier les mises à jour',
    usage: '!update',
    async execute(message, args) {
        message.channel.send("🔄 Système à jour.");
    }
};