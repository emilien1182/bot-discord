module.exports = {
    name: 'bl',
    category: 'control',
    description: 'Ajouter un utilisateur à la blacklist',
    usage: '!bl <membre>',
    async execute(message, args) {
        message.channel.send("🚫 Utilisateur ajouté à la blacklist.");
    }
};