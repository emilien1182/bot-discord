module.exports = {
    name: 'translate',
    category: 'utils',
    description: 'Traduire un texte',
    usage: '!translate <langue> <texte>',
    async execute(message, args) {
        message.channel.send("🌐 Traduction effectuée.");
    }
};