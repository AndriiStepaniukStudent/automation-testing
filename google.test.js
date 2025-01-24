const { Builder, By, until } = require('selenium-webdriver');

let driver;

beforeAll(async () => {
  driver = await new Builder().forBrowser('chrome').build();
});

afterAll(async () => {
  await driver.quit();
});

test('Google homepage is accessible', async () => {
  await driver.get('https://www.google.com');
  const title = await driver.getTitle();
  expect(title).toBe('Google');
});

test('Search input field is present', async () => {
  await driver.get('https://www.google.com');
  const searchField = await driver.findElement(By.name('q'));
  expect(searchField).not.toBeNull();
});

test('Search button is present', async () => {
  await driver.get('https://www.google.com');
  const searchButton = await driver.findElement(By.name('btnK'));
  expect(searchButton).not.toBeNull();
});

test('Incorrect URL does not load Google', async () => {
  await driver.get('https://www.google.com/incorrect-page');
  const title = await driver.getTitle();
  expect(title).not.toBe('Google');
});

test('Search functionality works', async () => {
  await driver.get('https://www.google.com');
  const searchField = await driver.findElement(By.name('q'));
  await searchField.sendKeys('Jest testing');
  await searchField.submit();
  await driver.wait(until.elementLocated(By.id('search')), 5000);
  const results = await driver.findElements(By.css('#search .g'));
  expect(results.length).toBeGreaterThan(0);
});

test('Element does not exist on page', async () => {
  await driver.get('https://www.google.com');
  const nonExistentElement = await driver.findElements(By.className('non-existent-class'));
  expect(nonExistentElement.length).toBe(0);
});
