const puppeteer = require('puppeteer');
const express = require("express");
const bodyParser = require("body-parser");
const domtoimage = require("dom-to-image");
 






const app = express();

app.use(bodyParser.urlencoded({
    extended:true
}));

app.use("/", express.static("public"));

  app.post('/submit', (req, res) => {
    const content = req.body.content;
    const styles = req.body.styles;
    const file_name = req.body.file_name;
    // Do something with the content and styles (e.g. generate an image)
    const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    defaultViewport: {width: 500, height: 500}
    
});
  toprint = `<style> body{ position: absolute;
    left: -8px;
    top: -8px;
    overflow: hidden;} #recived { ${styles} }</style> <div id='recived'>${content}</div>`
  const page = await browser.newPage();
  await page.setContent(toprint);
  await page.screenshot({ path: `${file_name}.png`});
  await browser.close();
  res.send("Zapisano" + toprint)
})();

  });
  



app.listen(3000);