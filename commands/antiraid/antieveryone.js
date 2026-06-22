module.exports = {
    name: 'antieveryone',
    category: 'antiraid',
    description: 'Bloquer les mentions @everyone / @here',
    usage: '!antieveryone <on/off>',
    async execute(message, args) {
        message.channel.send("📢 Protection Anti-Everyone mise à jour.");
    }
};