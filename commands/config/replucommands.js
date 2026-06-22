module.exports = {
    name: 'replucommands',
    category: 'config',
    description: 'Créer des commandes de réponse automatique',
    usage: '!replycommands <add/del> <mot> <réponse>',
    async execute(message, args) {
        message.channel.send("💬 Commande de réponse ajoutée.");
    }
};