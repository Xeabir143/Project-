const fs = require('fs');
module.exports = {
  config: {
    name: "😁",
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
    if (event.body && event.body.toLowerCase() === "😁") {
      return message.reply({
        body: "-এ্ঁতো্ঁ না্ঁ হে্ঁসে্ঁ সি্ঁঙ্গে্ঁল্ঁ আমিনুল কে্ঁ গ্ঁফ্ঁ দে্ঁ!😹🥀 🥰🥰\n Editor : Aminul Sordar ",
        attachment: fs.createReadStream("abir/gfde.mp3"),
      });
    }
  }
};