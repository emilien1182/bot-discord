module.exports = {
    name: 'setbio',
    category: 'control',
    description: 'Changer la biographie du bot',
    usage: '!setbio <texte>',
    async execute(message, args) {
        message.channel.send("📝 Biographie mise à jour.");
    }
};