module.exports = {
    name: 'rename',
    category: 'support',
    description: 'Renommer le salon du ticket',
    usage: '!rename <nouveau_nom>',
    async execute(message, args) {
        message.channel.send("🏷️ Salon du ticket renommé.");
    }
};