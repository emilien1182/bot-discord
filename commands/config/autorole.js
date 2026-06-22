module.exports = {
    name: 'autorole',
    category: 'config',
    description: 'Définir un rôle automatique à l\'arrivée',
    usage: '!autorole <@rôle>',
    async execute(message, args) {
        message.channel.send("⚙️ Autorole configuré.");
    }
};