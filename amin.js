module.exports = {
 config: {
 name: "Aminul",
 version: "1.0",
 author: "aesther",
 countDown: 5,
 role: 0,
 shortDescription: "no prefix",
 longDescription: "no prefix",
 category: "contacts admin",
 }, 
 onStart: async function(){}, 
 onChat: async function({ event, message, getLang }) {
 if (event.body && event.body.toLowerCase() === "aminul") {
 return message.reply({
 body: " Mention my boss for your courage🔖:\n  Editor\n\n🥰AMINUL-SORDAR🥰",
 attachment: await global.utils.getStreamFromURL("https://imgur.com/Ehfwt8t.mp4")
 });
 }
 }
}