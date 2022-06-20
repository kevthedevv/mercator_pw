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
        await commonPage.isLoaderInvisible(page);
        await commonPage.productTabClick(page);
    }

    async productPageDisplay(page) {
        await commonPage.isLoaderInvisible(page);
        await commonPage.pageTitleDisplay(page)
    }

    async productAddToCart(page) {
        await commonPage.isLoaderInvisible(page);
        await commonPage.clickAddToCart(page)
    }

    async isAlertDisplay(page) {
        await commonPage.alertDialogDisplay(page);
    }

}

module.exports = {CustomerDomesticAction};
