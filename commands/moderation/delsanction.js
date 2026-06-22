const db = require('../../db.js');
module.exports = {
    name: 'delsanction',
    category: 'moderation',
    description: 'Supprimer une sanction',
    usage: '!delsanction <membre> <id>',
    async execute(message, args) {
        const member = message.mentions.members.first();
        if (!member) return message.reply("Mentionne le membre.");
        await db.delete(`sanctions_${member.id}`);
        message.channel.send(`✅ Sanctions supprimées pour ${member.user.username}.`);
    }
};