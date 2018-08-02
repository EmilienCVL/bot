import { Webhook } from "discord.js";

const Discord = require("discord.js");

var bot = new Discord.Client();
var prefix = ("!");

bot.on('ready', () => {
    bot.user.setPresence({ game: { name: 'Taupe`Info', type: 0} });
    console.log("Taupe'Info ✔");
});

bot.login(process.env.TOKEN);

bot.on('message', message => {
    if (message.content === prefix + "help"){
        var help_embed = new Discord.RichEmbed()
            .setTitle("ElityBot | Commandes")
            .setDescription("[►](1) !help » Pour afficher les commandes." + "\n[►](2) !ip » Adresse du serveur Minecraft." + "\n[►](3) !mumble » Adresse du serveur Mumble." + "\n[►](4) !boutique » Boutique du serveur." + "\n[►](5) !twitter » Le Twitter d'ElityGames." + "\n[►](6) !staff » Le Staff d'ElitGames.")
            .setColor('#F49301')
            message.author.sendEmbed(help_embed);
            if (message.guild != null){
                message.delete();
                }
        console.log("Commande Help Demandée.");
    }

    if (message.content === prefix + "ip"){
        var minecraft_embed = new Discord.RichEmbed()
            .setTitle("ElityBot | Minecraft")
            .setDescription("Adresse » mc.elitygames.fr")
            .setColor('#F49301')
            message.author.sendEmbed(minecraft_embed);
            if (message.guild != null){
                message.delete();
                }
    }

    else if (message.content.startsWith(prefix + "purge")){
        var purge_embed = new Discord.RichEmbed();
        if (message.guild === null){
            purge_embed.setTitle("ElityBot | Purge")
            .setDescription("Vous devez être sur un putain de discord.")
            .setColor('#F49301')
            message.author.send(purge_embed);
            return;
        }
        let joueur = message.guild.roles.find("name", "• Joueur");
        let tech = message.guild.roles.find("name", "• Technicien");
    
        if (!message.member.roles.has(joeur.id) && !message.member.roles.has(tech.id)){
            purge_embed.setTitle("ElityBot | Purge")
            .setDescription("Vous n'avez pas la permission d'effectuer cette commande.")
            .setColor('#F49301')
            message.author.send(purge_embed);
            message.delete();
            return;
        }else {
            async function purge() {
                
            
            var cont = message.content.slice(prefix.length).split(" ");
            var args = cont.slice(1);
            if(args[0] === null) {
                purge_embed.setTitle("ElityBot | Purge")
                .setDescription("Syntaxe incorrecte : !purge [nombre].")
                .setColor('#F49301')
                message.author.send(purge_embed);
                message.delete();
            }else {
                var nombre = parseInt(args[0]) + 1;
                if (nombre > 100){
                    nombre = 100;
                }
                if (isNaN(nombre)){
                    purge_embed.setTitle("ElityBot | Purge")
                    .setDescription("Syntaxe incorrecte : !purge [nombre].")
                    .setColor('#F49301')
                    message.author.send(purge_embed);
                    message.delete();
                    return;
                }
                var fetched = await message.channel.fetchMessages({limit:nombre});
                message.channel.bulkDelete(fetched);
                   
                

                purge_embed.setTitle("ElityBot | Purge")
                .setDescription("Vous avez supprimé " + fetched.size + " message(s).")
                .setColor('#F49301')
             message.author.send(purge_embed);
            }
        } purge();
        
    }

    
}

    

});
