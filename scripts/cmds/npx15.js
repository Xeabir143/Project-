module.exports = {
    config: {
        name: "hello",
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
    if (event.body && event.body.toLowerCase() == "hello") return message.reply("🤣জান এতো হেলতে বলো না আমি হেলে তোমার প্রেমে পরে জাব 😂😂 ");
}
};