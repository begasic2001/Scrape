const scrapeCategory = require("./scrape");
const scrapeController = async (brow) =>{
    try {
        let url = "https://puolotrip.com/";
        let browser = await brow
        let categories = scrapeCategory(browser,url);

    } catch (error) {
        console.log('Loi o cao du lieu' + error);
    }
}

module.exports = 
  scrapeController
