module.exports = {
    name: 'unhide',
    category: 'moderation',
    description: 'Rendre le salon visible',
    usage: '!unhide',
    async execute(message, args) {
        await message.channel.permissionOverwrites.edit(message.guild.id, { ViewChannel: true });
        message.channel.send("🔓 Salon visible.");
    }
};