module.exports = {
    name: 'feedback',
    category: 'support',
    description: 'Donner un avis sur le support',
    usage: '!feedback <avis>',
    async execute(message, args) {
        message.channel.send("⭐ Merci pour ton avis !");
    }
};