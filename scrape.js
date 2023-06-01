 const scrapeCategory =  (browser,url) =>{
    return new Promise(async (resolve, reject) => {
      try {
        let page = await browser.newPage();
        console.log(`Mo Tab Moi`);
        await page.goto(url);
        console.log(`Truy cap vao `+url);
        await page.waitForSelector(".page-template-default");
        console.log(`Web Da load xong !!!!`);

        let dataCategory = await page.$$eval(
          "#menu-primary-1 > li:nth-child(5) > .sub-menu > li",
          (els) => {
            dataCategory = els.map((el) => {
              return {
                category: el.querySelector("a").innerText,
              };
            });
            return dataCategory;
          }
        );
        console.log(dataCategory);

        await page.close()
        resolve();
      } catch (e) {
        reject(e);
      }
    });
 }
module.exports = scrapeCategory

