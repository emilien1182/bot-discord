module.exports = {
    name: 'role',
    category: 'utils',
    description: 'Informations sur un rôle',
    usage: '!role <@rôle>',
    async execute(message, args) {
        message.channel.send("🎭 Détails du rôle.");
    }
};