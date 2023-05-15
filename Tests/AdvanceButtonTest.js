const webdriver = require('selenium-webdriver');
const chromeCapabilities = webdriver.Capabilities.chrome();
chromeCapabilities.set('chromeOptions', {args: ['--headless', '--disable-gpu','--no-sandbox','--disable-dev-shm-usage']});


var driver;
const timeOut = 15000;


describe('Button', function() {

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
     
      driver.get("file://" + __dirname + "/../../site/button.html");
    });
  
    // test cases
    var By = webdriver.By;
  
    var By = webdriver.By;

    it("Click button by ID", function() {
      // <button id="choose_selenium_btn" class="nav" data-id="123" style="font-size: 14px;">Choose Selenium</button><
      driver.findElement(By.id("choose_selenium_btn")).click();
    });
  
  
    it("Click submit button by name", function() {
      // <input type="submit" name="submit_action" value="Submit">
      driver.findElement(By.name("submit_action")).click();
    });
  
   
  
    it("Click image button", function() {
      // <input type="image" src="images/button_go.gif">
      driver.findElement(By.xpath("//input[contains(@src, 'button_go.jpg')]")).click();
    });
  
    it("Click button with javascript", function() {
      the_btn = driver.findElement(By.id("searchBtn"));
      driver.executeScript("arguments[0].click();", the_btn);
    });
  
   
  
  });
  