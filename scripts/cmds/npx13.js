module.exports = {
    config: {
        name: "name",
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
    if (event.body && event.body.toLowerCase() == "name") return message.reply("🤖𝐃𝐞𝐚𝐫, 𝐌𝐲 𝐍𝐚𝐦𝐞 𝐈𝐬 𝐀𝐦𝐢𝐧𝐮𝐥 𝐒𝐨𝐫𝐝𝐚𝐫.𝐀𝐧𝐝 𝐘𝐨𝐮𝐫 𝐍𝐚𝐦𝐞 ?🤖");
}
};