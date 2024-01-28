const { EmbedBuilder } = require('discord.js');

module.exports.DistubeEvents = (distube) => {

distube
  .on('playSong', (queue, song) => {

  const embed = new EmbedBuilder()
    .setColor(0x0099FF)
      .setDescription(` **Now Playing**\n[${song.name}](${song.url})`)
      .setThumbnail(`${song.thumbnail}`)
      .setTimestamp()
  queue.textChannel.send({ embeds: [embed] });
}
  )
  .on('addSong', (queue, song) =>{
    const embed = new EmbedBuilder()
    .setColor(0x0099FF)
      .setDescription(` **Added to queue**\n[${song.name}](${song.url})`)
      .setThumbnail(`${song.thumbnail}`)
      .setTimestamp()
  queue.textChannel.send({ embeds: [embed] });
  }
  )
  .on('addList', (queue, playlist) =>{
    const embed = new EmbedBuilder()
    .setColor(0x0099FF)
      .setDescription(` **Added **\`[${playlist.name}]\` to queue`)
      .setThumbnail(`${song.thumbnail}`)
      .setTimestamp()
  queue.textChannel.send({ embeds: [embed] });
  }
  )
  .on('error', (channel, e) => {
    if (channel) channel.send(`${emotes.error} | Lỗi rồi kêu thằng <@711231657910468648> đi!`)
    else console.error(e)
  })
  .on('empty', channel => channel.send('Hết nhạc rồi bye...!'))
  .on('searchNoResult', (message, query) =>
    message.channel.send(`| Không tìm thấy \`${query}\`!`)
  )
  .on('finish', queue => queue.textChannel.send('Hết nhạc rồi !'))

}