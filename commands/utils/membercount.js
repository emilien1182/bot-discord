module.exports = {
    name: 'membercount',
    category: 'utils',
    description: 'Nombre de membres',
    usage: '!membercount',
    async execute(message, args) {
        message.channel.send("👥 Nombre total de membres.");
    }
};