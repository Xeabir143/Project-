module.exports = {
    config: {
        name: "ki koro",
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
    if (event.body && event.body.toLowerCase() == "ki koro") return message.reply(" টিভিতে বসে সোফা দেখছি 🤣😘");
}
};