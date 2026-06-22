module.exports = {
    name: 'prefix',
    category: 'control',
    description: 'Voir le préfixe actuel du bot',
    usage: '!prefix',
    async execute(message, args) {
        message.channel.send("🔢 Le préfixe actuel est `!`");
    }
};