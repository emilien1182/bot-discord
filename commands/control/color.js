module.exports = {
    name: 'color',
    category: 'control',
    description: 'Changer la couleur principale des embeds',
    usage: '!color <hex>',
    async execute(message, args) {
        message.channel.send("🎨 Couleur des embeds mise à jour.");
    }
};