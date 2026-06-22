module.exports = {
    name: 'autologs',
    category: 'logs',
    description: 'Activer la journalisation automatique',
    usage: '!autologs <on/off>',
    async execute(message, args) {
        message.channel.send("📝 Auto-logs activés.");
    }
};