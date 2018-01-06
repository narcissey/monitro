const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = ".";


client.on("ready", () => {

var TailleMembres = client.users.size;
var TailleServeurs = client.guilds.size;

client.user.setGame("CAPTCHA BOT EN LIGNE");

console.log("--------------------------------------");

console.log(`Je suis sur ${TailleServeurs} serveur(s) avec ${TailleMembres} utilisateurs`);

});


var Attente = [];


client.on('message', (msg) => {

  if(msg.channel.name == "certification"){

  if(msg.author !== client.user) {

    msg.delete();

  }else{

    msg.channel.send();

  }
}

});


client.on('message', (msg) => {

if(msg.author.id != client.id){

if(msg.channel.name == "certification" && msg.content.startsWith(prefix)){

        var say = msg.content.substr(1);

        for(i=0;i<Attente.length;i++){

            var code = Attente[i].indexOf("x");

        }

        code++;

        for(i=0;i<Attente.length;i++){

var recode = Attente[i].substr(code);

}
		if(say == recode){

            Attente.pop();     

let NouveauMembre = msg.guild.roles.find("name", "Membres");

if(!msg.guild.roles.exists("name", "Membres")) {

        return  msg.channel.send("**:x: Le role `Membres` n'existe pas, veuillez le créer pour faire fonctionner le captcha!**")
     
      } 
msg.member.addRole(NouveauMembre).catch(err => console.log(err));   

        }else{

            msg.author.send("**:x: Vous avez pas réussi à passer le captcha...**");

            msg.delete();

            if(!msg.guild.member(client.user).hasPermission("KICK_MEMBERS")) {

  return;
}

msg.guild.member(msg.author).kick();

		}
  }
}

});

client.on('guildMemberAdd', member => {  

const salon = member.guild.channels.find('name', 'bienvenue');

    if(!salon) return;

var captcha = String(Math.random()).charAt(4) + String(Math.random()).charAt(4) + String(Math.random()).charAt(4) + String(Math.random()).charAt(4) + String(Math.random()).charAt(4);
           
            member.send("**Bienvenue @"+ member.user.username + "** copie/colle le code ci-join dans **#certification** pour passer le captcha du serveur\n```." + captcha + "```");
        
            member.user.id;
         
            Attente.push(member.user.id + "x" + captcha);

    salon.send("**Bienvenue @"+ member.user.username + "**"); 

});


client.login(process.env.TOKEN);
