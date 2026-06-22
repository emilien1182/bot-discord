module.exports = {
    name: 'unban',
    category: 'moderation',
    description: 'Débannir un membre',
    usage: '!unban <id_membre> ou all',
    async execute(message, args) {
        if (args[0] === 'all') {
            const bans = await message.guild.bans.fetch();
            bans.forEach(b => message.guild.members.unban(b.user.id));
            message.channel.send("✅ Tous les membres ont été débannis.");
        } else {
            await message.guild.members.unban(args[0]);
            message.channel.send("✅ Membre débanni.");
        }
    }
};