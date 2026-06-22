module.exports = {
    name: 'sayembed',
    category: 'utils',
    description: 'Envoyer un message en Embed',
    usage: '!sayembed <texte>',
    async execute(message, args) {
        message.channel.send("✨ Message envoyé en embed.");
    }
};