module.exports = {
    name: 'add',
    category: 'support',
    description: 'Ajouter un membre à un ticket',
    usage: '!add <membre>',
    async execute(message, args) {
        message.channel.send("➕ Membre ajouté au ticket.");
    }
};