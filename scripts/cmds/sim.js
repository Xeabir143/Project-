const axios = require("axios");
module.exports = {
	config: {
		name: 'bot',
		version: '1.2',
		author: 'aminul',
		countDown: 0,
		role: 0,
		shortDescription: 'Simsimi ChatBot by Simsimi.fun',
		longDescription: {
			en: 'Chat with simsimi'
		},
		category: 'bot',
		guide: {
			en: '   {pn} <word>: chat with simsimi'
				+ '\  Example:{pn} hi'
		}
	},

	langs: {
		en: {
			chatting: 'Already Chatting with sim...',
			error: ' i love You Babe🌸'
		}
	},

	onStart: async function ({ args, message, event, getLang }) {
		if (args[0]) {
			const yourMessage = args.join(" ");
			try {
				const responseMessage = await getMessage(yourMessage);
				return message.reply(`${responseMessage}`);
			}
			catch (err) {
				console.log(err)
				return message.reply(getLang("error"));
			}
		}
	},

	onChat: async ({ args, message, threadsData, event, isUserCallCommand, getLang }) => {
		if (!isUserCallCommand) {
			return;
		}
		if (args.length > 1) {
			try {
				const langCode = await threadsData.get(event.threadID, "settings.lang") || global.GoatBot.config.language;
				const responseMessage = await getMessage(args.join(" "), langCode);
				return message.reply(`${responseMessage}`);
			}
			catch (err) {
				return message.reply(getLang("error"));
			}
		}
	}
};

async function getMessage(yourMessage, langCode) {
	try {
		const res = await axios.get(`https://simsimi.fun/api/v2/?mode=talk&lang=en&message=`);
		if (!res.data.success) {
			throw new Error('API returned a non-successful message');
		}
		return res.data.success;
	} catch (err) {
		console.error('Error while getting a message:', err);
		throw err;
	}
      }