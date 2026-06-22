module.exports = {
    name: 'mute',
    category: 'moderation',
    description: 'Réduire au silence un membre',
    usage: '!mute <membre> [durée] [raison]',
    async execute(message, args) {
        const member = message.mentions.members.first();
        if (!member) return message.reply("Mentionne le membre.");
        await member.timeout(60 * 1000 * 60); // 1 heure par défaut
        message.channel.send(`✅ ${member.user.tag} est mute.`);
    }
};