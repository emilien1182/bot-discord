const { EmbedBuilder, ActionRowBuilder, StringSelectMenuBuilder } = require('discord.js');

module.exports = {
    name: 'ticket-setup',
    category: 'support',
    description: 'Configure le menu de sélection de ticket',
    async execute(message) {
        const embed = new EmbedBuilder()
            .setTitle('🎫 Support SunLeak')
            .setDescription('Veuillez sélectionner le motif de votre ticket ci-dessous.')
            .setFooter({ text: 'Pour toute demande de support' })
            .setColor('#FF9900');

        const menu = new ActionRowBuilder().addComponents(
            new StringSelectMenuBuilder()
                .setCustomId('ticket_select')
                .setPlaceholder('Choisir un motif...')
                .addOptions([
                    { label: 'Support', value: 'support', description: 'Besoin d\'aide générale' },
                    { label: 'Comment acheter', value: 'achat', description: 'Questions sur les achats' },
                    { label: 'Partenariat', value: 'partenariat', description: 'Demandes de partenariat' }
                ])
        );

        message.channel.send({ embeds: [embed], components: [menu] });
    }
};