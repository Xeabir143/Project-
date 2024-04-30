module.exports = {
    config: {
        name: "valobasa",
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
    if (event.body && event.body.toLowerCase() == "valobasa") return message.reply(" - ভালোবাসা নামক আব্লামি করতে মন চাইলে আমার বসের  ইনবক্স চলে জাও-!!🌚🤖");
}
};