module.exports = {
    name: 'boostlogs',
    category: 'logs',
    description: 'Définir le salon des logs de boost',
    usage: '!boostlogs <#salon>',
    async execute(message, args) {
        message.channel.send("🚀 Logs de boost configurés.");
    }
};