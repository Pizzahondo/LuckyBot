const Discord = require('discord.js');
const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION"]});
////////////////////////////////////////////Mi Bot////////////////////////////////////////////

client.on('ready', () => {
  console.log('Despertando al dragón!');
  client.user.setActivity('a LuckyChance ┊ 🐉 u!ayuda', { type: 'WATCHING' })
});

//////////////////////////////////////Ayuda///////////////////////////////////////////////////

//Help
const { ReactionPages } = require('reconlx');

client.on('message', message => {
  if (message.content === 'u!ayuda') {
    const comandos = new Discord.MessageEmbed()
    .setTitle('Comandos')
    .setThumbnail(client.user.displayAvatarURL())
    .setColor(0x59d8ff)
    .setDescription('〢Para más información de los comandos usa `u!comandos`.')
    .setFooter('Creado por Pizzahondo | Pizzahondo#9011', 'https://cdn.discordapp.com/avatars/530794748676407296/61c880145e0ebcec6043d638322e7132.webp') 
    const moderacion = new Discord.MessageEmbed()
      .setTitle('📡 Moderación')
      .setAuthor('Team Updates', 'https://media.discordapp.net/attachments/806965599518720060/807649573580308490/Updates.png')
      .setColor(0x00c3ff)
      .setThumbnail(client.user.displayAvatarURL())
      .setDescription('〢u!normas\n┉┉┉┉\n〢u!kick\n┉┉┉┉\n〢u!ban\n┉┉┉┉\n〢u!silenciar\n┉┉┉┉\n〢u!desilenciar\n┉┉┉┉\n〢u!limpiar\n┉┉┉┉\n〢u!aceptada\n┉┉┉┉\n〢u!rechazada\n┉┉┉┉\nu!twitter\n┉┉┉┉\nu!instagram')
      .setFooter('Creado por Pizzahondo | Pizzahondo#9011', 'https://cdn.discordapp.com/avatars/530794748676407296/61c880145e0ebcec6043d638322e7132.webp') 
    const informacion = new Discord.MessageEmbed()
      .setTitle('📊 Información')
      .setColor(0x00c3ff)
      .setThumbnail(client.user.displayAvatarURL())
      .setDescription('〢u!ayuda\n┉┉┉┉\n〢u!usuario\n┉┉┉┉\n〢u!bot\n┉┉┉┉\n〢u!invitar\n┉┉┉┉\n〢u!servidor')
      .setFooter('Creado por Pizzahondo | Pizzahondo#9011', 'https://cdn.discordapp.com/avatars/530794748676407296/61c880145e0ebcec6043d638322e7132.webp') 
    const publico = new Discord.MessageEmbed()
      .setTitle('👥 Público')
      .setThumbnail(client.user.displayAvatarURL())
      .setColor(0x00c3ff)
      .setDescription('〢u!comandos\n┉┉┉┉\n〢u!embed\n┉┉┉┉\n〢u!avatar\n┉┉┉┉\n〢u!ping\n┉┉┉┉\n〢u!prefijo')
      .setFooter('Creado por Pizzahondo | Pizzahondo#9011', 'https://cdn.discordapp.com/avatars/530794748676407296/61c880145e0ebcec6043d638322e7132.webp') 
    const pages = [comandos, moderacion, informacion, publico];
    ReactionPages(message, pages, false)
  }
})

