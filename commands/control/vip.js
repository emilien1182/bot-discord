module.exports = {
    name: 'vip',
    category: 'control',
    description: 'Ajouter/retirer un membre VIP',
    usage: '!vip <add/del> <membre>',
    async execute(message, args) {
        message.channel.send("⭐ Statut VIP mis à jour.");
    }
};