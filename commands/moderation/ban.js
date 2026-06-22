const db = require('../../db.js');

module.exports = {
    name: 'ban',
    category: 'moderation', // Indispensable pour le menu !help
    description: 'Bannir un utilisateur du serveur',
    usage: '!ban <utilisateur> [raison]',
    async execute(message, args) {
        // Vérification des permissions
        if (!message.member.permissions.has('BanMembers')) return message.reply("Permissions insuffisantes.");

        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        if (!member) return message.reply("Veuillez mentionner un utilisateur.");

        const reason = args.slice(1).join(' ') || "Aucune raison fournie.";

        try {
            await member.ban({ reason });
            message.channel.send(`✅ ${member.user.tag} a été banni.`);
        } catch (e) {
            message.reply("❌ Impossible de bannir cet utilisateur (rôle trop haut ?).");
        }
    }
};