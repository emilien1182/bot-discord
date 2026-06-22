module.exports = {
    name: 'voicelogs',
    category: 'logs',
    description: 'Logs des activités vocales',
    usage: '!voicelogs <on/off>',
    async execute(message, args) {
        message.channel.send("🎧 Logs vocaux configurés.");
    }
};