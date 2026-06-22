module.exports = {
    name: 'antiupdate',
    category: 'antiraid',
    description: 'Bloquer les modifications de salon/rôles',
    usage: '!antiupdate <on/off>',
    async execute(message, args) {
        // Logique de protection ici
        if (!message.member.permissions.has('Administrator')) return;
        
        const status = args[0] === 'on' ? 'activée' : 'désactivée';
        message.channel.send(`🛡️ La protection anti-update est désormais **${status}**.`);
    }
};