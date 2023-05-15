const webdriver = require('selenium-webdriver');
const chromeCapabilities = webdriver.Capabilities.chrome();
chromeCapabilities.set('chromeOptions', {args: ['--headless', '--disable-gpu','--no-sandbox','--disable-dev-shm-usage']});



var driver;
const timeOut = 15000;


String.prototype.contains = function(it) { return this.indexOf(it) != -1; };

describe('Hyperlink', function() {

  before(function() {
    this.timeout(timeOut);
      driver = new webdriver.Builder()
      .forBrowser('chrome')
      .withCapabilities(chromeCapabilities)
      .build();
  });
  
  after(function() {
    driver.quit();
  });
 
  beforeEach(function() {
    // runs before each test in this block
    driver.get("file://" + __dirname + "/../../site/link.html");
  });

  // test cases

  var By = webdriver.By;

  it("Click link by text", function() {
    driver.findElement(By.linkText("Recommend Selenium")).click();
  });

  it("Click link by ID", function() {
    driver.findElement(By.id("recommend_selenium_link")).click();
  });

  it("Click link by partial text", function() {
    driver.findElement(By.partialLinkText("Recommend Selenium")).click();
  });

  it("Click link by xpath", function() {
    driver.findElement(By.xpath("//p/a[text()='Recommend Selenium']")).click();
    driver.get("file://" + __dirname + "/../../site/link.html");
  });

  it("Click link by xpath using function", function() {
    
    driver.findElement(By.xpath('//div[contains(text(), "Second")]/a[text()="Click here"]')).click();
    
  });



});
