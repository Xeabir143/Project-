const fs = require('fs');
module.exports = {
  config: {
    name: "😠",
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
    if (event.body && event.body.toLowerCase() === "😠") {
      return message.reply({
        body: "নিরব_থাকে_বলে_কাউকে_দুর্বল_ভেবো_না___নীরবতার উত্তর অনেক কঠিন হয়  🥰🥰 ",
        attachment: fs.createReadStream("abir/😠.mp4"),
      });
    }
  }
};