//Comandos
client.on('message', message => {
  if(message.content.startsWith('u!comandos')) {
    const mod = new Discord.MessageEmbed()
    .setTitle('📡 Comandos de moderación')
    .setColor(0x00c3ff)
    .setThumbnail(client.user.displayAvatarURL())
    .setDescription('**〢u!normas**\nMuestras las normas en el canal <#778607787998576670>\n┉┉┉┉\n**〢u!kick**\nExpulsas a un miembro del servidor. [Razón Opcional]\n┉┉┉┉\n**〢u!ban**\nExpulsas a un miembro del servidor permanentemente. [Razón Opcional]\n┉┉┉┉\n**〢u!silenciar**\nSilencias a un miembro del servidor. [Razón Opcional] \n┉┉┉┉\n**〢u!desilenciar**\nDesilencias a un miembro del servidor que este silenciado. [Razón Opcional]\n┉┉┉┉\n**〢u!limpiar**\nEliminas los mensajes de un canal. [Número de mensajes] (Mi limite es 100)\n┉┉┉┉\n**〢u!aceptada**\nAceptas la sugerencia de alguien. [Menciona al autor de la sugerencia]\n┉┉┉┉\n**〢u!rechazada**\nRechazas la sugerencia de alguien. [Menciona al autor de la sugerencia]\n┉┉┉┉\n**〢u!twitter**\nCopias el ultimo link del twitt y lo pegas usando el comando. [u!twitter link]\n┉┉┉┉\n**〢u!instagram**\nCopias el ultimo link del post y lo pegas usando el comando. [u!instagram link]')
    .setFooter('Creado por Pizzahondo | Pizzahondo#9011', 'https://cdn.discordapp.com/avatars/530794748676407296/61c880145e0ebcec6043d638322e7132.webp') 
    const info = new Discord.MessageEmbed()
    .setTitle('📊 Comandos de información')
    .setColor(0x00c3ff)
    .setThumbnail(client.user.displayAvatarURL())
    .setDescription('**〢u!comandos**\nSe muestra la información de los comandos con su descripción.\n┉┉┉┉\n**〢u!ayuda**\nSe muestra una lista de comandos pero sin su descripción.\n┉┉┉┉\n**〢u!usuario**\nSe muestra la información de un usuario mencionado.(Debes mencionarte para ver tu perfil)\n┉┉┉┉\n**〢u!bot**\nSe muestra la información del BOT.\n┉┉┉┉\n**〢u!invitar**\nSe muestra los links para invitar al BOT.\n┉┉┉┉\n**〢u!servidor**\nSe muestra la información del servidor.')
    .setFooter('Creado por Pizzahondo | Pizzahondo#9011', 'https://cdn.discordapp.com/avatars/530794748676407296/61c880145e0ebcec6043d638322e7132.webp') 
    const pub = new Discord.MessageEmbed()
    .setTitle('👥 Comandos para todos')
    .setColor(0x00c3ff)
    .setThumbnail(client.user.displayAvatarURL())
    .setDescription('**〢u!embed**\nCon este comando se puede crear un embed. (Solo el texto)\n┉┉┉┉\n**〢u!avatar**\nCon este comando se muestra el avatar de alguien mencionado o el que uso el comando.\n┉┉┉┉\n**〢u!ping**\nCon este comando se muestra el ping del BOT.\n┉┉┉┉\n**〢u!prefijo**\nCon este comando se muestra el prefijo del BOT.\n┉┉┉┉\n**u!bola8**\nCon este comando te respondera el BOT a una pregunta que le hagas.')
    .setFooter('Creado por Pizzahondo | Pizzahondo#9011', 'https://cdn.discordapp.com/avatars/530794748676407296/61c880145e0ebcec6043d638322e7132.webp') 
    const pages = [mod, info, pub];
    ReactionPages(message, pages, false)
  }
})

///////////////////////////////////Bienvenida////////////////////////////////////////////////

//Bienvenida
client.on('guildMemberAdd', (member) => {
  let channelID = '798574291423592528';
  if (member.guild.id != '761942934420717568') return;
  let embed = new Discord.MessageEmbed()
    .setTitle(':tada: Nuevo miembro!')
    .setDescription(`**${member.user.username}** se a unido a ***LuckyChance 🐉!***\nLee las normas en <#778607787998576670>. Cuando acabes escribe en el canal <#810108621542129704>, la palabra **"Acepto"**. Una vez hecho eso podrás ver el servidor y ya de paso, ¿porque no comienzas tu aventura escribiendo por <#798155467888132096>?`)
    .setColor(0x00c3ff)
    .setImage('https://media.discordapp.net/attachments/806965599518720060/808076099921772554/Bienvenida.png?width=720&height=405')
    .setFooter('Disfruta!')
    .setTimestamp()
  client.channels.cache.get(channelID).send(embed)
})

///////////////////////////////////Información///////////////////////////////////////
//Avatar
client.on("message", message => {
  let user = message.mentions.users.first()
  if (!user) user = message.author;
  if (message.content.startsWith("u!avatar")) {
    const embed = new Discord.MessageEmbed()
      .setTitle("👤 Este es tu avatar")
      .setImage(user.displayAvatarURL())
      .setColor(0x00c3ff)
      .setFooter('El avatar pedido: ' + message.member.displayName + '.')
    message.reply(embed)
  }
});

