const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();

  console.log('🧪 Testing neighbor country highlighting...\n');

  // Listen to console messages
  page.on('console', msg => console.log('Browser:', msg.text()));

  await page.goto('file://' + process.cwd() + '/index.html');
  await page.waitForTimeout(3000);

  // Check if loading message is present
  const loadingVisible = await page.locator('#loading').isVisible();
  console.log(`Loading indicator visible: ${loadingVisible}`);

  await page.waitForSelector('.neighbor-region', { timeout: 20000 });

  console.log('✅ Map loaded\n');

  // Test 1: Click on Austria
  console.log('Test 1: Click on Austria on map');
  const austriaRegion = page.locator('.neighbor-region[data-country="Österreich"]');
  await austriaRegion.click({ force: true });
  await page.waitForTimeout(500);

  let austriaStroke = await austriaRegion.evaluate(el => window.getComputedStyle(el).strokeWidth);
  console.log(`  Austria stroke width: ${austriaStroke}`);
  if (parseFloat(austriaStroke) > 2) {
    console.log('  ✅ Austria is highlighted (thick border)\n');
  } else {
    console.log('  ❌ Austria not properly highlighted\n');
  }

  // Test 2: Click on France - should un-highlight Austria
  console.log('Test 2: Click on France on map (should un-highlight Austria)');
  const franceRegion = page.locator('.neighbor-region[data-country="Frankreich"]');
  await franceRegion.click({ force: true });
  await page.waitForTimeout(500);

  austriaStroke = await austriaRegion.evaluate(el => window.getComputedStyle(el).strokeWidth);
  const franceStroke = await franceRegion.evaluate(el => window.getComputedStyle(el).strokeWidth);

  console.log(`  Austria stroke width: ${austriaStroke}`);
  console.log(`  France stroke width: ${franceStroke}`);

  if (parseFloat(austriaStroke) < 2 && parseFloat(franceStroke) > 2) {
    console.log('  ✅ Austria un-highlighted, France highlighted\n');
  } else {
    console.log('  ❌ Highlighting switch failed\n');
  }

  // Test 3: Click Polen from country list
  console.log('Test 3: Click Polen from Nachbarländer list');
  await page.locator('.tab').filter({ hasText: 'Nachbarländer' }).click();
  await page.waitForTimeout(300);
  await page.locator('.country-item').filter({ hasText: 'Polen' }).click();
  await page.waitForTimeout(500);

  const polenRegion = page.locator('.neighbor-region[data-country="Polen"]');
  const polenStroke = await polenRegion.evaluate(el => window.getComputedStyle(el).strokeWidth);

  console.log(`  Polen stroke width: ${polenStroke}`);

  if (parseFloat(polenStroke) > 2) {
    console.log('  ✅ Polen highlighted from list click');
  } else {
    console.log('  ❌ Polen not highlighted from list click');
  }

  // Check if we're on map tab
  const mapTabVisible = await page.locator('#map-tab').isVisible();
  if (mapTabVisible) {
    console.log('  ✅ Switched to map tab\n');
  } else {
    console.log('  ❌ Did not switch to map tab\n');
  }

  // Test 4: Click a German state - should un-highlight Polen
  console.log('Test 4: Click Bayern (should un-highlight Polen)');
  const bayernRegion = page.locator('.state-region[data-state="Bayern"]');
  await bayernRegion.click();
  await page.waitForTimeout(500);

  const polenStrokeAfter = await polenRegion.evaluate(el => window.getComputedStyle(el).strokeWidth);
  const bayernHighlighted = await bayernRegion.evaluate(el => el.classList.contains('highlighted'));

  console.log(`  Polen stroke width: ${polenStrokeAfter}`);
  console.log(`  Bayern highlighted: ${bayernHighlighted}`);

  if (parseFloat(polenStrokeAfter) < 2 && bayernHighlighted) {
    console.log('  ✅ Polen un-highlighted, Bayern highlighted\n');
  } else {
    console.log('  ❌ State/country highlight switch failed\n');
  }

  console.log('✅ All neighbor country highlighting tests completed!\n');

  await page.waitForTimeout(3000);
  await browser.close();
})();
