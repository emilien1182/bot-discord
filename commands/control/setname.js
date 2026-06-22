module.exports = {
    name: 'setname',
    category: 'control',
    description: 'Changer le nom du bot',
    usage: '!setname <nouveau_nom>',
    async execute(message, args) {
        message.channel.send("🏷️ Nom du bot mis à jour.");
    }
};