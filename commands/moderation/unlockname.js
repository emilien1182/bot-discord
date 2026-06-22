const db = require('../../db.js');
module.exports = {
    name: 'unlockname',
    category: 'moderation',
    description: 'Déverrouiller le pseudo d\'un membre',
    usage: '!unlockname <membre>',
    async execute(message, args) {
        const member = message.mentions.members.first();
        if (!member) return;
        await db.delete(`lockname_${member.id}`);
        message.channel.send(`✅ Pseudo déverrouillé pour ${member.user.username}.`);
    }
};