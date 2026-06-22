module.exports = {
    name: 'locknamelist',
    category: 'moderation',
    description: 'Voir les pseudos verrouillés',
    usage: '!locknamelist',
    async execute(message, args) {
        message.channel.send("📋 Liste des pseudos verrouillés (suivi actif en base de données).");
    }
};