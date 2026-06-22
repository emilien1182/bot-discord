module.exports = {
    name: 'leave',
    category: 'config',
    description: 'Configurer le message de départ',
    usage: '!leave <message>',
    async execute(message, args) {
        message.channel.send("🚪 Message de départ configuré.");
    }
};