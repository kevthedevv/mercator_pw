const GVariables = require ('./../data/gvariables');
const commonEl = require ( '../elements/common.element' );
const { expect } = require('@playwright/test');
const userJSON     = require( './../data/data' );


class CommonPage {
  
    async goToPage(page) {
        await page.goto('https://dev.mercator.createit.dev')
    }

    async login( page, domesticUser) {
        await this.inputEmail( page, domesticUser.credentials.email );
        await this.inputPassword(page, domesticUser.credentials.password );
        await this.loginBtn(page);
    }
  
    async inputEmail( page, emailTextbox ) {
        const element = commonEl.emailTextbox()
        await page.fill(element, emailTextbox)
    }
 
    async inputPassword( page, password ) {
        const element = commonEl.passwordTextbox();
        await page.fill(element, password)
    }
    
    async loginBtn(page) {
        const element = commonEl.loginBtn();
        await page.evaluate((el) => document.querySelector(el).click(), element)
    
    }

    async isLoaderInvisible(page) {
        const element = commonEl.loaderSign();
        await page.locator(element).waitFor('hidden');
    }

    async isSliderVisible(page){
        const element = commonEl.homePageSlider()
        await expect(page.locator(element)).toHaveCount(1)
    }
    
    async getLanguage(page) {
        const element = commonEl.currentLanguage()
        const language = await page.waitForSelector(element)
        const value = await language.evaluate(el => el.textContent);
        
        switch(value) {
            case 'English' :
                GVariables.gLanguage = userJSON.language.english;
                break;
            case 'Polski' :
                GVariables.gLanguage = userJSON.language.polish;
                break;
        }
    }

    async acceptCookies(page) {

        if(!GVariables.gIsCookieAccepted){
            const element = commonEl.acceptCookiesBtn();
            GVariables.gIsCookieAccepted = true;
            await page.evaluate((el) => document.querySelector(el).click(), element)
        }
    }

    async productTabClick(page) {
        const element = commonEl.productTab();
        await page.evaluate((el) => document.querySelector(el).click(), element)
    }

    async pageTitleDisplay(page) {
        this.isLoaderInvisible(page)
        const element = commonEl.pageTitle();
        await page.waitForSelector(element);
        const catalog = userJSON.language.english.productCatalog;
        await expect(page.locator(element)).toHaveText(catalog)
    }

    async clickAddToCart(page) {
        await page.click('a:has-text("ideall cotton")');
        await page.click('button:has-text("Add to cart")');
    }

    async alertDialogDisplay() {
        const element = commonEl.alertDialogDisplay();
        await expect(page.locator(element)).toHaveCount(1)
    }

}

module.exports = new CommonPage;
