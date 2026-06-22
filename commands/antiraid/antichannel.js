module.exports = {
    name: 'antichannel',
    category: 'antiraid',
    description: 'Bloquer la création/suppression de salons',
    usage: '!antichannel <on/off>',
    async execute(message, args) {
        message.channel.send("📁 Protection Anti-Channel mise à jour.");
    }
};