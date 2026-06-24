const { Client, GatewayIntentBits, Collection, EmbedBuilder, ActionRowBuilder, StringSelectMenuBuilder } = require('discord.js');require('dotenv').config();
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Bot is active!'));
app.listen(port);
const fs = require('fs');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMembers
    ]
});

client.commands = new Collection();

// --- CHARGEMENT DES COMMANDES ---
const categories = ['moderation', 'antiraid', 'config', 'control', 'logs', 'settings', 'support', 'utils'];
categories.forEach(cat => {
    const files = fs.readdirSync(`./commands/${cat}`).filter(f => f.endsWith('.js'));
    for (const file of files) {
        const cmd = require(`./commands/${cat}/${file}`);
        cmd.category = cat; // Force la catégorie
        client.commands.set(cmd.name, cmd);
    }
});

// --- ÉVÉNEMENT : RÉCEPTION DE COMMANDES ---
client.on('messageCreate', async message => {
    if (!message.content.startsWith('!') || message.author.bot) return;

    const args = message.content.slice(1).trim().split(/ +/);
    const cmdName = args.shift().toLowerCase();
    const cmd = client.commands.get(cmdName);

    if (cmd) {
        try { await cmd.execute(message, args); } 
        catch (e) { console.error(e); message.reply("Erreur lors de l'exécution."); }
    }
});

// --- GESTION DU MENU HELP ET TICKETS ---
client.on('interactionCreate', async interaction => {
    if (!interaction.isStringSelectMenu()) return;

    if (interaction.customId === 'ticket_select') {
        const motif = interaction.values[0]; // 'support', 'achat' ou 'partenariat'
        
        const channel = await interaction.guild.channels.create({
            name: `${motif}-${interaction.user.username}`,
            type: 0,
            permissionOverwrites: [
                { id: interaction.guild.id, deny: ['ViewChannel'] },
                { id: interaction.user.id, allow: ['ViewChannel', 'SendMessages'] }
            ]
        });

        await interaction.reply({ content: `✅ Ton ticket pour **${motif}** a été créé : ${channel}`, ephemeral: true });
        
        // Optionnel : Envoyer un message dans le nouveau ticket
        channel.send(`👋 Bonjour ${interaction.user}, voici ton ticket pour : **${motif}**. Le staff va t'aider rapidement.`);
    }
});
// --- AJOUTE CECI DANS TON index.js ---

client.once('ready', () => {
    console.log(`✅ Le bot ${client.user.tag} est en ligne et opérationnel !`);
    
    // Optionnel : Définir un statut pour le bot
    client.user.setActivity('ton serveur', { type: 'WATCHING' });
});
client.on('interactionCreate', async interaction => {
    // 1. Menu Help (Correction de l'interaction)
    if (interaction.isStringSelectMenu() && interaction.customId === 'help_menu') {
        try {
            // A. Répondre immédiatement pour éviter l'erreur "Échec"
            await interaction.deferUpdate(); 

            const cat = interaction.values[0];
            const cmds = client.commands.filter(c => c.category === cat);
            
            const embed = new EmbedBuilder()
                .setTitle(`📂 Catégorie : ${cat.toUpperCase()}`)
                .setColor('#FF9900')
                .setDescription(cmds.size > 0 
                    ? cmds.map(c => `**!${c.name}** — ${c.description}\n*Usage: ${c.usage}*`).join('\n\n')
                    : "Aucune commande trouvée dans cette catégorie."
                );

            // B. Envoyer la mise à jour après le defer
            await interaction.editReply({ embeds: [embed] });
        } catch (e) {
            console.error("Erreur dans le menu help :", e);
        }
    }
    
    // ... reste de ton code pour les tickets ...
});
// --- TON LOGIN RESTE TOUJOURS À LA FIN ---
client.loginprocess.env.TOKEN