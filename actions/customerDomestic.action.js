const commonPage = require( '../pages/common.pages' );

class CustomerDomesticAction {

    async initMercator(page) {
        await commonPage.goToPage(page);
    }

    async login( page, domesticUser ) {
        await this.initMercator(page);
        await commonPage.login(page, domesticUser );
    }
    async isSliderDisplay(page) {
        await commonPage.isLoaderInvisible(page);
        await commonPage.isSliderVisible(page);
        await commonPage.getLanguage(page);
        await commonPage.acceptCookies(page);
    }

    async productTabClick(page) {
        await commonPage.productTabClick(page);
    }

    async productPageDisplay(page) {
        await commonPage.pageTitleDisplay(page)
    }

    async productAddToCart(page) {
        await commonPage.clickAddToCart(page)
    }

    async isAlertDisplay(page) {
        await commonPage.alertDialogDisplay(page);
    }

    async goToCart(page) {
        await page.waitForTimeout(4000)
        await commonPage.goToCart(page);
    }

    async yourCartPageDisplay(page) {
        const title = 'Your Cart'
        await commonPage.checkPage(title, page);
    }

    async selectMethod(delivery, payment, page){
        await commonPage.deliveryMethod(delivery, page)
        await commonPage.paymentMethod(payment, delivery, page)
    }

    async clickContinue(page) {
        await commonPage.clickContinue(page);
    }

    async summaryAndPayment(page) {
        await commonPage.clickSummaryAndPayment(page);
    }

    async addressPageDisplay(page) {
        const title = 'Address Data'
        await commonPage.checkPage(title, page)
    }

    async collectionLater(page) {
        const type = 'Provide Later';
        await commonPage.collectionMethod(page, type)
    }

    async checkConsent(page) {
        await commonPage.checkConsent(page);
    }

    async summaryPageDisplay(page) {
        const title = "Summary"
        await commonPage.checkPage(title, page)
    }

    async clickOrderButton(page) {
        await commonPage.clickOrderButton(page);
    }

    async thankYouDisplayMsg(page) {
        await commonPage.thankYouDisplayMsg(page)
    }

    async summaryMethod(delivery, payment, page) {
        await commonPage.orderSummaryPayment(payment, page);
        await commonPage.orderSummaryDelivery(delivery, page);
    }
}

module.exports = {CustomerDomesticAction};