//Invitación
client.on("message", message => {
  if (message.content.startsWith('u!invitar')) {
    const embed = new Discord.MessageEmbed()
      .setTitle('🤖 Invitación del BOT')
      .setColor(0x00c3ff)
      .setDescription('Si clicas en las letras azules podras invitarme donde tu quieras ⇪, pero si quieres entrar al servidor de LuckyChance usa este:\nhttps://discord.gg/rvXST2rt8j')
      .setTimestamp()
      .setURL('https://discord.com/api/oauth2/authorize?client_id=792860210095980564&permissions=0&scope=bot')
      .setFooter('Creado por Pizzahondo | Pizzahondo#9011', 'https://cdn.discordapp.com/avatars/530794748676407296/61c880145e0ebcec6043d638322e7132.webp') 
    message.channel.send(embed)
  }
})

//Servidor
client.on('message', message => {
if (message.content.startsWith('u!servidor')) {
let region;
        switch (message.guild.region) {
            case "europe":
                region = '🇪🇺 Europe';
                break;
            case "us-east":
                region = '🇺🇸 us-east'
                break;
            case "us-west":
                region = '🇺🇸 us-west';
                break;
            case "us-south":
                region = '🇺🇸 us-south'
                break;
            case "us-central":
                region = '🇺🇸 us-central'
                break;
        }
        const embed = new Discord.MessageEmbed()
            .setThumbnail(message.guild.iconURL({dynamic : true}))
            .setColor(0x00c3ff)
            .setTitle(`${message.guild.name} información del servidor`)
            .setFooter('Creado por Pizzahondo | Pizzahondo#9011', 'https://cdn.discordapp.com/avatars/530794748676407296/61c880145e0ebcec6043d638322e7132.webp') 
            .addFields(
                {
                    name: "🌍 Propietario: ",
                    value: message.guild.owner.user.tag,
                    inline: true
                },
                {
                    name: "👥 Miembros: ",
                    value: `Hay ${message.guild.memberCount} miembros en el servidor!`,
                    inline: true
                },
                {
                    name: "🟢 Miembros en línea: ",
                    value: `Hay ${message.guild.members.cache.filter(m => m.user.presence.status == "online").size} usuarios en línea!`,
                    inline: true
                },
                {
                    name: "🤖 BOTS: ",
                    value: `Hay ${message.guild.members.cache.filter(m => m.user.bot).size} bots en el servidor!`,
                    inline: true
                },
                {
                    name: "📅 Fecha de creación: ",
                    value: message.guild.createdAt.toLocaleDateString("en-us"),
                    inline: true
                },
                {
                    name: "🔢 Número de roles: ",
                    value: `Hay ${message.guild.roles.cache.size} roles en el servidor.`,
                    inline: true,
                },
                {
                    name: `🗺️ Region: `,
                    value: region,
                    inline: true
                },
                {
                    name: `✅ Verificado: `,
                    value: message.guild.verified ? 'El servidor esta verficado.' : `El servidor no esta verficado.`,
                    inline: true
                },
                {
                    name: '🔮 Boosters: ',
                    value: message.guild.premiumSubscriptionCount >= 1 ? `Hay ${message.guild.premiumSubscriptionCount} de usuarios mejorando el servidor` : `No hay nadie mejorando el servidor`,
                    inline: true
                },
                {
                    name: "🤨 Emojis: ",
                    value: message.guild.emojis.cache.size >= 1 ? `Hay ${message.guild.emojis.cache.size} emojis!` : 'No hay emojis' ,
                    inline: true
                }
            )
            message.channel.send(embed)
      }
})

