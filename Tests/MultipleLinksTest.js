const webdriver = require('selenium-webdriver');
const chromeCapabilities = webdriver.Capabilities.chrome();
chromeCapabilities.set('chromeOptions', {args: ['--headless', '--disable-gpu','--no-sandbox','--disable-dev-shm-usage']});


var assert = require('assert');



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

  
  it("Click second link with exact text using array index", function() {
    driver.findElements(By.linkText("Same link")).then(function(the_same_links){
	    assert.equal(2, the_same_links.length);
      the_same_links[1].click(); // second link    	
    });
    driver.getPageSource().then(function(the_page_source) {
      assert(the_page_source.contains("second link page"));
    });
  });
  
  it("Click second link with exact text using CSS locator", function() {
    driver.findElement(By.css("p  > a:nth-child(3)")).click();
    driver.getPageSource().then(function(the_page_source) {
      assert(the_page_source.contains("second link page"));
    });
  });

 


  //  Verify links

  it("Verify link present", function() {
    assert(driver.findElement(By.linkText("Recommend Selenium")).isDisplayed())
    assert(driver.findElement(By.id("recommend_selenium_link")).isDisplayed())  
  });
  
  it("Verify link displayed or hidden", function() {
    assert(driver.findElement(By.id("recommend_selenium_link")).isDisplayed())

    driver.findElement(By.linkText("Hide")).click();
    driver.sleep(500);
	

    driver.sleep(100)

    driver.findElement(By.linkText("Show")).click().then(function() {
    	driver.sleep(500)
    	assert(driver.findElement(By.linkText("Recommend Selenium")).isDisplayed())
    })

  });

});
