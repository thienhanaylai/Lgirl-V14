module.exports = {
    name: 'pause',
    aliases: ['pause', 'hold'],
    inVoiceChannel: true,
    run: async (client, message) => {
      const queue = client.distube.getQueue(message)
      if (!queue) return message.channel.send(`${client.emotes.error} | There is nothing in the queue right now!`)
      if (queue.paused) {
        queue.resume()
        return message.channel.send('Lên nhạc !')
      }
      queue.pause()
      message.channel.send('Đã dừng !')
    }
  }