const db = require('../../db.js');
module.exports = {
    name: 'lockname',
    category: 'moderation',
    description: 'Verrouiller le pseudo d\'un membre',
    usage: '!lockname <membre> <nom>',
    async execute(message, args) {
        const member = message.mentions.members.first();
        const name = args.slice(1).join(' ');
        if (!member || !name) return message.reply("Utilisation: `+lockname <membre> <nom>`");
        await db.set(`lockname_${member.id}`, name);
        await member.setNickname(name);
        message.channel.send(`✅ Pseudo verrouillé pour ${member.user.username}.`);
    }
};