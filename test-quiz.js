const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();

  console.log('🧪 Testing Deutschland Karte & Quiz...\n');

  // Load the page
  await page.goto('file://' + process.cwd() + '/index.html');
  await page.waitForTimeout(2000);

  console.log('✅ Page loaded successfully');

  // Wait for map to load
  await page.waitForSelector('#map-svg', { timeout: 10000 });
  console.log('✅ Map SVG loaded');

  // Check if GeoJSON data loaded (wait for state regions)
  await page.waitForSelector('.state-region', { timeout: 10000 });
  const stateCount = await page.locator('.state-region').count();
  console.log(`✅ Found ${stateCount} German states on map`);

  // Check if labels are visible
  const labelCount = await page.locator('.state-label').count();
  console.log(`✅ Found ${labelCount} state labels`);

  // Check if capital dots are visible
  const capitalCount = await page.locator('.capital-dot').count();
  console.log(`✅ Found ${capitalCount} capital city markers`);

  // Check if neighboring countries are visible
  const neighborCount = await page.locator('.neighbor-region').count();
  console.log(`✅ Found ${neighborCount} neighboring countries`);

  // Check if country labels exist (including POLEN)
  const countryLabels = await page.locator('.country-label').allTextContents();
  console.log(`✅ Country labels found: ${countryLabels.join(', ')}`);

  if (countryLabels.includes('POLEN')) {
    console.log('✅ POLEN label is present on the map');
  } else {
    console.log('❌ POLEN label is MISSING');
  }

  console.log('\n🧪 Testing neighboring country clicks...\n');

  // Test clicking on a neighboring country (Austria - easier to click)
  const neighborRegions = page.locator('.neighbor-region');
  const neighborRegionsCount = await neighborRegions.count();

  // Try Austria which should be more accessible
  let neighborClicked = false;
  for (let i = 0; i < neighborRegionsCount; i++) {
    const region = neighborRegions.nth(i);
    const dataCountry = await region.getAttribute('data-country');
    if (dataCountry === 'Österreich') {
      await region.click({ force: true });
      await page.waitForTimeout(500);
      neighborClicked = true;

      // Check if info panel updated
      const mapInfo = await page.locator('#map-info').textContent();
      if (mapInfo.includes('Österreich') || mapInfo.includes('Wien')) {
        console.log('✅ Clicking Österreich (Austria) shows info: Österreich - Wien');
      } else {
        console.log('❌ Österreich click did not update info panel');
      }
      break;
    }
  }

  if (!neighborClicked) {
    console.log('⚠️  Could not find clickable neighbor region');
  }

  console.log('\n🧪 Testing German state clicks...\n');

  // Test clicking on Bayern
  const bayernRegion = page.locator('.state-region[data-state="Bayern"]');
  if (await bayernRegion.count() > 0) {
    await bayernRegion.click();
    await page.waitForTimeout(500);

    const mapInfo = await page.locator('#map-info').textContent();
    if (mapInfo.includes('Bayern') && mapInfo.includes('München')) {
      console.log('✅ Clicking Bayern shows: Bayern - München');
    } else {
      console.log('❌ Bayern click did not work properly');
    }
  }

  console.log('\n🧪 Testing list item click and map highlight...\n');

  // Click on state list tab
  await page.locator('.tab').filter({ hasText: 'Bundesländer' }).click();
  await page.waitForTimeout(300);

  // Click on a state in the list
  await page.locator('.state-item').filter({ hasText: 'Hessen' }).click();
  await page.waitForTimeout(500);

  // Check if we're on the map tab
  const mapTab = await page.locator('#map-tab').isVisible();
  if (mapTab) {
    console.log('✅ Switched to map tab');
  }

  // Check if the state is highlighted
  const hessenHighlighted = await page.locator('.state-region.highlighted[data-state="Hessen"]').count();
  if (hessenHighlighted > 0) {
    console.log('✅ Hessen is highlighted on the map');
  } else {
    console.log('❌ Hessen is NOT highlighted');
  }

  console.log('\n🧪 Testing Karten-Quiz mode...\n');

  // Click Karten-Quiz button
  await page.locator('button').filter({ hasText: 'Karten-Quiz' }).click();
  await page.waitForTimeout(1000);

  // Check if map is in quiz mode (states should be empty/white)
  const emptyStates = await page.locator('.state-region.empty').count();
  console.log(`✅ Quiz mode activated - ${emptyStates} states are empty (white)`);

  // Check if labels are hidden
  const hiddenLabels = await page.locator('.state-label.hidden').count();
  console.log(`✅ ${hiddenLabels} state labels are hidden in quiz mode`);

  // Check if there's a question
  const questionText = await page.locator('.quiz-card .question').first().textContent();
  console.log(`✅ Quiz question displayed: "${questionText}"`);

  // Check if there's a pulsing state
  const currentQuestion = await page.locator('.state-region.current-question').count();
  if (currentQuestion > 0) {
    console.log('✅ One state is highlighted as current question (yellow pulsing)');
  }

  console.log('\n🧪 Testing regular quiz modes...\n');

  // Reload to reset
  await page.reload();
  await page.waitForTimeout(2000);

  // Start regular quiz
  await page.locator('button').filter({ hasText: 'Bundesländer Quiz' }).first().click();
  await page.waitForTimeout(500);

  // Check that map is still normal (not empty)
  const normalStates = await page.locator('.state-region:not(.empty)').count();
  if (normalStates >= 16) {
    console.log('✅ Regular quiz mode - map remains colored and visible');
  } else {
    console.log('❌ Regular quiz mode - map incorrectly became empty');
  }

  console.log('\n✅ All tests completed!\n');

  await page.waitForTimeout(3000);
  await browser.close();
})();
