const fs = require('fs');
const puppeteer = require('puppeteer');
const path = require('path');

const dataPath = path.join(__dirname, '../vercel_api.json');
const data = require(dataPath);

const imagesDir = path.join(__dirname, '../images');
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir);
}

(async () => {
  console.log('Starting puppeteer...');
  const browser = await puppeteer.launch({ headless: 'new' });
  let updated = 0;

  for (const item of data) {
    if (!item['이미지']) {
      const url = item['출처'];
      console.log(`Taking screenshot for ${url}...`);
      const page = await browser.newPage();
      try {
        await page.goto(url, { waitUntil: 'networkidle2', timeout: 30000 });
        const imgPath = `images/${item.id}.png`;
        const absoluteImgPath = path.join(__dirname, '..', imgPath);
        
        await page.setViewport({ width: 1280, height: 800 });
        // take a screenshot of the top of the page
        await page.screenshot({ path: absoluteImgPath });
        
        item['이미지'] = `./${imgPath}`;
        updated++;
        console.log(`Saved screenshot to ${imgPath}`);
      } catch (err) {
        console.error(`Error taking screenshot for ${url}:`, err.message);
      } finally {
        await page.close();
      }
    }
  }

  await browser.close();

  if (updated > 0) {
    fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
    console.log(`Updated ${updated} items in vercel_api.json`);
    
    // Now update cases-data.js
    const casesDataPath = path.join(__dirname, '../src/cases-data.js');
    let casesCode = fs.readFileSync(casesDataPath, 'utf8');
    
    // Replace the content inside let STATIC_CASES = [...]
    const newStaticCases = `let STATIC_CASES = ${JSON.stringify(data, null, 2)};`;
    casesCode = casesCode.replace(/let STATIC_CASES = \[[\s\S]*?\];/, newStaticCases);
    fs.writeFileSync(casesDataPath, casesCode);
    console.log('Updated src/cases-data.js');
  } else {
    console.log('No items needed an image.');
  }
})();
