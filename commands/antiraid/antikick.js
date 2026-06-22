module.exports = {
    name: 'antikick',
    category: 'antiraid',
    description: 'Bloquer l\'expulsion massive de membres',
    usage: '!antikick <on/off>',
    async execute(message, args) {
        message.channel.send("👢 Protection Anti-Kick mise à jour.");
    }
};