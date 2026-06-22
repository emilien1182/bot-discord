module.exports = {
    name: 'emoji',
    category: 'config',
    description: 'Ajouter ou supprimer des emojis',
    usage: '!emoji <add/del> <nom> <url>',
    async execute(message, args) {
        message.channel.send("😊 Gestion des emojis mise à jour.");
    }
};