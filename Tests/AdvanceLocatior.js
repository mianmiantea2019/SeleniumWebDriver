const webdriver = require('selenium-webdriver');
const chromeCapabilities = webdriver.Capabilities.chrome();
chromeCapabilities.set('chromeOptions', {args: ['--headless', '--disable-gpu','--no-sandbox','--disable-dev-shm-usage']});


var driver;
const timeOut = 15000;


describe('Locators', function() {

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
     
      driver.get("file://" + __dirname + "/../../site/locators.html");
    });
  
    // test cases

    var By = webdriver.By;
  
    it("Chain findElement to find child element", function() {
      driver.findElement(By.id("div2")).findElement(By.name("same")).click();
    });
  
  
    it("Generic findElement with JSON", function() {    
      driver.findElement({name: 'comment'}).sendKeys("JSON")
      driver.findElement({css: "#div1 > input[type='checkbox']"}).click();
      driver.findElement({className: "btn-primary"}).click();  // Submit button
    });
  
  
    it("Find multiple elements", function() {
      var checkboxElems = driver.findElements(By.xpath("//div[@id='container']//input[@type='checkbox']"))
      driver.sleep(500)
      // 2
      driver.findElements(By.xpath("//div[@id='container']//input[@type='checkbox']")).then(function(checkboxElems) {
        checkboxElems[1].click();
      });
      
    });
    
  
  });