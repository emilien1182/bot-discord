module.exports = {
    name: 'vocinfo',
    category: 'utils',
    description: 'Informations sur le salon vocal',
    usage: '!vocinfo',
    async execute(message, args) {
        message.channel.send("🎧 Informations vocales.");
    }
};