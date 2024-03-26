৳cmd install up.js const moment = require('moment-timezone');
moment.tz.setDefault('Asia/Dhaka');
const os = require('os');

module.exports = {
  config: {
    name: 'up',
    version: '1.0.0',
    author: 'Siam the frog>🐸',
    countDown: 0,
    role: 0,
    category: 'uptime',
    shortDescription: 'up ck bot', 
    longDescription: 'Bot uptime cheak',
    guide: {
      en: '{pn} ',
    },
  },
  
onStart: async function ({ message, event, usersData, threadsData }) {
     const uptime = process.uptime();
     const startTime = Date.now();
     const hours = Math.floor(uptime / 3600);
     const munites = Math.floor((uptime % 3600) / 60);
     const second = Math.floor(uptime % 60);
     
     const arif = `${hours} hours ${munites} munites ${second} second`;
     
     const url = await global.utils.getStreamFromURL("https://tinyurl.com/2c6fp9ar");
   
     const now = moment();
     const riley = now.format('DD-MMMM-Y/hh.mm.ss A');
     
     const veli = `${Math.round(os.totalmem() / (1024 * 1024 * 1024))} GB`;
     const putra = await usersData.getAll();
     const loufi = await threadsData.getAll(); 
     const luxion = `${os.type()} ${os.release()}`;
     const rizky = `${os.cpus()[0].model} (${os.cpus().length} cores)`
     
     const endTime = Date.now();
     const raffa = endTime - startTime;
     
     const frog = `Bot ping: ${raffa}\n━━━━━━━━━━━\nUptime: ${arif}\n━━━━━━━━━━━\n\nDate: ${riley}\n━━━━━━━━━━`

     message.reply("Wait boss🐸", event.messageID);
     message.reply({ body: frog, attachment: url }, event.threadID);
  },
};
