module.exports = {
    name: 'punition',
    category: 'antiraid',
    description: 'Définir la punition en cas d\'infraction',
    usage: '!punition <ban/kick/mute>',
    async execute(message, args) {
        message.channel.send("⚠️ Punition définie.");
    }
};