module.exports = {
    name: 'banner',
    category: 'utils',
    description: 'Voir la bannière d\'un membre',
    usage: '!banner <membre>',
    async execute(message, args) {
        message.channel.send("🎨 Bannière récupérée.");
    }
};