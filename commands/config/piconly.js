module.exports = {
    name: 'piconly',
    category: 'config',
    description: 'Activer le mode images uniquement',
    usage: '!piconly <on/off>',
    async execute(message, args) {
        message.channel.send("🖼️ Mode piconly activé.");
    }
};