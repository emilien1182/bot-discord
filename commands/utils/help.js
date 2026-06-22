const { EmbedBuilder, ActionRowBuilder, StringSelectMenuBuilder } = require('discord.js');

module.exports = {
    name: 'help',
    async execute(message, args) {
        // Liste de toutes tes catégories
        const categories = ['Antiraid', 'Config', 'Control', 'Logs', 'Moderation', 'Settings', 'Support', 'Utils'];

        const embed = new EmbedBuilder()
            .setTitle('🤖 Centre d\'Aide du Bot')
            .setDescription('Découvre toutes les possibilités de ton bot en sélectionnant une catégorie dans le menu ci-dessous.')
            .setColor('#5865F2')
            .setThumbnail(message.client.user.displayAvatarURL())
            // Ajout des catégories en champs pour le visuel "pro"
            .addFields(
                { name: '🛡️ Modération', value: 'Gérer les membres.', inline: true },
                { name: '⚙️ Configuration', value: 'Paramètres du serveur.', inline: true },
                { name: '👑 Contrôle', value: 'Administration bot.', inline: true },
                { name: '🚨 Antiraid', value: 'Protection serveur.', inline: true },
                { name: '📋 Logs', value: 'Suivi des actions.', inline: true },
                { name: '🔧 Settings', value: 'Réglages avancés.', inline: true },
                { name: '🎧 Support', value: 'Aide utilisateur.', inline: true },
                { name: '📂 Utils', value: 'Outils divers.', inline: true }
            )
            .setFooter({ text: 'Sélectionne une option dans le menu ci-dessous pour voir les détails' });

        const menu = new StringSelectMenuBuilder()
            .setCustomId('help_menu')
            .setPlaceholder('👉 Choisis une catégorie ici');

        // Ajout dynamique de toutes les catégories dans le menu déroulant
        categories.forEach(cat => {
            menu.addOptions({
                label: cat,
                value: cat.toLowerCase()
            });
        });

        const row = new ActionRowBuilder().addComponents(menu);

        message.reply({ embeds: [embed], components: [row] });
    }
};