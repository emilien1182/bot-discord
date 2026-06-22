module.exports = {
    name: 'clearlimit',
    category: 'settings',
    description: 'Définir la limite de messages à supprimer',
    usage: '!clearlimit <nombre>',
    async execute(message, args) {
        message.channel.send("🔢 Limite de suppression définie.");
    }
};