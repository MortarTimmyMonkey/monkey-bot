const Commando = 
require('discord.js-commando')
const Discord = require('discord.js')
const bot = new Commando.Client({
    owner: '531199319387275295'
});

bot.registry.registerGroup('fun', 'Fun');
bot.registry.registerGroup('misc', 'Misc');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + 
'/commands');

bot.on('message',function(message){
  if(message.content == "Monkeys Lol")
  {
      message.channel.send("MONKEYS!")
  }
});

bot.on('ready',function(){
      console.log("Hello world!")
})

bot.on('error', console.error);
 

bot.login(procces.env.TOKEN)
