module.exports = {
    name: 'delrole',
    category: 'moderation',
    description: 'Retirer un rôle à un membre',
    usage: '!delrole <membre> <rôle>',
    async execute(message, args) {
        const member = message.mentions.members.first();
        const role = message.mentions.roles.first();
        if (!member || !role) return message.reply("Utilisation: `+delrole <membre> <rôle>`");
        await member.roles.remove(role);
        message.channel.send(`✅ Rôle ${role.name} retiré à ${member.user.username}.`);
    }
};