//Usuario
client.on('message', message => {
    if (message.content.startsWith('u!usuario')) {
        let user = message.mentions.members.first() || message.member;

        let status;
        switch (user.presence.status) {
            case "online":
                status = "🟢 En línea";
                break;
            case "dnd":
                status = "🔴 No molestar";
                break;
            case "idle":
                status = "🟠 Ausente";
                break;
            case "offline":
                status = "⚪️ Desconectado";
                break;
        }

        const embed = new Discord.MessageEmbed()
            .setTitle(`Información de ${user.user.username}.`)
            .setColor(0x00c3ff)
            .setThumbnail(user.user.displayAvatarURL({ dynamic: true }))
            .setFooter('Creado por Pizzahondo | Pizzahondo#9011', 'https://cdn.discordapp.com/avatars/530794748676407296/61c880145e0ebcec6043d638322e7132.webp') 
            .addFields(
                {
                    name: "🌍 Nombre: ",
                    value: user.user.username,
                    inline: true
                },
                {
                    name: "#️⃣ Hastag: ",
                    value: `#${user.user.discriminator}`,
                    inline: true
                },
                {
                    name: "🆔 ID: ",
                    value: user.user.id,
                    inline: true
                },
                {
                    name: "🔘 Estado: ",
                    value: status,
                    inline: true
                },
                {
                    name: "🎮 Actividad: ",
                    value: user.presence.activities[0] ? user.presence.activities[0].name : `El usuario no esta jugando a nada!`,
                    inline: true
                },
                {
                    name: '👤 Avatar: ',
                    value: `[Clica aquí](${user.user.displayAvatarURL()})`,
                    inline: true
                },
                {
                    name: '📅 Fecha de creación: ',
                    value: user.user.createdAt.toLocaleDateString("en-us"),
                    inline: true
                },
                {
                    name: '📆 Fecha de unión: ',
                    value: user.joinedAt.toLocaleDateString("en-us"),
                    inline: true
                },
                {
                    name: '🔮 Roles del usuario: ',
                    value: user.roles.cache.map(role => role.toString()).join(" ,"),
                    inline: true
                }
            );
        message.channel.send(embed);
    }
});

//Ping
client.on("message", message => {
  if (message.content.startsWith('u!ping')) {
    const embed = new Discord.MessageEmbed()
      .setColor(0x00c3ff)
      .setDescription(`🏓  ${Math.round(client.ws.ping)} ms`)
      .setFooter('Creado por Pizzahondo | Pizzahondo#9011', 'https://cdn.discordapp.com/avatars/530794748676407296/61c880145e0ebcec6043d638322e7132.webp') 
    message.channel.send(embed)
  }
})

//////////////////////////////////////////////Publico///////////////////////////////////////////

//8Ball
client.on('message', message => {
  if (message.content.startsWith('u!bola8')) {
  message.delete();
  let question = message.content.split(`u!bola8`).join(" ");
  let results = ['A lo mejor',
	'La verdad es que... no.',
	'Ni te lo imaginas en tus sueños.',
	'Hay muy buena probabilidad.',
	'Posiblemente la verdad.',
	'Creo que sí.',
	'Esperemos que no.',
	'Esperemos que sí.',
	'Nunca!',
	'Jajaja! Enserio?!?',
	'Pfft.',
	'El futuro es incierto.',
	'Diría que no.',
	'A quién le importa?',
	'Posiblemente.',
	'Jamás de los jamases.',
	'Hay una pequeña probabilidad.',
	'Sí!']
  let result = Math.floor((Math.random() * results.length));
    const embed = new Discord.MessageEmbed()
    .setTitle('🎱 Bola8')
    .setColor(0x00c3ff)
    .setThumbnail('https://media.discordapp.net/attachments/806612663240884224/807974707609075742/61qFGLBkfhL._AC_SX425_.jpg')
    .addField('Tu pregunta:', question)
    .addField('Bola8 te responde:', results[result])
    .setDescription(`Preguntado por: **${message.author.tag}**`)
    .setFooter('Creado por Pizzahondo | Pizzahondo#9011', 'https://cdn.discordapp.com/avatars/530794748676407296/61c880145e0ebcec6043d638322e7132.webp') 
    message.channel.send(embed)
  }
})

//Sugerencias
client.on('message', message => {
  if (String(message.content).substring(0, 12) === 'u!sugerencia') {
    message.delete();
    let embed = new Discord.MessageEmbed()
      .setThumbnail(message.author.displayAvatarURL())
      .setDescription('📊 Sugerencia:\n' + String(message.content).substring(12, String(message.content).length))
      .setTitle(message.author.username + ' a hecho una sugerencia.')
      .addField('Votación', 'Esperando que los Luckys voten')
      .setFooter('Si quieres hacer una sugerencia usa u!sugerencia')
      .setColor(0xffff00);
    message.channel.send(embed).then(message => message.react('<:LuckyChanceBien:807226534359990273>')).then(reaction => reaction.message.react('<:LuckyChanceMal:807223490326560810>'));
  }
});

