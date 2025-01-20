const { Builder, By } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

let driver;

beforeAll(async () => {
  driver = await new Builder().forBrowser('chrome').setChromeOptions(new chrome.Options()).build();
  await driver.manage().setTimeouts({ implicit: 5000 });
});

afterAll(async () => {
  await driver.quit();
});

test('Google homepage elements', async () => {
  await driver.get('https://uk.wikipedia.org/wiki/%D0%9A%D0%B8%D1%97%D0%B2');

  const logo = await driver.findElement(By.xpath('//*[text()="Герб Києва"]'));
  expect(logo).toBeDefined();

  const population = await driver.findElement(By.xpath('//*[@title="Населення"]'));
  expect(population).toBeDefined();

  const populationDensity = await driver.findElement(By.xpath("//*[@title='Густота населення']"));
  expect(populationDensity).toBeDefined();

  const landmarksList = await driver.findElements(By.xpath('//div[@id="bodyContent"]//ul[11]/li'));
  expect(landmarksList.length).toBeGreaterThan(20);
});