module.exports = {
    name: 'serverinfo',
    category: 'utils',
    description: 'Informations du serveur',
    usage: '!serverinfo',
    async execute(message, args) {
        message.channel.send("📊 Informations serveur.");
    }
};