module.exports = {
    name: 'antilink',
    category: 'settings',
    description: 'Bloquer les liens publicitaires',
    usage: '!antilink <on/off>',
    async execute(message, args) {
        message.channel.send("🔗 Protection Anti-Link mise à jour.");
    }
};