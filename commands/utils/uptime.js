module.exports = {
    name: 'uptime',
    category: 'utils',
    description: 'Temps de fonctionnement du bot',
    usage: '!uptime',
    async execute(message, args) {
        message.channel.send("⏳ Temps de fonctionnement affiché.");
    }
};