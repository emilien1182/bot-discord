module.exports = {
    name: 'mutelist',
    category: 'moderation',
    description: 'Afficher la liste des membres mute',
    usage: '!mutelist',
    async execute(message, args) {
        message.channel.send("📋 Liste des membres actuellement en sourdine.");
    }
};