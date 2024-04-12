module.exports = {
    config: {
        name: "Abir",
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
    if (event.body && event.body.toLowerCase() == "abir") return message.reply(" আমার বস আমিনুলকে আর একবার মেনশন দিলে তোমার নাকের মধ্যে ঘুষি মারমু😡😘");
}
};