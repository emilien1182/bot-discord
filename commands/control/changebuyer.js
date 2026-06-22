module.exports = {
    name: 'changebuyer',
    category: 'control',
    description: 'Changer l\'acheteur du bot',
    usage: '!changebuyer <nouveau_buyer>',
    async execute(message, args) {
        message.channel.send("🛒 Acheteur mis à jour.");
    }
};