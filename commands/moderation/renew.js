module.exports = {
    name: 'renew',
    category: 'moderation',
    description: 'Renouveler le salon',
    usage: '!renew',
    async execute(message, args) {
        const newChan = await message.channel.clone();
        await message.channel.delete();
        newChan.send("✅ Salon renouvelé.");
    }
};