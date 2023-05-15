const webdriver = require('selenium-webdriver');
const chromeCapabilities = webdriver.Capabilities.chrome();
chromeCapabilities.set('chromeOptions', {args: ['--headless', '--disable-gpu','--no-sandbox','--disable-dev-shm-usage']});



var test = require('selenium-webdriver/testing');

var assert = require('assert');



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
  
    it("Click button by text", function() {
      driver.findElement(By.xpath("//button[contains(text(),'Choose Selenium')]")).click();
    });
  
  
    it("Click a form button by value", function() {
      driver.findElement(By.xpath("//input[@value='Space After ']")).click();
    });

     // Unique to Selenum
     it("Simulate submit by calling submit on a form input element", function() {
        text_field = driver.findElement(By.name("user"))
        text_field.submit
      });

    
  
  
  });
  