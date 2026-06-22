module.exports = {
    name: 'raidlogs',
    category: 'logs',
    description: 'Logs des alertes anti-raid',
    usage: '!raidlogs <#salon>',
    async execute(message, args) {
        message.channel.send("🚨 Logs de raid configurés.");
    }
};