module.exports = {
    name: 'userinfo',
    category: 'utils',
    description: 'Informations d\'un utilisateur',
    usage: '!userinfo <@membre>',
    async execute(message, args) {
        message.channel.send("👤 Informations utilisateur.");
    }
};