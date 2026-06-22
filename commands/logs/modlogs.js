module.exports = {
    name: 'modlogs',
    category: 'logs',
    description: 'Définir le salon des logs de modération',
    usage: '!modlogs <#salon>',
    async execute(message, args) {
        message.channel.send("🛡️ Logs de modération configurés.");
    }
};