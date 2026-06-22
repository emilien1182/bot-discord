module.exports = {
    name: 'perm',
    category: 'settings',
    description: 'Gérer les permissions des commandes',
    usage: '!perm <add/del> <rôle> <commande>',
    async execute(message, args) {
        message.channel.send("⚙️ Permissions des commandes modifiées.");
    }
};