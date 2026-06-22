module.exports = {
    name: 'banlist',
    category: 'moderation',
    description: 'Afficher la liste des membres bannis',
    usage: '!banlist',
    async execute(message, args) {
        const bans = await message.guild.bans.fetch();
        message.channel.send(`📋 Il y a ${bans.size} membres bannis.`);
    }
};