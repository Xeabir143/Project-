module.exports = {
    config: {
        name: "🤔",
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
    if (event.body && event.body.toLowerCase() == "🤔") return message.reply(" 🤖Dear,💌 কি ভাবছেন সোনা। মেয়ে হইলে আমাকে প্রপস করে দেন। আর ছেলে হইলে তোমার বনের নম্বার দেও🤖");
}
};