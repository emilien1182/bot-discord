module.exports = {
    name: 'lock',
    category: 'moderation',
    description: 'Verrouiller le salon',
    usage: '!lock',
    async execute(message, args) {
        if (!message.member.permissions.has('ManageChannels')) return;
        await message.channel.permissionOverwrites.edit(message.guild.id, { SendMessages: false });
        message.channel.send("🔒 Salon verrouillé.");
    }
};