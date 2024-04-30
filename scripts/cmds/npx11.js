module.exports = {
    config: {
        name: "hmm",
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
    if (event.body && event.body.toLowerCase() == "hmm") return message.reply("🤖Dear,💌 কি হুম হুম কর। তোমার মামাতো বোনের নম্বর দেও..!🥰");
}
};