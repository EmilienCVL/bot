const Discord = require("discord.js");

var bot = new Discord.Client();
var prefix = ("!");

bot.on('ready', () => {
    bot.user.setPresence({ game: { name: 'ElityGames | !help', type: 0} });
    console.log("ElityBot Ready");
});

bot.login('Mzg5MTMyODE1MDQxNTYwNTg2.DSXwnA.7VActXvys4mdEURQli8ADvMSeNg');

bot.on('message', message => {
    if (message.content === prefix + "help"){
        var help_embed = new Discord.RichEmbed()
            .setTitle("ElityBot | Commandes")
            .setDescription("[►](1) !help » Pour afficher les commandes." + "\n[►](2) !ip » Adresse du serveur Minecraft." + "\n[►](3) !mumble » Adresse du serveur Mumble." + "\n[►](4) !boutique » Boutique du serveur." + "\n[►](5) !twitter » Le Twitter d'ElityGames." + "\n[►](6) !staff » Le Staff d'ElitGames.")
            .setColor('#F49301')
            message.channel.sendEmbed(help_embed);
        //message.channel.sendMessage("Voici les commandes du Bot »\n §help » Pour afficher les commandes.")
        console.log("Commande Help Demandée.");
    }

    if (message.content === prefix + "ip"){
        var minecraft_embed = new Discord.RichEmbed()
            .setTitle("ElityBot | Minecraft")
            .setDescription("Adresse » mc.elitygames.fr :heart:")
            .setColor('#F49301')
            message.channel.sendEmbed(minecraft_embed);
    }

    if (message.content === prefix + "mumble"){
        var mumble_embed = new Discord.RichEmbed()
            .setTitle("ElityBot | Mumble")
            .setDescription("Adresse » mumble.elitygames.fr" + "\nPort » 16300")
            .setColor('#F49301')
            message.channel.sendEmbed(mumble_embed);
    }

    if (message.content === prefix + "boutique"){
        var boutique_embed = new Discord.RichEmbed()
            .setTitle("ElityBot | Boutique")
            .setDescription("Boutique » http://elity.buycraft.net/")
            .setColor('#F49301')
            message.channel.sendEmbed(boutique_embed);
    }
    
    if (message.content === prefix + "twitter"){
        var twitter_embed = new Discord.RichEmbed()
            .setTitle("ElityBot | Twitter")
            .setDescription("Twitter » https://twitter.com/ElityGames")
            .setColor('#F49301')
            message.channel.sendEmbed(twitter_embed);

    if (message.content === prefix + "staff"){
        var staff_embed = new Discord.RichEmbed()
            .setTitle("ElityBot | Staff")
            .addField("» Administration «", "\n ● Malfanax" + "\n ● Kenai_FDO")
            .addField("» Community Manager «", "\n ● Shadoune666")
            .addField("» Responsables Modération «", "\n ● BeZaidHache" + "\n ● Iromega")
            .addField("» Responsable Host «", "\n● Alpharys")
            .addField("» Responsable Build «", "\n ● bartix2612")
            .addField("» Modération «", "\n ● Draxiio_EG" +"\n ● Osheip" + "\n ● TorusMC" + "\n ● Steyzz" + "\n ● Fuzior_Floki" + "\n ● Jinkk" + "\n ● Tobiramaa" + "\n ● Minato" + "\n ● FroggyBalboa" + "\n ● redbu67600" + "\n ● Skydoo" + "\n ● Ziffard")
            .addField("» Helper «", "\n ● Adrossiel_" + "\n ● Gold_oO" + "\n ● Over_Rex" + "\n ● Yysm")
            .addField("» Builder «", "\n ● __0mega" + "\n ● LaMieDePain" + "\n ● LeFauxBelgeTroBo" + "\n ● zoryken")
            .addField("» Développeur «", "\n ● Personne")
            .addField("» Graphiste «", "\n ● Personne")
            .setColor('#F49301')
            message.channel.sendEmbed(staff_embed);
    }

    

});
