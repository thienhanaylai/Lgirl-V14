const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: 'ping',
    category: 'user',
    aliases: ['ping'],
    usage: "~ping",
    description: "Kiểm tra độ trễ",
    run: async(client, message, args) => {
        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member
        const Embed = new EmbedBuilder()
            .setColor(0x0099FF)
            .setDescription(`🏓~Pong : ${client.ws.ping} ms\n`)
            .setTimestamp()
            .setFooter({
                text: `Command Requested by: ${member.user.tag}`,
                iconURL: member.user.displayAvatarURL(),
              })
    
    message.channel.send({ embeds: [Embed] });
  
    }
}