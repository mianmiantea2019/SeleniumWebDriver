const webdriver = require('selenium-webdriver');
const chromeCapabilities = webdriver.Capabilities.chrome();
chromeCapabilities.set('chromeOptions', { args: ['--headless', '--disable-gpu', '--no-sandbox', '--disable-dev-shm-usage'] });
// chromeCapabilities.set('chromeOptions', { args: ['--disable-gpu', '--no-sandbox', '--disable-dev-shm-usage'] });



var driver;
const timeOut = 15000;

describe('Locators', function () {

  before(function () {
    this.timeout(timeOut);

    driver = new webdriver.Builder()
      .forBrowser('chrome')
      .withCapabilities(chromeCapabilities)
      .build();

  });

  after(function () {
    driver.quit();
  });

  beforeEach(function () {
    driver.get("file://" + __dirname + "/../../site/locators.html");
  });

  // test cases
  var By = webdriver.By;


  it("By ID", function () {
    driver.findElement(webdriver.By.id("submit_btn")).click();
  });

  it("By Name", function () {
    driver.findElement(By.name("comment")).sendKeys("Selenium Cool");
  });

  it("By Link Text", function () {
    driver.findElement(By.linkText("Cancel")).click();
  });

  it("By Partial Link Text", function () {
    // will click the "Cancel" link
    driver.findElement(By.partialLinkText("ance")).click();
  });

  it("By Class name", function () {
    driver.findElement(By.className("btn-primary")).click();  // Submit button
    driver.findElement(By.className("btn")).click();          // Cancel link

  });

  it("By CSS", function () {
    driver.findElement(By.css("#div2 > input[type='checkbox']")).click();
  });

  it("By tagName", function () {
    driver.findElement(By.tagName("body")).getText().then(function (the_page_text) {
      console.log(the_page_text)
    })
  });


});