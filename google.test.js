const { Builder, By } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

let driver;

beforeAll(async () => {
  driver = await new Builder().forBrowser('chrome').setChromeOptions(new chrome.Options()).build();
});

afterAll(async () => {
  await driver.quit();
});

test('Google homepage elements', async () => {
  await driver.get('https://www.google.com');

  const title = await driver.getTitle();
  expect(title).toBe('Google');

  const logo = await driver.findElement(By.xpath('//*[@alt="Google"]'));
  expect(logo).toBeDefined();

  const searchBox = await driver.findElement(By.name('q'));
  expect(searchBox).toBeDefined();

  const searchButton = await driver.findElement(By.name('btnK'));
  expect(searchButton).toBeDefined();

  const gmailLink = await driver.findElement(By.linkText('Gmail'));
  expect(gmailLink).toBeDefined();
});
