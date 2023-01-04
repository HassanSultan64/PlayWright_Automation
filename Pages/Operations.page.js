const BasePage = require("./Base.page");
const path = require('path');
require('playwright');

class OperationsPage extends BasePage{

     constructor(page){
        super(page);
        this.Button_OperationsIcon = page.locator("//body/div[@id='mainMenu']/ul[1]/li[4]/div[1]/a[1]/span[1]");
        this.Button_Map = page.locator("//*[@id='mainMenu']/ul/li[4]/div[2]/div/ul/li[1]/a");      
        }

        async ClickOnOperationsIcon(){
            await this.Button_OperationsIcon.click();
        }
        async ClickOnMap(){
            await this.ClickOnOperationsIcon();
            await this.Button_Map.click();
            await this.page.waitForTimeout(10000);
            await this.page.screenshot({
                path: path.join(__dirname, 'screenshots', 'screenshot.png')
              });
        }


}
module.exports={OperationsPage};