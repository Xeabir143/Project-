const fs = require('fs');
module.exports = {
  config: {
    name: "😇",
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
    if (event.body && event.body.toLowerCase() === "😇") {
      return message.reply({
        body: "ও্ঁ গো্ঁ মা্ঁথা্ঁ ঘু্ঁড়া্ঁচ্ছে্ঁ তো্ঁমা্ঁর্ঁ😇🥀\n Editor : Aminul Sordar ",
        attachment: fs.createReadStream("abir/gurai.mp3"),
      });
    }
  }
};