require('dotenv').config();
const { Client, GatewayIntentBits, Collection } = require('discord.js');
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Bot is active!'));
app.listen(port);

const client = new Client({ 
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMembers
    ] 
});

// ... ensuite le reste de ton code (chargement des commandes, etc.)

const client = new Client({ 
    intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMembers] 
});const { Client, GatewayIntentBits, Collection, EmbedBuilder, ActionRowBuilder, StringSelectMenuBuilder } = require('discord.js');require('dotenv').config();
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
// --- SYSTÈME DE BIENVENUE ---
client.on('guildMemberAdd', member => {
    const welcomeChannelId = '151943446595567667';
    const channel = member.guild.channels.cache.get(welcomeChannelId);

    if (!channel) return;

    // Création de l'Embed avec l'image
    const welcomeEmbed = {
        color: 0xFF9900, // Tu peux changer la couleur ici
        image: {
            url: 'https://cdn.discordapp.com/attachments/1506746204396978360/1518581254738677801/ChatGPT_Image_18_juin_2026_13_59_35.png?ex=6a3d1381&is=6a3bc201&hm=df2f0fe35de7924b0ef409295a4589f4c0163b207611b8c0e17e27872e248118&' // Remplace par le lien direct de image_e941c9.jpg
        }
    };

    // Envoi du message avec la mention et l'embed
    channel.send({
        content: `Bienvenue sur le serveur, ${member} ! Salut a toi nous heureux de te voir ici ! 🎉`,
        embeds: [welcomeEmbed]
    });
})
client.login(process.env.TOKEN);