module.exports = {
    config: {
        name: "hlw",
        version: "1.0",
        author: "kivv",
        countDown: 5,
        role: 0,
        shortDescription: "No Prefix",
        longDescription: "No Prefix",
        category: "reply",
    },
onStart: async function(){}, 
onChat: async function({
    event,
    message,
    getLang
}) {
    if (event.body && event.body.toLowerCase() == "hlw") return message.reply("hello। 😒 ★");
}
};{
  onStart: async function(){},
  onChat: async function({ event, message, getLang }) {
    if (event.body && event.body.toLowerCase() === "hlw") {
      return message.reply({
        body: "ভালবাসা অনেক সুন্দর ",
        attachment: fs.createReadStream("abir/love.mp4"),
      });
    }
  }
};