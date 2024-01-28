module.exports = {
    name: 'skip',
    inVoiceChannel: true,
    run: async (client, message) => {
      const queue = client.distube.getQueue(message)
      if (!queue) return message.channel.send(`${client.emotes.error} | Hong còn nhạc đâu mà skippp!`)
      try {
        const song = await queue.skip()
        message.channel.send(`${client.emotes.success} | Skipped! Now playing:\n${song.name}`)
      } catch (e) {
        message.channel.send(`${client.emotes.error} | ${e}`)
      }
    }
  }