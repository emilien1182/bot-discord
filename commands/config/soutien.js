module.exports = {
    name: 'soutien',
    category: 'config',
    description: 'Configurer le système de soutien',
    usage: '!soutien <on/off>',
    async execute(message, args) {
        message.channel.send("💖 Système de soutien configuré.");
    }
};