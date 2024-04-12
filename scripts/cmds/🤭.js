const fs = require('fs');
module.exports = {
  config: {
    name: "🤭",
    version: "1.0",
    author: "otineeeeyyyy",
    countDown: 5,
    role: 0,
    shortDescription: "no prefix",
    longDescription: "no prefix",
    category: "no prefix",
  },
  onStart: async function(){},
  onChat: async function({ event, message, getLang }) {
    if (event.body && event.body.toLowerCase() === "🤭") {
      return message.reply({
        body: "এত সরম  পাও কেন সোনা ★",
        attachment: fs.createReadStream("abir/sorom.mp4"),
      });
    }
  }
};