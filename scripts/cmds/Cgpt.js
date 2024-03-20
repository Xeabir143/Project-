const axios = require("axios");

module.exports = {
  config: {
    name: 'cgpt',
    version: '1.0.0',
    author: 'Siam the frog>🐸',
    countDown: 0,
    role: 0,
    category: 'Ai',
    shortDescription: 'ask any question', 
    longDescription: 'This is a different model of chat gpt',
    guide: {
      en: '{pn}chatgpt question',
    },
  },

  onStart: async function({ api, message, event, args, commandName }) {
    let prompt = args.join(" ");
    
    if (!prompt) {
      message.reply("kuch to bol machikney");
      return;
    }


    api.setMessageReaction("🐸", event.messageID, () => {}, true);

    const url = `https://chatgayfeytie-017b1d0f09fc.herokuapp.com/chatgpt?prompt=${encodeURIComponent(prompt)}`;

    try {
      const response = await axios.get(url);
      const result = response.data.response;

      message.reply(`${result}`);

      api.setMessageReaction("🐸", event.messageID, () => {}, true);
    } catch (error) {
      message.reply('chup hoja randi problem hua');
      api.setMessageReaction("🐸", event.messageID, () => {}, true);
    }
  },
};
