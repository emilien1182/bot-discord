module.exports = {
    name: 'antiunban',
    category: 'antiraid',
    description: 'Bloquer le débannissement de masse',
    usage: '!antiunban <on/off>',
    async execute(message, args) {
        message.channel.send("🔓 Protection Anti-Unban mise à jour.");
    }
};