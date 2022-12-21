class LoginPage {
    constructor(page) {
      this.page = page;
      this.input_usernametxt = this.page.locator("#UserName");
      this.input_passwordtxt = this.page.locator("#Password");
      this.button_logintxt = this.page.locator("input[type='submit']");
      this.button_dashboardicon = this.page.locator(".moduleIconSmall.icon_dashboard.mm-toggle");
    }    

    async navigate() {
        await this.page.goto('https://test.seaplanner.com/');
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
        await this.fillUsername(username);
        await this.fillPassword(password);
        await this.clickLogin();
        await this.ClickDashboard();
    }
}

module.exports = { LoginPage };