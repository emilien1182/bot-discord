module.exports = {
    name: 'unowner',
    category: 'control',
    description: 'Retirer un propriétaire',
    usage: '!unowner <membre>',
    async execute(message, args) {
        message.channel.send("👑 Propriétaire retiré.");
    }
};