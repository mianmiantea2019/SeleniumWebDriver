const webdriver = require('selenium-webdriver');
const chromeCapabilities = webdriver.Capabilities.chrome();
chromeCapabilities.set('chromeOptions', {args: ['--headless', '--disable-gpu','--no-sandbox','--disable-dev-shm-usage']});


const assert = require('assert');



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
 


  //  Retrieve link other attributes
  

  it("Retrieve common link details", function() {    
    driver.findElement(By.linkText("Recommend Selenium")).getAttribute("href").then(function(the_href) {
      assert(the_href.contains("/site/index.html"))
    });
    driver.findElement(By.linkText("Recommend Selenium")).getAttribute("id").then(function(the_id) {
      assert.equal("recommend_selenium_link", the_id)
    });
    driver.findElement(By.id("recommend_selenium_link")).getText().then(function(the_elem_text){
      assert.equal("Recommend Selenium", the_elem_text)
    });    
    driver.findElement(By.id("recommend_selenium_link")).getTagName().then(function(the_tag_name) {
      assert.equal("a", the_tag_name)
    });        
  });

  it("Retrieve advanced link attributes", function() {

    driver.findElement(By.id("recommend_selenium_link")).getAttribute("style").then(function(the_style){
      assert.equal("font-size: 14px;", the_style)
    });
    
    // Please note using attribute_value("style") won't work
    driver.findElement(By.id("recommend_selenium_link")).getAttribute("data-id").then(function(the_data_id){
      assert.equal("123", the_data_id)
    });
  });


  it("Test links openning another window or tab", function() {
    var currentUrl = driver.getCurrentUrl();
    new_window_url = driver.findElement(By.linkText("Open new window")).getAttribute("href")
    driver.get(new_window_url)
    // ... testing on new site
    driver.findElement(By.name("name")).sendKeys("sometext")
    driver.get(currentUrl) // back
  });

});
