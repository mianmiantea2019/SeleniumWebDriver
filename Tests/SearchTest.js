const webdriver = require('selenium-webdriver');
const assert = require('assert');

const chromeCapabilities = webdriver.Capabilities.chrome();
chromeCapabilities.set('chromeOptions', {
  args: ['--headless', '--disable-gpu', '--no-sandbox', '--disable-dev-shm-usage']
});

var driver;
const timeOut = 15000;

describe('User Authentication', function () {
  before(function () {
    this.timeout(timeOut);
    driver = new webdriver.Builder()
      .forBrowser('chrome')
      .withCapabilities(chromeCapabilities)
      .build();
  });

  beforeEach(function () {
    this.timeout(timeOut);
    driver.get('http://travel.agileway.net');
  });

  after(function () {
    driver.quit();
  });

  it('Invalid user', function () {
    driver.findElement(webdriver.By.name('username')).sendKeys('agileway');
    driver.findElement(webdriver.By.name('password')).sendKeys('badpass');
    driver.findElement(webdriver.By.name('commit')).click();
  });

  it('User can login successfully', function () {
    driver.findElement(webdriver.By.name('username')).sendKeys('agileway');
    driver.findElement(webdriver.By.name('password')).sendKeys('testwise');
    driver.findElement(webdriver.By.name('commit')).click();
    driver.getTitle().then(function (the_title) {
      assert.equal('Agile Travel', the_title);
    });
  });
});
