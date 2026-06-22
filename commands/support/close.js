module.exports = {
    name: 'close',
    category: 'support',
    description: 'Fermer un ticket',
    usage: '!close',
    async execute(message, args) {
        message.channel.send("🔒 Ticket fermé.");
    }
};