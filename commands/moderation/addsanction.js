const db = require('../../db.js');
module.exports = {
    name: 'addsanction',
    category: 'moderation',
    description: 'Ajouter une sanction à un membre',
    usage: '!addsanction <membre> <sanction>',
    async execute(message, args) {
        const member = message.mentions.members.first();
        const sanction = args.slice(1).join(' ');
        if (!member || !sanction) return message.reply("Utilisation: `+addsanction <membre> <sanction>`");
        await db.push(`sanctions_${member.id}`, sanction);
        message.channel.send(`✅ Sanction ajoutée à ${member.user.username}.`);
    }
};