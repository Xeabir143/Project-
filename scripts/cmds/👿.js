module.exports = {
    config: {
        name: "👿",
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
    if (event.body && event.body.toLowerCase() == "👿") return message.reply(" 🤖Dear,💌 ️রাগ করে না সোনা পাখি এতো রাগ শরীরের জন্য ভালো না🥰🤖");
}
};