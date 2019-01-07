const discord = require('discord.js');
const commando = require('discord.js-commando');

class InfoCommand extends commando.Command
{
    constructor(client)
    {
          super(client,{
                name: 'info',
                group: 'misc',
                memberName: 'info',
                description: 'Info about the bot'
          });
    }
    
   async run(message,args)
   {
          var myInfo = new discord.RichEmbed()
                .addField("Name", "MonkeyBot", true)
                .addField("Author", "Issac Monkey", true)
                .setColor("3FA227")

          message.channel.send(myInfo);
   }
}

module.exports = InfoCommand
