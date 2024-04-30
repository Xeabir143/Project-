module.exports = {
    config: {
        name: "kmon aso",
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
    if (event.body && event.body.toLowerCase() == "kmon aso") return message.reply(" আল্লাহ রহমত এ ভালো আছি তা তুমি কেমন আঁছো 😍-!!🌚");
}
};