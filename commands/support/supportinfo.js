module.exports = {
    name: 'supportinfo',
    category: 'support',
    description: 'Afficher les informations du support',
    usage: '!supportinfo',
    async execute(message, args) {
        message.channel.send("ℹ️ Informations du support affichées.");
    }
};