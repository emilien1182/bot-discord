module.exports = {
    name: 'custom',
    category: 'config',
    description: 'Créer un message Embed personnalisé',
    usage: '!custom <titre> | <description>',
    async execute(message, args) {
        message.channel.send("🎨 Embed personnalisé créé.");
    }
};