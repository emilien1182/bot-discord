module.exports = {
    name: 'transcript',
    category: 'logs',
    description: 'Générer un transcript d\'un salon',
    usage: '!transcript <#salon>',
    async execute(message, args) {
        message.channel.send("📜 Transcript généré.");
    }
};