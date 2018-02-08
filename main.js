const Discord = require("discord.js");

var bot = new Discord.Client();
var prefix = ("!");

bot.on('ready', () => {
    bot.user.setPresence({ game: { name: 'ElityGames | !help', type: 0} });
    console.log("ElityBot Ready");
});

bot.login(process.env.TOKE);

bot.on('message', message => {
    if (message.content === prefix + "help"){
        var help_embed = new Discord.RichEmbed()
            .setTitle("ElityBot | Commandes")
            .setDescription("[►](1) !help » Pour afficher les commandes." + "\n[►](2) !ip » Adresse du serveur Minecraft." + "\n[►](3) !mumble » Adresse du serveur Mumble." + "\n[►](4) !boutique » Boutique du serveur." + "\n[►](5) !twitter » Le Twitter d'ElityGames." + "\n[►](6) !staff » Le Staff d'ElitGames.")
            .setColor('#F49301')
            message.author.sendEmbed(help_embed);
            message.delete();
        //message.channel.sendMessage("Voici les commandes du Bot »\n §help » Pour afficher les commandes.")
        console.log("Commande Help Demandée.");
    }

    if (message.content === prefix + "ip"){
        var minecraft_embed = new Discord.RichEmbed()
            .setTitle("ElityBot | Minecraft")
            .setDescription("Adresse » mc.elitygames.fr")
            .setColor('#F49301')
            .setColor()
            message.author.sendEmbed(minecraft_embed);
            message.delete();
    }

    if (message.content === prefix + "mumble"){
        var mumble_embed = new Discord.RichEmbed()
            .setTitle("ElityBot | Mumble")
            .setDescription("Adresse » mumble.elitygames.fr" + "\nPort » 16300")
            .setColor('#F49301')
            message.author.sendEmbed(mumble_embed);
            message.delete();
    }

    if (message.content === prefix + "boutique"){
        var boutique_embed = new Discord.RichEmbed()
            .setTitle("ElityBot | Boutique")
            .setDescription("Boutique » http://elity.buycraft.net/")
            .setColor('#F49301')
            message.author.sendEmbed(boutique_embed);
            message.delete();
    }
    
    if (message.content === prefix + "twitter"){
        var twitter_embed = new Discord.RichEmbed()
            .setTitle("ElityBot | Twitter")
            .setDescription("Twitter » https://twitter.com/ElityGames")
            .setColor('#F49301')
            message.author.sendEmbed(twitter_embed);
            message.delete();
    }

    if (message.content === prefix + "staff"){
        var staff_embed = new Discord.RichEmbed()
            .setTitle("ElityBot | Staff")
            .addField("» Administration «", "\nMalfanax" + "\nKenai_FDO")
            .addField("» Community Manager «", "\n     Shadoune666")
            .addField("» Responsables Modération «", "\nBeZaidHache" + "\nIromega")
            .addField("» Responsable Host «", "\nAlpharys")
            .addField("» Responsable Build «", "\nbartix2612")
            .addField("» Modération «", "\nDraxiio_EG" +"\nOsheip" + "\nTorusMC" + "\nSteyzz" + "\nFuzior_Floki" + "\nJinkk" + "\nTobiramaa" + "\nMinato" + "\nFroggyBalboa" + "\nredbu67600" + "\nSkydoo" + "\nZiffard")
            .addField("» Helper «", "\nAdrossiel_" + "\nGold_oO" + "\nOver_Rex" + "\nYysm")
            .addField("» Builder «", "\n__0mega" + "\nLaMieDePain" + "\nLeFauxBelgeTroBo" + "\nzoryken")
            .addField("» Développeur «", "\nPersonne")
            .addField("» Graphiste «", "\nPersonne")
            .setColor('#F49301')
            message.author.sendEmbed(staff_embed);
            message.delete();
    }

    else if (message.content.startsWith(prefix + "purge")){
        var purge_embed = new DiscordRichEmbed();
        if (!message.guild.name === "Draxiio" && !message.guild.name === "Chocapic"){
            purge_embed.setTitle("ElityBot | Purge")
            .addField("Vous n'avez pas la permission d'éffectuer cette commande.")
            .setColor('#F49301')
            message.author.sendEmbed(purge_embed);
            message.delete();
            return;
        }else {
            var temp = message.content;
            if(temp.length != 2){
                purge_embed.setTitle("ElityBot | Purge")
                .addField("Syntaxe incorrecte : !purge [nombre].")
                .setColor('#F49301')
                message.author.sendEmbed(purge_embed);
                message.delete();
            }else {
                var channel = message.channel;
                message.delete();
                var nombre = temp.split[1];
                var i=0;
                for (i;i<nombre;i++){
                    channel.messages[i].delete;
                }

                purge_embed.setTitle("ElityBot | Purge")
                .addField("Vous avez supprimé " + i + " message(s).")
                .setColor('#F49301')
                message.author.sendEmbed(purge_embed);
            }
        }

    }

    

});
