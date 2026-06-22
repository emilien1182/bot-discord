module.exports = {
    name: 'claim',
    category: 'support',
    description: 'Prendre en charge un ticket',
    usage: '!claim',
    async execute(message, args) {
        message.channel.send("🙋 Ticket pris en charge par le staff.");
    }
};