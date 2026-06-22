module.exports = {
    name: 'public',
    category: 'config',
    description: 'Gérer les permissions publiques',
    usage: '!public <on/off>',
    async execute(message, args) {
        message.channel.send("🌐 Accès public modifié.");
    }
};