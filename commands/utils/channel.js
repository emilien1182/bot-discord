module.exports = {
    name: 'channel',
    category: 'utils',
    description: 'Informations sur un salon',
    usage: '!channel <#salon>',
    async execute(message, args) {
        message.channel.send("📁 Informations sur le salon.");
    }
};