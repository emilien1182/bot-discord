module.exports = {
    name: 'derank',
    category: 'moderation',
    description: 'Retirer tous les rôles d\'un membre',
    usage: '!derank <membre>',
    async execute(message, args) {
        const member = message.mentions.members.first();
        if (!member) return;
        await member.roles.set([]);
        message.channel.send(`✅ ${member.user.username} a été derank.`);
    }
};