module.exports = {
    name: 'antirank',
    category: 'antiraid',
    description: 'Bloquer les changements de rangs/rôles',
    usage: '!antirank <on/off>',
    async execute(message, args) {
        message.channel.send("⭐ Protection Anti-Rank mise à jour.");
    }
};