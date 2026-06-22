module.exports = {
    name: 'botinfo',
    category: 'utils',
    description: 'Informations sur le bot',
    usage: '!botinfo',
    async execute(message, args) {
        message.channel.send("🤖 Informations du bot.");
    }
};