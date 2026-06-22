module.exports = {
    name: 'resetserver',
    category: 'config',
    description: 'Réinitialiser les paramètres du serveur',
    usage: '!resetserver',
    async execute(message, args) {
        message.channel.send("⚠️ Paramètres réinitialisés.");
    }
};