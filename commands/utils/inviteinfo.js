module.exports = {
    name: 'inviteinfo',
    category: 'utils',
    description: 'Informations sur une invitation',
    usage: '!inviteinfo <code>',
    async execute(message, args) {
        message.channel.send("🔗 Détails de l'invitation.");
    }
};