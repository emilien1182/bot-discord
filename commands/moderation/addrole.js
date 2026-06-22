const db = require('../../db.js');
module.exports = {
    name: 'addrole',
    category: 'moderation',
    description: 'Ajouter un rôle à un membre',
    usage: '!addrole <membre> <rôle>',
    async execute(message, args) {
        if (!message.member.permissions.has('ManageRoles')) return message.reply("Permissions insuffisantes.");
        const member = message.mentions.members.first();
        const role = message.mentions.roles.first();
        if (!member || !role) return message.reply("Utilisation: `+addrole <membre> <rôle>`");
        await member.roles.add(role);
        message.channel.send(`✅ Rôle ${role.name} ajouté à ${member.user.username}.`);
    }
};
;