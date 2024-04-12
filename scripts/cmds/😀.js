module.exports = {
    config: {
        name: "😀",
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
    if (event.body && event.body.toLowerCase() == "😀") return message.reply(" কাউকে বাধ্য করোনা
তুমি চুপ থাকো আর বুঝিয়ে দাও
তাদের ছাড়া তুমিও থাকতে পারো!!!!
 ");
}
};