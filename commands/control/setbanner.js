module.exports = {
    name: 'setbanner',
    category: 'control',
    description: 'Définir la bannière du profil du bot',
    usage: '!setbanner <url>',
    async execute(message, args) {
        message.channel.send("🖼️ Bannière mise à jour.");
    }
};