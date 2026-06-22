module.exports = {
    name: 'temprole',
    category: 'moderation',
    description: 'Donner un rôle temporaire',
    usage: '!temprole <membre> <rôle> <temps>',
    async execute(message, args) {
        const member = message.mentions.members.first();
        const role = message.mentions.roles.first();
        if (!member || !role) return message.reply("Utilisation: `+temprole <membre> <rôle> <temps>`");
        await member.roles.add(role);
        message.channel.send(`✅ ${member.user.username} a reçu ${role.name} temporairement.`);
    }
};