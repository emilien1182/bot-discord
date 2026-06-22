module.exports = {
    name: 'unmute',
    category: 'moderation',
    description: 'Retirer le mute d\'un membre',
    usage: '!unmute <membre>',
    async execute(message, args) {
        const member = message.mentions.members.first();
        if (!member) return;
        await member.timeout(null);
        message.channel.send(`✅ ${member.user.tag} est maintenant libre.`);
    }
};