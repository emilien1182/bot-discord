module.exports = {
    name: 'clear',
    category: 'moderation',
    description: 'Supprimer un nombre de messages',
    usage: ' !clear <nombre>',
    async execute(message, args) {
        if (!message.member.permissions.has('ManageMessages')) return;
        const amount = parseInt(args[0]);
        if (isNaN(amount)) return message.reply("Indique un nombre.");
        await message.channel.bulkDelete(amount + 1);
        message.channel.send(`✅ ${amount} messages supprimés.`).then(m => setTimeout(() => m.delete(), 3000));
    }
};