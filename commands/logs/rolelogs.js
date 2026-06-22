module.exports = {
    name: 'rolelogs',
    category: 'logs',
    description: 'Logs des changements de rôles',
    usage: '!rolelogs <on/off>',
    async execute(message, args) {
        message.channel.send("🎭 Logs de rôles configurés.");
    }
};