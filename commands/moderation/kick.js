module.exports = {
    name: 'kick',
    category: 'moderation',
    description: 'Expulser un membre',
    usage: '!kick <membre> [raison]',
    async execute(message, args) {
        const member = message.mentions.members.first();
        if (!member) return message.reply("Mentionne le membre.");
        await member.kick();
        message.channel.send(`✅ ${member.user.tag} expulsé.`);
    }
};