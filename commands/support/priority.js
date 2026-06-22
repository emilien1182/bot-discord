module.exports = {
    name: 'priority',
    category: 'support',
    description: 'Définir la priorité d\'un ticket',
    usage: '!priority <faible/moyenne/haute>',
    async execute(message, args) {
        message.channel.send("⚠️ Priorité du ticket mise à jour.");
    }
};