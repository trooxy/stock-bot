const { Client, GatewayIntentBits } = require('discord.js');
const express = require('express');

// Keep-alive için web sunucusu (Glitch için gerekli)
const app = express();
app.get('/', (req, res) => res.send('Bot aktif!'));
app.listen(3000, () => console.log('Web sunucusu çalışıyor.'));

const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent]
});

const TOKEN = 'BURAYA_BOT_TOKENİNİ_YAPISTIR'; // 👈 Bot token buraya

client.once('ready', () => {
  console.log(`${client.user.tag} olarak giriş yapıldı.`);
});

client.on('messageCreate', message => {
  if (message.content === '/stock') {
    const stockList = `
📦 **Grow A Garden Stokları**
🥚 Egg: 12
🌱 Seeds: 43
🌑 Blood Moon: 4
⚙️ Gear: 8
💎 Cosmetic: 20
    `;
    message.reply(stockList);
  }
});

client.login(TOKEN);MTM3NjU5NTYwODIwMjM3OTMzNA.GLfI7_.-jVIFx_m7iLe-f4qH2CLP7lsK5cJ15Ww3ZfUuM
