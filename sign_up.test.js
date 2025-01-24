const { Builder, By, until } = require('selenium-webdriver');

let driver;

const emailField = By.xpath('//*[@data-qa="login-email"]');
const passwordField = By.xpath('//*[@data-qa="login-password"]');
const loginButton = By.xpath('//*[@data-qa="login-button"]');
const usernameElement = By.xpath('//b');
const productNameField = By.css('.cart_description .product-name');
const productPriceField = By.css('.cart_total .price');
const quantityInputField = By.css('.cart_quantity_input');
const totalPriceField = By.id('total_price');
const searchQueryField = By.id('search_query_top');
const submitSearchButton = By.name('submit_search');

beforeEach(async () => {
  driver = await new Builder().forBrowser('chrome').build();
  await driver.manage().setTimeouts({ implicit: 10000 });
  await driver.get('https://automationexercise.com/login');
});

afterEach(async () => {
  await driver.quit();
});

test('User login with valid credentials', async () => {
  await driver.wait(until.titleContains('Login'));

  await driver.findElement(emailField).sendKeys('valid_email+2@example.com');
  await driver.findElement(passwordField).sendKeys('d67Sjay@RDkgv');
  await driver.findElement(loginButton).click();

  await driver.wait(until.titleIs('Automation Exercise'));
  const username = await driver.findElement(usernameElement).getText();
  expect(username).toBe('Andrii');
});

test('Sign in with empty email shows error', async () => {
  await driver.wait(until.titleContains('Login'));

  await driver.findElement(passwordField).sendKeys('d67Sjay@RDkgv');
  await driver.findElement(loginButton).click();

  await driver.wait(until.titleContains('Login'));
});

test('Sign in with empty password shows error', async () => {
  await driver.wait(until.titleContains('Login'));

  await driver.findElement(emailField).sendKeys('valid_email+2@example.com');
  await driver.findElement(loginButton).click();

  await driver.wait(until.titleContains('Login'));
});

test('Add product to cart and validate details', async () => {
  await driver.wait(until.titleContains('Login'));

  await driver.findElement(emailField).sendKeys('valid_email+2@example.com');
  await driver.findElement(passwordField).sendKeys('d67Sjay@RDkgv');
  await driver.findElement(loginButton).click();
  
  await driver.findElement(By.xpath('//*[@class="nav navbar-nav"]//*[contains(text(), "Products")]')).click();
  await driver.findElement(By.id('search_product')).sendKeys("Blue Top");
  await driver.findElement(By.xpath('//*[@class="choose"]')).click();
  await driver.findElement(By.xpath('//*[@class="btn btn-default cart"]')).click();
  await driver.findElement(By.xpath('//*[text()="Continue Shopping"]')).click();
});

test('Search for a product and validate result', async () => {
    await driver.wait(until.titleContains('Login'));

    await driver.findElement(emailField).sendKeys('valid_email+2@example.com');
    await driver.findElement(passwordField).sendKeys('d67Sjay@RDkgv');
    await driver.findElement(loginButton).click();
    
    await driver.findElement(By.xpath('//*[@class="nav navbar-nav"]//*[contains(text(), "Products")]')).click();
    await driver.findElement(By.id('search_product')).sendKeys("Blue Top");
    await driver.findElement(By.xpath('//*[@class="choose"]')).click();

  const productName = await driver.findElement(By.xpath('//*[@class="product-information"]//h2')).getText();
  expect(productName).toContain('Blue Top');
});
