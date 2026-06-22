module.exports = {
    name: 'slowmode',
    category: 'config',
    description: 'Définir le temps entre deux messages',
    usage: '!slowmode <secondes>',
    async execute(message, args) {
        message.channel.send("⏳ Slowmode configuré.");
    }
};