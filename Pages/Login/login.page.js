const BasePage = require("../Base.page");

class LoginPage extends BasePage {
    constructor(page) {
      super(page);
      this.input_usernametxt = page.locator("#UserName");
      this.input_passwordtxt = page.locator("#Password");
      this.button_logintxt = page.locator("input[type='submit']");
      this.button_dashboardicon = page.locator(".moduleIconSmall.icon_dashboard.mm-toggle");
    }    
    
    async fillUsername(username){
        await this.input_usernametxt.fill(username)
    }
    async fillPassword(password){
        await this.input_passwordtxt.fill(password)
    }   
    async clickLogin(){
        await this.button_logintxt.click();
    }
    async ClickDashboard(){
        await this.button_dashboardicon.click();
    }
    async login(username,password){
        await this.navigate();
        await this.fillUsername(username,{slowMo:5000});
        await this.fillPassword(password);
        await this.clickLogin();
        await this.page.waitForTimeout(5000);
    }
}

module.exports = { LoginPage };