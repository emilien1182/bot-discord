module.exports = {
    name: 'messagelogs',
    category: 'logs',
    description: 'Logs des modifications de messages',
    usage: '!messagelogs <on/off>',
    async execute(message, args) {
        message.channel.send("💬 Logs de messages configurés.");
    }
};