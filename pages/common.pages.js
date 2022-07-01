const GVariables = require ('./../data/gvariables');
const commonEl = require ( '../elements/common.element' );
const { expect } = require('@playwright/test');
const userJSON     = require( './../data/data' );


class CommonPage {
  
    async goToPage(page) {
        await page.goto('/')
    }

    delay(time) {
        return new Promise(function(resolve) { 
            setTimeout(resolve, time)
        });
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
        this.isLoaderInvisible(page)
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
        this.isLoaderInvisible(page);
        await page.waitForTimeout(8000)
        const element = commonEl.addToCart();
        await page.locator(element).click();
        
    }

    async alertDialogDisplay() {
        const element = commonEl.alertDialogDisplay();
        await page.waitForSelector(element);
        await expect(page.locator(element)).toHaveCount(1)
    }

    async closeHelloBar() {
        const element = commonEl.helloBar();
        await page.locator(element).click();
    }

    async goToCart(page) {
        const element = commonEl.goToCart();
        await page.waitForSelector(element)
        await page.locator(element).click();
    }

    async checkPage(title, page) {
        this.isLoaderInvisible(page);
        const yourCart = commonEl.yourCart();
        const addressPage = commonEl.addessPage();
        const summary = commonEl.summaryPage();
        const dataYourCart = userJSON.language.english.yourCart;
        const dataAddressData = userJSON.language.english.addressData;
        const dataSummary = userJSON.language.english.summary;
  
        await page.waitForSelector(commonEl.progressTitle())

        switch(title) {
            case 'Your Cart':
                await page.waitForSelector(yourCart)
                await expect(page.locator(yourCart)).toHaveText(dataYourCart)
                break;
            case 'Address Data':
                await page.waitForSelector(addressPage);
                await expect(page.locator(addressPage)).toHaveText(dataAddressData)
                break;
            case 'Summary':
                await page.waitForSelector(summary);
                await expect(page.locator(summary)).toHaveText(dataSummary)
                break;
        }
    }

    async deliveryMethod(delivery, page) {
        this.isLoaderInvisible(page)
        const collection = commonEl.ownCollection();
        const courier = commonEl.courier();
        switch(delivery){
            case 'Own Collection':
                await page.locator(collection).click();
                break;
            case 'Courier':
                await page.locator(courier).click();
                break;
        }
    }

    async paymentMethod(payment, delivery, page) {
        this.isLoaderInvisible(page)
        const creditLimit = commonEl.creditLimit();
        const proforma = commonEl.proforma();
        const cashOnDelivery = commonEl.cashOnDelivery();
        const blueMediaCourier = commonEl.blueMediaCourier();
        const blueMediaCollect = commonEl.blueMediaCollect();

        switch (payment){
            case 'Credit Limit':
                await page.waitForSelector(creditLimit);
                await page.locator(creditLimit).click();
                break;
            case 'Proforma':
                await page.waitForSelector(proforma);
                await page.locator(proforma).click();
                break;
            case 'Cash On Delivery':
                await page.waitForSelector(cashOnDelivery);
                await page.locator(cashOnDelivery).click();
                break;
            case 'Blue Media':
                if(delivery === 'Courier'){
                    await page.waitForSelector(blueMediaCourier);
                    await page.locator(blueMediaCourier).click();
                }else{
                    await page.waitForSelector(blueMediaCollect);
                    await page.locator(blueMediaCollect).click();
                }
                break;       
        }
        this.isLoaderInvisible(page)
    }

    async clickContinue(page) {
        const element = commonEl.clickContinue();
        await page.locator(element).click();
        this.isLoaderInvisible(page);
    }

    async clickSummaryAndPayment(page) {
        this.isLoaderInvisible(page);
        const element = commonEl.clickSummaryAndPayment();
        await page.locator(element).click();
        this.isLoaderInvisible(page);
    }

    async collectionMethod(page, method) {
      
        const collectSelectDriver = commonEl.collectSelectDriver();
         const collectLater = commonEl.collectLater();
        switch (method) {
            case 'Provide Now':
                await page.locator(collectSelectDriver).click();
                break;
            case 'Provide Later':
                await page.locator(collectLater).click();
                break;
        }
    }

    async checkConsent(page){
        const termsAndCondition = commonEl.termsAndCondition();
        const consent = commonEl.consent();
        await page.locator(termsAndCondition).click();
        await page.locator(consent).click();
    }

    async clickOrderButton(page) {
        this.isLoaderInvisible(page);
        const element = commonEl.orderButton();
        await page.locator(element).click();
        this.isLoaderInvisible(page);
    }

    async thankYouDisplayMsg(){
        const dataThankYouMessage = userJSON.language.english.thankYouMessages;
        const element = commonEl.thankYouMessage();
        await expect(page.locator(element)).toHaveText(dataThankYouMessage)
    }

    async orderSummaryPayment(payment, page) {
        this.isLoaderInvisible(page)
        const dataCreditLimit = userJSON.language.english.creditLimit;
        const dataProforma = userJSON.language.english.proforma;
        const dataCashOnDelivery = userJSON.language.english.cashOnDelivery;
        const dataBlueMedia = userJSON.language.english.blueMedia;
        const paymentMethod = commonEl.paymentMethod();
        await page.waitForSelector(paymentMethod);
        switch (payment) {
            case 'Credit Limit':
                await expect(page.locator(paymentMethod)).toHaveText(dataCreditLimit)
                break;
            case 'Proforma':
                await expect(page.locator(paymentMethod)).toHaveText(dataProforma)
                break;
            case 'Cash On Delivery':
                await expect(page.locator(paymentMethod)).toHaveText(dataCashOnDelivery)
                break;
            case 'Blue Media':
                await expect(page.locator(paymentMethod)).toHaveText(dataBlueMedia)
                break;        
        }
    }

    async orderSummaryDelivery(delivery, page) {
        const orderSummaryDelivery = commonEl.orderSummaryDelivery();
        const dataOwnCollection = userJSON.language.english.ownCollection;
        const dataCourier = userJSON.language.english.courier;
        await page.waitForSelector(orderSummaryDelivery);       
        switch (delivery){
            case 'Own Collection':
                await expect(page.locator(orderSummaryDelivery)).toHaveText(dataOwnCollection)
                break;
            case 'Courier':
                await expect(page.locator(orderSummaryDelivery)).toHaveText(dataCourier)
                break;
        }
           
    }


}

module.exports = new CommonPage;

// await page.click('a:has-text("ideall cotton")');
// await page.click('button:has-text("Add to cart")');