require('dotenv').config();
const { Client, GatewayIntentBits, Collection, EmbedBuilder, ActionRowBuilder, StringSelectMenuBuilder } = require('discord.js');
const express = require('express');
const fs = require('fs');

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
    const welcomeChannelId = '1519434646595567667';
    const channel = member.guild.channels.cache.get(welcomeChannelId);
client.on('guildMemberAdd', async member => {
    // ID du salon de bienvenue (ton ID)
    const welcomeChannelId = '1519344838938460170';
    const channel = member.guild.channels.cache.get(welcomeChannelId);
    if (channel) channel.send(`Bienvenue, ${member} !`);

    // Attribution du rôle "Membre"
    const role = member.guild.roles.cache.find(r => r.name === 'Membre');
    if (role) {
        await member.roles.add(role).catch(console.error);
    }
});
    if (!channel) {
        console.log("Salon non trouvé !");
        return;
    }

    // 1. On définit l'Embed DANS la fonction
    const welcomeEmbed = {
        color: 0xFF9900,
        image: {
            url: 'https://cdn.discordapp.com/attachments/1506746204396978360/1518581254738677801/ChatGPT_Image_18_juin_2026_13_59_35.png?ex=6a3d1381&is=6a3bc201&hm=df2f0fe35de7924b0ef409295a4589f4c0163b207611b8c0e17e27872e248118&'
        }
    };

    // 2. On envoie une seule fois le message
    channel.send({
        content: `Bienvenue sur le serveur, ${member} ! Salut à toi nous sommes heureux de te voir ici ! 🎉`,
        embeds: [welcomeEmbed]
    });
    
    console.log("Message de bienvenue envoyé !");
});
// --- ATTRIBUTION AUTOMATIQUE DU RÔLE MEMBRE ---
client.on('guildMemberAdd', async member => {
    // ID du rôle "Membre" (Remplace par l'ID réel de ton rôle)
    const roleMembreId = '1321934751321427998'; 
    
    // On récupère le rôle
    const role = member.guild.roles.cache.get(roleMembreId);
    
    // On l'ajoute si le rôle existe
    if (role) {
        try {
            await member.roles.add(role);
            console.log(`Rôle Membre ajouté automatiquement à ${member.user.tag}`);
        } catch (error) {
            console.error("Impossible d'ajouter le rôle :", error);
        }
    }
});
// Vérification automatique toutes les heures
setInterval(async () => {
    const guild = client.guilds.cache.get('1321930333041725541');
    if (!guild) return;

    guild.members.cache.forEach(async member => {
        if (member.user.bot) return;

        const diffInDays = (Date.now() - member.joinedTimestamp) / (1000 * 60 * 60 * 24);

        // 1. Déterminer le nom du rôle selon les jours
        let roleName = "";
        if (diffInDays >= 28) roleName = "Niveau 40";
        else if (diffInDays >= 21) roleName = "Niveau 30";
        else if (diffInDays >= 14) roleName = "Niveau 20";
        else if (diffInDays >= 7) roleName = "Niveau 10";

        // 2. Si un rôle est déterminé, on le cherche et on l'ajoute
        if (roleName) {
            const role = guild.roles.cache.find(r => r.name === roleName);
            
            // On ajoute le rôle s'il existe ET que le membre ne l'a pas encore
            if (role && !member.roles.cache.has(role.id)) {
                await member.roles.add(role).catch(console.error);
                console.log(`Rôle ${roleName} ajouté à ${member.user.tag}`);
            }
        }
    });
}, 3600000); 

client.login(process.env.TOKEN);