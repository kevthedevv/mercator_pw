// Note:  this test is utilizing Germany vpn #776

const { test } = require('@playwright/test');
const userJSON     = require( './../data/data' );
const { CustomerDomesticAction } = require('../actions/customerDomestic.action.js');
const domesticUser = userJSON.users.customer.domesticCustomer;
const customerDomestic = new CustomerDomesticAction();

//npx playwright test --grep @grepit
test.describe.serial('Domestic customer Own collection + Credit limit @C1710@', () => {
    const paymentType = 'Credit Limit',
    deliveryType ='Own Collection';

    test.beforeAll(async ({ browser }) => {
        page = await browser.newPage();
      })
      
    test('Given user is on the login page and input credentials', async () => {
        await customerDomestic.login(page, domesticUser)
      });  

    test('Then home page and slider display', async () => {
      await customerDomestic.isSliderDisplay(page)
    });  

    test('When user click all products button', async () => {
      await customerDomestic.productTabClick(page)
    });  

    test('Then product catalog displays', async () => {
      await customerDomestic.productPageDisplay(page)
    });  

    test('When user click add to cart', async () => {
      await customerDomestic.productAddToCart(page)
    });  
    
    test('Then added to cart message will display', async () => {
      await customerDomestic.isAlertDisplay(page)
    });  

    // test('', async () => {
    //   await customerDomestic.productTabClick(page)
    // });  

    // test('', async () => {
    //   await customerDomestic.productTabClick(page)
    // });  

    // test('', async () => {
    //   await customerDomestic.productTabClick(page)
    // });  

    // test('', async () => {
    //   await customerDomestic.productTabClick(page)
    // });  

    // test('', async () => {
    //   await customerDomestic.productTabClick(page)
    // });  

    // test('', async () => {
    //   await customerDomestic.productTabClick(page)
    // });  
});
  