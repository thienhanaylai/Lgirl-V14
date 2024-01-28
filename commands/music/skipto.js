module.exports = {
    name: 'skipto',
    inVoiceChannel: true,
    run: async (client, message, args) => {
      const queue = client.distube.getQueue(message)
      if (!queue) return message.channel.send(`${client.emotes.error} | Hết nhạc rồii!`)
      if (!args[0]) {
        return message.channel.send(`${client.emotes.error} | Muốn chuyển bài số mấy cđ ?`)
      }
      const num = Number(args[0])
      if (isNaN(num)) return message.channel.send(`${client.emotes.error} | Muốn chuyển bài số mấy ?`)
      await client.distube.jump(message, num).then(song => {
        message.channel.send({ content: `Skipped to: ${song.name}` })
      })
    }
  }