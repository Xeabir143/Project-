const axios = require("axios");
const fs = "FABqBBRaTOJILtFsMkpLVWSG6AN6C/svRwNmAAAEgAAACBa1z/iRNjtgKARs0CwGgYGZlCboYMfVuuZ52BVbl6WMzqmakcwtFUv1I65xIyUxQAT42pFAcoPbf3KPzWmwj7oXwVDPncEB81J7bZ5EKoby6WZn0qzaZ/TsEOys5tnSbxVf606QrdL8zFrXjJUSyv/3evv1/t5WykPFaX1M/ojkab9EtARYr+iQ8+OMhiKRtVU6n6R24vQqqolDmmdPDdLwU35qqYAkLoNaPbhAxyhLObrgMwQyABvNCTehF/PlGCd5TPYGh/tjJS1wyCQvyx7qotMAaoMau7u3gmmiYPcF+XCuoRTUiWGcbYVq3nNhVPw2PgU5WMqjQfDla9uvWhklZsLFYlr4yYxRBNZ6GABMaOSioOTTyfZIh8W4abGpwES6ly9j1IsoGj2Pyj/vwiEEax9YE8fLb57a+LCJG4JZKKVw6IHO9rCHo6JrcW7gfxXlmNOoFdqoE5rmHl8RzCq8Z8ygzsoZTwkCsagZjEWymWPn8Pw1Y8W0sLR9IGktcngQBo+PBRCBBDwBSre01U8fox4qID01Cwm531MTxPwnXxnls1Hl1vp3RO6bQc54qyTzJp9Ta/CTH7k4hcR0EglHrBpuGSv/3Of5TtdgHDA8nd/u0g1YZYLf7RCj7jBRPkgFoM7NhnjtNQ5r9OCjoZd71U6XT5T7AsrpP3cdH2L1J/O5vK8WtyjRBrvBy43Q9s0cPq2t1idYftjQrMhCpd6ijjprF4UKK0USiFRFdy54wXRoeDDx/wDKBDMQwq2yLUCisRbSgPeZf6eKfHgp/e3xRD5b0W8eG2Hstdmm6jFllYiDoZ11svGl16I1VyTiSc8vggp7AmxtcMJ3ywJUhi7RIwJynYrElBBlP5In0KNZh/KMHPblrpR5urvPcAM8LPczz0hP3Mhb82exPBt2OIOFO4XuJ9l+QiPXY8fQgo8pIh03KGp849iRuCSaQe4IptvbqEpo1QspTi7vGyHkGOQgdfyvnD3UoSv8ANJ5BiqCShXAXMjQxtW6rok0PeKA48X8cMAbQqSkPF7gtNeAJwYUVxG2xQUyJ2ksc9EeQMquK0AZz4N+xc0WxE7k7uAeQ2nkxvy0+3q68ZZgOkGdqhwSeZ+fmb1pFjwaewzKz30/+0UWwrvMsAbCAt01XBt+akrqdskTSXzBO03EtX4Pk67bJurS9ABjhGw81HmOgh/rUmmvYZd/LEb9WGtXc4Zg/9kb2ScOURc5TonhuLHRIqNZpTh89IgDm4StqeVqsf8rflcQDCRh9fTXLZjgTsxdPU6EDmIG2zx3k++PGxAxaQUMxCJxE55FTmsGOMw8B0Wyt5S7RREwfNBFlK1dbHdDfPJY3tnFOaC9nFB2QvmxyOLYiIrRwSQPZe+PACQD/x7v2xWjU7VMC+UwnEoJFUkaOV91/ZtxLuXwOJfQL9Iv9hfswRQATomW4w1O6EmpQinTD0CSqzZun9w=";
const _U = "1P7Ofjp7Srw8jiSAQXyZoUrL2Y22E-1n6omBH1trM-8mcN56WbcQT-VwPCP_agjZmAwfWqS0G8qJ7gFVLrhoJhPa6naPDT0tLmKLVK0LQZyuS1_WwYOg5n1QpXlRLhbsVV6iChM65fFaBuZHVK2OLU-D1Q9f725x7jeiqcaZXMBHg0c-icq4xFX8N8ueVu4lcZz3wZjjUqQ4NlMIWxvV7Ow";
module.exports = {
  config: {
    name: "dalle",
    aliases: ["dalle3"],
    version: "1.0.2",
    author: "Samir Œ ",
    role: 0,
    countDown: 5,
    shortDescription: {
      en: "dalle"
    },
    longDescription: {
      en: ""
    },
    category: "dalle",
    guide: {
      en: "{prefix}dalle <search query> -<number of images>"
    }
  },
 
  onStart: async function ({ api, event, args }) {
 
const uid = event.senderID
    const permission = [`${uid}`];
    if (!permission.includes(event.senderID)) {
      api.sendMessage(
        "You don't have enough permission to use this command. Only admin can do it.",
        event.threadID,
        event.messageID
      );
      return;
    }
 
    const keySearch = args.join(" ");
    const indexOfHyphen = keySearch.indexOf('-');
    const keySearchs = indexOfHyphen !== -1 ? keySearch.substr(0, indexOfHyphen).trim() : keySearch.trim();
    const numberSearch = parseInt(keySearch.split("-").pop().trim()) || 4;
 
    try {
      const res = await axios.get(`https://api-dalle-gen.onrender.com/dalle3?auth_cookie_U=${_U}&auth_cookie_KievRPSSecAuth=${KievRPSSecAuth}&prompt=${encodeURIComponent(keySearchs)}`);
      const data = res.data.results.images;
 
      if (!data || data.length === 0) {
        api.sendMessage("No images found for the provided query.", event.threadID, event.messageID);
        return;
      }
 
      const imgData = [];
      for (let i = 0; i < Math.min(numberSearch, data.length); i++) {
        const imgResponse = await axios.get(data[i].url, { responseType: 'arraybuffer' });
        const imgPath = path.join(__dirname, 'cache', `${i + 1}.jpg`);
        await fs.outputFile(imgPath, imgResponse.data);
        imgData.push(fs.createReadStream(imgPath));
      }
 
      await api.sendMessage({
        attachment: imgData,
        body: `Here's your generated image`
      }, event.threadID, event.messageID);
 
    } catch (error) {
      console.error(error);
      api.sendMessage("cookie of the command. Is expired", event.threadID, event.messageID);
    } finally {
      await fs.remove(path.join(__dirname, 'cache'));
    }
  }
};
