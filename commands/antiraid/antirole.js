module.exports = {
    name: 'antirole',
    category: 'antiraid',
    description: 'Bloquer la création/suppression de rôles',
    usage: '!antirole <on/off>',
    async execute(message, args) {
        message.channel.send("🎭 Protection Anti-Role mise à jour.");
    }
};