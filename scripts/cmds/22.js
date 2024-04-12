const fs = require('fs');
module.exports = {
  config: {
    name: "aminul vaiyar gf",
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
    if (event.body && event.body.toLowerCase() === "aminul vaiyar gf") {
      return message.reply({
        body: "আমিনুল ভাইয়ের gf কে দেখো। আফসোস করো না তোমরাও পেয়ে যাবে 🥰🥰 ",
        attachment: fs.createReadStream("abir/aminulgf.mp4"),
      });
    }
  }
};