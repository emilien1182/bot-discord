const db = require('../../db.js');
module.exports = {
    name: 'sanctions',
    category: 'moderation',
    description: 'Afficher les sanctions d\'un membre',
    usage: '!sanctions <membre>',
    async execute(message, args) {
        const member = message.mentions.members.first();
        if (!member) return message.reply("Mentionne le membre.");
        const sanctions = await db.get(`sanctions_${member.id}`) || [];
        message.channel.send(`📋 Sanctions pour ${member.user.username} : ${sanctions.join(', ') || 'Aucune.'}`);
    }
};