module.exports = {
    name: 'avatar',
    category: 'utils',
    description: 'Voir l\'avatar d\'un membre',
    usage: '!avatar <membre>',
    async execute(message, args) {
        message.channel.send("🖼️ Avatar récupéré.");
    }
};