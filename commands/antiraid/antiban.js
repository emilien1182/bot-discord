module.exports = {
    name: 'voicemode',
    category: 'moderation',
    description: 'Gérer le mode vocal',
    usage: '+voicemode',
    async execute(message, args) {
        message.channel.send("⚙️ Mode vocal activé.");
    }
};