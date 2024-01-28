const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: 'avt',
    category: 'user',
    aliases: ['a'],
    usage: "~a [@người cần lấy avt]",
    description: "Sử dụng lệnh này để download avt của người khác",
    run: (client, message, args) => {
        try {

          //  console.log(message.mentions.members.first())
            const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member
            const URL = member.user.avatarURL({ format: 'jpg', dynamic: true, size: 1024 });
            const avatarEmbed = new EmbedBuilder()
                .setImage(URL)
                .setURL(URL)
                .setColor(0x0099F)
                .setTimestamp()
                .setFooter({
                    text: `Command Requested by: ${member.user.tag}`,
                    iconURL: member.user.displayAvatarURL(),
                  })
            message.channel.send({ embeds: [avatarEmbed] });
        } catch (error) {
            console.log(error);
        }
    }
}