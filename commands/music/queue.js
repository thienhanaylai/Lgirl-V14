const { Constants } = require('discord.js')

module.exports = {
  name: 'join',
  aliases: ['j'],
  run: async (client, message, args) => {
    let voiceChannel = message.member.voice.channel
    if (args[0]) {
      voiceChannel = await client.channels.fetch(args[0])
      if (!Constants.VoiceBasedChannelTypes.includes(voiceChannel?.type)) {
        return message.channel.send(`${client.emotes.error} | ${args[0]} is not a valid voice channel!`)
      }
    }
    if (!voiceChannel) {
      return message.channel.send(
        `${client.emotes.error} | Kêu tao dô phòng mà hong ở trong đó sao tao biết phòng nàoo!`
      )
    }
    client.distube.voices.join(voiceChannel)
  }
}