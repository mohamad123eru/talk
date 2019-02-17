\\جميع الحقوق محفوظة لريـــبــــل فقط 
\\ ReBeeeL & Codes
client.on('message',message =>   {
if(message.rebel.bot) return;
  if(message.channel.type == 'dm') return;
  if(message.content.startsWith(prefix + "talk")) {
      var attentions = {};
      attentions[message.guild.id] = { };
      message.channel.send( message.author + ', **Wait , PowerBot.**').then( (m) =>{
      m.edit( message.author + ', **أرسل أيدي الروم**' )
      m.channel.awaitMessages( m1 => m1.author == message.author,{ maxMatches: 1, time: 600000 } ).then ( (m1) => {
      m1 = m1.first();
      attentions[message.guild.id]['id'] = m1.content;
      m1.delete();
m1 = message.guild.channels.get(`${attentions[message.guild.id]['id']}`)
if(!m1) return message.reply(`**الأيدي هذا غير صحيح \`${attentions[message.guild.id]['id']}\`**`);

      m.edit(message.author+"**أرسل الرساله المراد توجيهها للروم**")
      m.channel.awaitMessages( m2 => m2.author == message.author,{ maxMatches: 1, time: 600000 }).then ( (m2) => {
      m2 = m2.first();
      attentions[message.guild.id]['msg'] = m2.content;
      m2.delete();
      m.delete();
      message.channel.send(`**هل تريد إرسال في روم <#${attentions[message.guild.id]['id']}>
${attentions[message.guild.id]['msg']}**`).then(msge => {
      msge.react('✅').then( r => {
      msge.react('❌')
      const oneFilterBB = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
      const threeFilterBB = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;
      const oneBY = msge.createReactionCollector(oneFilterBB, {maxMatches : 1,time : 400000,});
      const threeBY = msge.createReactionCollector(threeFilterBB, {maxMatches : 1,time : 400000,});
      oneBY.on('collect', r => {
      msge.delete();
      message.guild.channels.get(`${attentions[message.guild.id]['id']}`).send(`${attentions[message.guild.id]['msg']}`)
      }).catch(RebeL =>{ console.log('`Error`: ' + RebeL)});
          threeBY.on('collect', r => {
      msge.delete();
      })
      })
  })
      });
      });
      });
      
    }
    });