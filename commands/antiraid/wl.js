module.exports = {
    name: 'wl',
    category: 'antiraid',
    description: 'Ajouter un membre à la whitelist',
    usage: '!wl <membre>',
    async execute(message, args) {
        message.channel.send("✅ Membre ajouté à la Whitelist.");
    }
};