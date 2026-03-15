const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();

  console.log('🧪 Opening app and checking console errors...\n');

  // Listen to all console messages
  page.on('console', msg => {
    const type = msg.type();
    const text = msg.text();

    if (type === 'error') {
      console.log('❌ ERROR:', text);
    } else if (type === 'warning') {
      console.log('⚠️  WARNING:', text);
    } else if (type === 'log') {
      console.log('📝 LOG:', text);
    }
  });

  // Listen to page errors
  page.on('pageerror', error => {
    console.log('❌ PAGE ERROR:', error.message);
  });

  await page.goto('file://' + process.cwd() + '/index.html');

  console.log('✅ Page loaded\n');
  console.log('Waiting 5 seconds to see if map loads...\n');

  await page.waitForTimeout(5000);

  // Check if loading indicator is still visible
  const loadingVisible = await page.locator('#loading').isVisible();
  console.log(`\n📊 Loading indicator still visible: ${loadingVisible}`);

  if (loadingVisible) {
    const loadingText = await page.locator('#loading').textContent();
    console.log(`   Text: "${loadingText}"`);
  }

  // Check if any map elements loaded
  const statesCount = await page.locator('.state-region').count();
  const neighborsCount = await page.locator('.neighbor-region').count();

  console.log(`\n📊 State regions found: ${statesCount}`);
  console.log(`📊 Neighbor regions found: ${neighborsCount}`);

  console.log('\n⏳ Keeping browser open for 10 seconds to inspect...\n');
  await page.waitForTimeout(10000);

  await browser.close();
})();
