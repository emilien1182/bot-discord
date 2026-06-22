module.exports = {
    name: 'pic',
    category: 'utils',
    description: 'Afficher la photo du serveur',
    usage: '!pic',
    async execute(message, args) {
        message.channel.send("📸 Photo du serveur.");
    }
};