client.on('message', message => {
if (String(message.content).substring(0, 10) === 'u!aceptada'){
    if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('No tienes permisos...')
    message.delete();
    const embed = new Discord.MessageEmbed()
      .setTitle('Sugerencia')
      .setDescription('<:LuckyChanceBien:807226534359990273> Sugerencia aceptada de:\n' + String(message.content).substring(10, String(message.content).length))
      .setThumbnail('https://media.discordapp.net/attachments/793166804523679775/794904701907763200/Bombilla.png')
      .setColor(0x00c3ff)
      .setFooter('Enhorabuena tu sugerencia fue aceptada.')
    message.channel.send(embed)
  }
});

client.on('message', message => {
 if (String(message.content).substring(0, 11) === 'u!rechazada')  {
    if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('No tienes permisos...')
    message.delete();
    const embed = new Discord.MessageEmbed()
      .setTitle('Sugerencia')
      .setDescription('<:LuckyChanceMal:807223490326560810> Sugerencia rechazada de:\n' + String(message.content).substring(11, String(message.content).length))
      .setThumbnail('https://media.discordapp.net/attachments/793166804523679775/794906918317064232/Bombilla_off.png')
      .setColor(0x005bb0)
      .setFooter('Lo sentimos tu sugerencia fue rechazada.')
    message.channel.send(embed);
  }
});

//Embed
client.on('message', message => {
  if (String(message.content).substring(0, 7) === 'u!embed') {
    message.delete();
    let embed = new Discord.MessageEmbed()
      .setThumbnail(message.author.displayAvatarURL())
      .setDescription('〢El embed:\n' + String(message.content).substring(7, String(message.content).length))
      .setTitle(message.author.username + ' ha creado un embed.')
      .setAuthor('Team Updates', 'https://media.discordapp.net/attachments/806965599518720060/807649573580308490/Updates.png')
      .setFooter('Si quieres hacer un embed usa u!embed [contenido]')
      .setColor('RANDOM');
    message.channel.send(embed)
  }
})

/////////////////////////////////////////////////////Moderación/////////////////////////////////
//Clear
client.on("message", message => {
    let args = message.content.substring().split(" ");
        switch(args[0]){
            case 'u!limpiar':

            if(!message.member.hasPermission("ADMINISTRATOR")){
                return message.reply('No puedes hacer eso.')
            }

            if(!args[1]){
                return message.reply('porfavor dame un número para borrar mensajes.')
            }
            message.channel.send(`Se han eliminado ${args[1]} mensajes. <:LuckyChanceBien:807226534359990273> `).catch(err => console.log(err));
            message.channel.bulkDelete(args[1]);
    }
});

//Mute
client.on("message", message => {
  if (message.content.startsWith('u!silenciar')) {
    if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('No tienes permisos...')
    const Member = message.mentions.members.first() || message.guild.members.cache.get(args[0])
    if (!Member) return message.channel.send('No encuentro el rol.')
    const role = message.guild.roles.cache.find(role => role.name.toLowerCase() === 'silenciado')
    if (!role) {
      try {
        message.channel.send('Creando el rol...')

        let muterole = message.guild.roles.create({
          data: {
            name: 'silenciado',
            permissions: []
          }
        });
        message.guild.channels.cache.filter(c => c.type === 'text').forEach(async (channel) => {
          channel.createOverwrite(muterole, {
            SEND_MESSAGES: false,
            ADD_REACTIONS: false
          })
        });
        message.channel.send('Se creado el rol silenciado.')
      } catch (error) {
        console.log(error)
      }
    };
    let role2 = message.guild.roles.cache.find(r => r.name.toLowerCase() === 'silenciado')
    if (Member.roles.cache.has(role2)) return message.channel.send(`${Member.displayName} esta ahora mismo silenciado.`)
    Member.roles.add(role2)
    const embed = new Discord.MessageEmbed()
      .setTitle('<:LuckyChanceMal:807223490326560810> Usuario silenciado')
      .setDescription(`**${Member.displayName}** esta ahora silenciado.`)
      .setColor(0x0005bb0)
      .setFooter('Creado por Pizzahondo | Pizzahondo#9011', 'https://cdn.discordapp.com/avatars/530794748676407296/61c880145e0ebcec6043d638322e7132.webp') 
      .setTimestamp()
    message.channel.send(embed)
  }
})

