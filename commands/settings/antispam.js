module.exports = {
    name: 'antispam',
    category: 'settings',
    description: 'Bloquer le spam de messages',
    usage: '!antispam <on/off>',
    async execute(message, args) {
        message.channel.send("🚫 Protection Anti-Spam mise à jour.");
    }
};