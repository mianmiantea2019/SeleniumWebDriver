var webdriver = require('selenium-webdriver');
var assert = require('assert');

describe('User Authentication', function () {
  it('User can sign in', function () {
    var driver = new webdriver.Builder()
      .forBrowser('chrome')
      .build();
    driver.get('http://travel.agileway.net');
    driver.findElement(webdriver.By.name('username')).sendKeys('agileway');
    driver.findElement(webdriver.By.name('password')).sendKeys('testwise');
    driver.findElement(webdriver.By.name('commit')).click();
    driver.getTitle().then(function(the_title) {
      assert.equal('Agile Travel', the_title);
    });
    driver.quit();
  });
});