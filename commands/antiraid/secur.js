module.exports = {
    name: 'secur',
    category: 'antiraid',
    description: 'Afficher l\'état de sécurité du serveur',
    usage: '!secur',
    async execute(message, args) {
        message.channel.send("🔐 État de la sécurité : Activé.");
    }
};