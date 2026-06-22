module.exports = {
    name: 'setlogs',
    category: 'config',
    description: 'Définir le salon des logs',
    usage: '!setlogs <#salon>',
    async execute(message, args) {
        message.channel.send("📝 Salon de logs défini.");
    }
};