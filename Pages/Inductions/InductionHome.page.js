const BasePage = require("../Base.page");

class InductionPage extends BasePage{ 

    constructor(page){
      super(page);
      this.button_inductionicon = page.locator('//*[@id="mainMenu"]/ul/li[2]/div[1]/a/span');
      this.button_inductionpage = page.locator('text=Induction Home');
      this.button_inductionhome = page.locator("//a[contains(text(),'Induction Home')]");
      this.button_awaitingreview = page.locator('//html/body/div[3]/div[1]/div[1]/div/div[2]/ul/li/h4/a');
      this.button_reviewapplication = page.locator('#dvCurrentTitle');
      this.button_exportbuttonpdf = page.locator('//*[@id="customPdfExport"]/svg/path');
      }
   
    
    async clickInduction(){
        await this.button_inductionicon.click();
    }
    async clickInductionPage(){
        await this.clickInduction();
        await this.button_inductionpage.click();
        await this.button_inductionhome.click();
        await this.button_awaitingreview.click({slowMo:5000});
        await expect(this.button_reviewapplication).toBeVisible();
        await this.button_exportbuttonpdf.click();
    }
 
   }
   module.exports={InductionPage};