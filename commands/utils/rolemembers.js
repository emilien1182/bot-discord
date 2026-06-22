module.exports = {
    name: 'rolemembers',
    category: 'utils',
    description: 'Membres possédant un rôle',
    usage: '!rolemembers <@rôle>',
    async execute(message, args) {
        message.channel.send("👥 Liste des membres avec ce rôle.");
    }
};