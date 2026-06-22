module.exports = {
    name: 'owner',
    category: 'control',
    description: 'Afficher les propriétaires du bot',
    usage: '!owner',
    async execute(message, args) {
        message.channel.send("👑 Liste des propriétaires : [Ton Nom]");
    }
};