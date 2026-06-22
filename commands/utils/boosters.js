module.exports = {
    name: 'boosters',
    category: 'utils',
    description: 'Voir la liste des boosters',
    usage: '!boosters',
    async execute(message, args) {
        message.channel.send("🚀 Liste des boosters serveur.");
    }
};