module.exports = {
    name: 'resume',
    aliases: ['resume', 'unpause'],
    inVoiceChannel: true,
    run: async (client, message) => {
      const queue = client.distube.getQueue(message)
      if (!queue) return message.channel.send(`${client.emotes.error} | There is nothing in the queue right now!`)
      if (queue.paused) {
        queue.resume()
        message.channel.send('Lên nhạc !')
      } else {
        message.channel.send('Tiếp tục cái gì nữa ?')
      }
    }
  }