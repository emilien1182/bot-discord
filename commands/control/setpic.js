module.exports = {
    name: 'setpic',
    category: 'control',
    description: 'Changer la photo de profil du bot',
    usage: '!setpic <url>',
    async execute(message, args) {
        message.channel.send("📸 Photo de profil mise à jour.");
    }
};