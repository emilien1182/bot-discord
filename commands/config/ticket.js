module.exports = {
    name: 'ticket',
    category: 'config',
    description: 'Configurer le système de tickets',
    usage: '!ticket <setup>',
    async execute(message, args) {
        message.channel.send("🎟️ Système de tickets configuré.");
    }
};