//Unmute
client.on("message", message => {
  if (message.content.startsWith('u!desilenciar')) {
    if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('No tienes permisos...')
    const Member = message.mentions.members.first() || message.guild.members.cache.get(args[0])

    if (!Member) return message.channel.send('Miembro no encontrado.')

    const role = message.guild.roles.cache.find(r => r.name.toLowerCase() === 'silenciado');

    Member.roles.remove(role)

    const embed = new Discord.MessageEmbed()
      .setTitle('<:LuckyChanceBien:807226534359990273> Usuario desilenciado')
      .setDescription(`**${Member.displayName}** esta ahora desilenciado.`)
      .setColor(0x00c3ff)
      .setFooter('Creado por Pizzahondo | Pizzahondo#9011', 'https://cdn.discordapp.com/avatars/530794748676407296/61c880145e0ebcec6043d638322e7132.webp') 
      .setTimestamp()
    message.channel.send(embed)
  }
})

//Kick
client.on('message', message => {
  if (message.content.startsWith('u!kick')) {
    if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('No tienes permisos...')
    const user = message.mentions.users.first();
    if (user) {
      const member = message.guild.member(user);
      if (member) {
        member
          .kick('Razón opcional')
          .then(() => {
            const embed = new Discord.MessageEmbed()
              .setTitle('<:LuckyChanceMal:807223490326560810> Usuario expulsado')
              .setDescription(`El usuario: **${user.tag}**.\nA sido expulsado del servidor.`)
              .setColor(0x005bb0)
              .setFooter('Creado por Pizzahondo | Pizzahondo#9011', 'https://cdn.discordapp.com/avatars/530794748676407296/61c880145e0ebcec6043d638322e7132.webp') 
              .setTimestamp()
            message.channel.send(embed)
          })
          .catch(err => {
            message.reply('No pude expulsarlo.');
            console.error(err);
          });
      } else {
        message.reply("Ese usuario no esta.");
      }
    } else {
      message.reply("No has mencionado a nadie.");
    }
  }
});

//Ban
client.on('message', message => {
  if (!message.guild) return;
  if (message.content.startsWith('u!ban')) {
    if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('No tienes permisos...')
    const user = message.mentions.users.first();
    if (user) {
      const member = message.guild.member(user);
      if (member) {
        member
          .ban({
            reason: 'Razón opcional',
          })
          .then(() => {
            const embed = new Discord.MessageEmbed()
              .setTitle('<:LuckyChanceMal:807223490326560810> Usuario baneado')
              .setDescription(`El usuario: **${user.tag}**.\nA sido baneado del servidor.`)
              .setColor(0x005bb0)
              .setFooter('Creado por Pizzahondo | Pizzahondo#9011', 'https://cdn.discordapp.com/avatars/530794748676407296/61c880145e0ebcec6043d638322e7132.webp') 
              .setTimestamp()
            message.channel.send(embed)
          })
          .catch(err => {
            message.reply('No pude banearlo.');
            console.error(err);
          });
      } else {
        message.reply("Ese usuario no esta.");
      }
    } else {
      message.reply("No has mencionado a nadie.");
    }

  }
});

//Registro
client.on("messageDelete", async message => {
  const logchannel = message.guild.channels.cache.find(ch => ch.name === '「🌍┊registro」')
  if(!logchannel) return

  const embed = new Discord.MessageEmbed()
  .setTitle('<:LuckyChanceBien:807226534359990273>  Mensaje eliminado')
  .addField('〢Miembro: ', message.author.tag)
  .addField('〢Mensaje: ', message)
  .addField('〢Eliminado en: ', message.channel)
  .setColor(0x59d8ff)
  .setFooter('Mensaje eliminado')
  .setTimestamp()
logchannel.send(embed)
})
