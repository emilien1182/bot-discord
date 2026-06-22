module.exports = {
    name: 'setprefix',
    category: 'config',
    description: 'Changer le préfixe du bot',
    usage: '!setprefix <nouveau_préfixe>',
    async execute(message, args) {
        message.channel.send("🔢 Préfixe mis à jour.");
    }
};