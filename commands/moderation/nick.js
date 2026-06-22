module.exports = {
    name: 'nick',
    category: 'moderation',
    description: 'Changer le pseudo d\'un membre',
    usage: '!nick <membre> <nouveau_nom>',
    async execute(message, args) {
        const member = message.mentions.members.first();
        const newNick = args.slice(1).join(' ');
        if (!member || !newNick) return message.reply("Utilisation: `+nick <membre> <nom>`");
        await member.setNickname(newNick);
        message.channel.send(`✅ Pseudo de ${member.user.username} mis à jour.`);
    }
};