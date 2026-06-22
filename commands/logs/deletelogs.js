module.exports = {
    name: 'deletelogs',
    category: 'logs',
    description: 'Logs des messages supprimés',
    usage: '!deletelogs <on/off>',
    async execute(message, args) {
        message.channel.send("🗑️ Logs de suppression configurés.");
    }
};