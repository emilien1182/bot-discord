module.exports = {
    name: 'hide',
    category: 'moderation',
    description: 'Masquer un salon',
    usage: '!hide',
    async execute(message, args) {
        if (!message.member.permissions.has('ManageChannels')) return;
        await message.channel.permissionOverwrites.edit(message.guild.id, { ViewChannel: false });
        message.channel.send("🔒 Salon masqué.");
    }
};