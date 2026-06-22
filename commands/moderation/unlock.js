module.exports = {
    name: 'unlock',
    category: 'moderation',
    description: 'Déverrouiller le salon',
    usage: '!unlock',
    async execute(message, args) {
        await message.channel.permissionOverwrites.edit(message.guild.id, { SendMessages: true });
        message.channel.send("🔓 Salon déverrouillé.");
    }
};