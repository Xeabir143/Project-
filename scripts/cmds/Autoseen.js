 module.exports = {
  config: {
    name: "autoseen",
    version: "1.0",
    author: "Samir Œ",
    countDown: 5,
    role: 0,
    shortDescription: "sarcasm",
    longDescription: "Utility",
    category: "seen",
  },
  onStart: async function(){}, 
  onChat: async function({
      api,
      event,
      message,
      getLang,
      args,
  }) {
      if (!this.lastSeenTime || Date.now() - this.lastSeenTime >= 2) {
          api.markAsReadAll(() => {});
          this.lastSeenTime = Date.now();
      }
  },
};
