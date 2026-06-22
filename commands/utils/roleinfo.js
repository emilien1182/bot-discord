module.exports = {
    name: 'roleinfo',
    category: 'utils',
    description: 'Détails complets d\'un rôle',
    usage: '!roleinfo <@rôle>',
    async execute(message, args) {
        message.channel.send("ℹ️ Informations détaillées du rôle.");
    }
};