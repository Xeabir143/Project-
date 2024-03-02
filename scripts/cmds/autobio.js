const cron = require("node-cron");
const moment = require("moment");
const prefix = "/"; // Your bot's prefix
const botName = "ADVANCE PROJECT";
const ownerName = "🪐 AMINUL SORDAR";

module.exports = {
  config: {
    name: "autobio",
    author:"Ron Zedric Laurente",// Convert By Goatbot Zed
     role: 2,
    shortDescription: " ",
    longDescription: "Autobio",
    category: "owner",
    guide: {
      en: "{pn}autobio"
    }
  },


onChat: async function ({ api, event, globalModel , globalData, userModel }) {
  var { threadID, messageID } = event;

  cron.schedule('0 * * * *', () => {
    var currentHour = moment().format('HH');
    var bioMessage;
    var currentTime = moment().format('MMM Do, h:mm:ss a');

    if(currentHour >= 8 && currentHour <= 11){
      bioMessage = `Good morning! I'm ${botName}, currently active. Owner: ${ownerName}.`;
    }else if(currentHour >= 12 && currentHour <= 18){
      bioMessage = `Good afternoon! I'm ${botName}, currently active. Owner: ${ownerName}.`;
    }else{
      bioMessage = `Hello! I'm ${botName}, currently active. Owner: ${ownerName}.`;
    }
    
    api.changeBio(bioMessage, (err) => {
      if (err) return console.log("ERR: "+err);
    });
  }, {
    scheduled: true,
    timezone: "Asia/Manila"
  });
},

    onStart: async function ({ api, event, globalData, args, globalModel, userModel, usersData, commandName, role }) {
    const zed = (`Hey I'm ${botName}\nCurrently Active » 🟢\nOwner »  ${ownerName}.`);
         
      api.changeBio(`Hey I'm ${botName}\nCurrently Active » 🟢\nOwner »  ${ownerName}.`, (e) => {
      if(e) api.sendMessage("An error occurred" + e, event.threadID); return api.sendMessage(`✅ | 𝖠𝗎𝗍𝗈𝗆𝖺𝗍𝖨𝖼𝖺𝗅𝗅𝗒 𝖢𝗁𝖺𝗇𝗀𝖾 𝖳𝗁𝖾 𝖡𝗈𝗍 𝖲𝗍𝖺𝗍𝗎𝗌 𝖳𝗈 » \n${zed}`, event.threadID, event.messgaeID)
    }
    )
  },
};