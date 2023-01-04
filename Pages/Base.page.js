class BasePage{
    constructor(page){
        this.page = page;
    }
    /**
     * Method to navigate to path passed
     */
    async navigate(){
        await this.page.goto(`https://test.seaplanner.com/`)
    }
}
module.exports = BasePage;