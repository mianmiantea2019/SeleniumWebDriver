const webdriver = require('selenium-webdriver');
const chromeCapabilities = webdriver.Capabilities.chrome();
chromeCapabilities.set('chromeOptions', {args: ['--headless', '--disable-gpu','--no-sandbox','--disable-dev-shm-usage']});

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
  
    it("Verify link displayed or hidden", function() {
      assert(driver.findElement(By.id("choose_selenium_btn")).isDisplayed());
      driver.findElement(By.linkText("Hide")).click().then(function(){ 
          driver.findElement(By.id("choose_selenium_btn")).isDisplayed().then(function(displayed){
         assert(!displayed);
          });
      });
      driver.findElement(By.linkText("Show")).click().then(function(){
          driver.findElement(By.id("choose_selenium_btn")).isDisplayed().then(function(displayed){
          assert(displayed);
          });
      })    
    });
    
  
    it("Verify link enabled or disabled", function() {
      assert(driver.findElement(By.id("choose_selenium_btn")).isEnabled());	
      driver.findElement(By.linkText("Disable")).click().then(function(){
        driver.findElement(By.id("choose_selenium_btn")).isEnabled().then(function(enabled){
          assert(!enabled);
        });
      })	
      driver.findElement(By.linkText("Enable")).click().then(function(){ 
        driver.findElement(By.id("choose_selenium_btn")).isEnabled().then(function(enabled){
          assert(enabled);
        });
      });
    });
  
  });
  