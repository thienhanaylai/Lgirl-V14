const { EmbedBuilder, version } = require("discord.js");
const os = require('os')
const si = require('systeminformation');

module.exports = {
    name: "bot",
    category: "bot",
    aliases: ["bot"],
    run: async(client, message, args) => {
        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member
        const cpu = await si.cpu();
        const name = message.guild.ownerId;
        const embed = new EmbedBuilder()
            .setColor(0x0099FF)
            .setThumbnail(message.guild.iconURL())
            .setFooter({
                text: `Command Requested by: ${member.user.tag}`,
                iconURL: member.user.displayAvatarURL(),
              })
            .setDescription(`
**━━━━━━Sever Information━━━━━━**
**Servers name** : ${message.guild.name}
**Owner sever** : <@${name}>
**Member count** : ${message.guild.memberCount} users
**Channel count** : ${message.guild.channels.cache.size} channel
**━━━━━━System Information━━━━━━**
**Discord.js** : \`v${version}\`
**Platfrom** : \`${os.type}\`
**CPU** : \`${os.cpus()[0].model}\`
**Cores** : \`${cpu.cores} core\`
**Speed** : \`${os.cpus()[0].speed} MHz\`
**Total Memory** : \`${(os.totalmem() / 1024 / 1024).toFixed(2)} Mb\`
**Free Memory** : \`${(os.freemem() / 1024 / 1024).toFixed(2)} Mb\`

`)

        message.channel.send({ embeds: [embed] });
    }
}