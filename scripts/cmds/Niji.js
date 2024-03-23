const axios = require('axios');
const fs = require('fs');

module.exports = {
  config: {
    name: 'niji another model',
    version: '1.0',
    author: 'Siam',
    countDown: 0,
    role: 0,
    longDescription: {
      en: 'Text to Image'
    },
    category: 'ai',
    guide: {
      en: '1 | Sdxl 1.0'
    }
  },

  onStart: async function ({ message, args, event, api }) {
    const permission = ["100095208485891"];
    if (!permission.includes(event.senderID)) {
      api.sendMessage(
        `🐸 | Command "niji" currently unavailable buy premium to use the command.`,
        event.threadID,
        event.messageID
      );
      return;
    }
    try {
      const info = args.join(' ');
      const [prompt] = info.split('|').map(item => item.trim());
      const text = args.join(" ");
      if (!text) {
        return message.reply("🐸 provide q randi");
      }
      const modelParam = '1'; // Utilisation du premier modèle uniquement
      const apiUrl = `https://turtle-apis.onrender.com/api/sdxl?prompt=${prompt}&model=${modelParam}`;

      await message.reply('Please wait...🐸');

      const form = {};
      form.attachment = [];
      form.attachment[0] = await global.utils.getStreamFromURL(apiUrl);

      message.reply(form);
    } catch (error) {
      console.error(error);
      await message.reply('lado kha🐸');
    }
  }
};
