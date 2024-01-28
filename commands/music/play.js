module.exports = {
    name: 'play',
    aliases: ['p'],
    inVoiceChannel: true,
    run: async (client, message, args) => {
      const string = args.join(' ')
      if (!string) return message.channel.send(`${client.emotes.error} | Không nhập tên sao tao tìm.`)
      client.distube.play(message.member.voice.channel, string, {
        member: message.member,
        textChannel: message.channel,
        message
      })
    }
  }