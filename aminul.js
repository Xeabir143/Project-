module.exports = {
    config: {
        name: "aminul",
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
    if (event.body && event.body.toLowerCase() == "aminul") return message.reply(" বস, আমিনুল সিংগেল পোলা তাকে একটা গফ দেও😒😒");
}
};