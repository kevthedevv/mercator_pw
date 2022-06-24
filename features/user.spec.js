// Note:  this test is utilizing Germany vpn #776

const { test } = require('@playwright/test');
const userJSON     = require( './../data/data' );
const { CustomerDomesticAction } = require('../actions/customerDomestic.action.js');
const domesticUser = userJSON.users.customer.domesticCustomer;
const customerDomestic = new CustomerDomesticAction();

//npx playwright test --grep @grepit
test.describe('Domestic customer Own collection + Credit limit @C1710@', () => {
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

    test('When user click cart', async () => {
      await customerDomestic.goToCart(page)
    });  

    test('Then your cart page display', async () => {
      await customerDomestic.yourCartPageDisplay(page)
    });  

    test('When user select Own Collection and Credit Limit', async () => {
      await customerDomestic.selectMethod(deliveryType, paymentType, page)
    });  

    test('And user click continue on to the address details', async () => {
      await customerDomestic.clickContinue(page)
    });  

    test('Then invoice address page display', async () => {
      await customerDomestic.addressPageDisplay(page)
    });  

    test('And accept Terms & Condition and Consent', async () => {
      await customerDomestic.checkConsent(page)
    });  

    test('When user select Ill give it later', async () => {
      await customerDomestic.collectionLater(page)
    });  

    test('And user click summary and payment', async () => {
      await customerDomestic.summaryAndPayment(page)
    });  

    test('Then summary page display', async () => {
      await customerDomestic.summaryPageDisplay(page)
    });  

    test('When user click I order with an obligation to pay', async () => {
      await customerDomestic.clickOrderButton(page)
    });  

    test('And Thank you message display', async () => {
      await customerDomestic.thankYouDisplayMsg(page)
    }); 

    test('Then Payment and Collection type is correct', async () => {
      await customerDomestic.summaryMethod(deliveryType, paymentType, page)
    });  
});
  

test.describe('Domestic customer Own collection + Proforma @C1717@', () => {
  const paymentType = 'Proforma',
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

  test('When user click cart', async () => {
    await customerDomestic.goToCart(page)
  });  

  test('Then your cart page display', async () => {
    await customerDomestic.yourCartPageDisplay(page)
  });  

  test('When user select Own Collection and Proforma', async () => {
    await customerDomestic.selectMethod(deliveryType, paymentType, page)
  });  

  test('And user click continue on to the address details', async () => {
    await customerDomestic.clickContinue(page)
  });  

  test('Then invoice address page display', async () => {
    await customerDomestic.addressPageDisplay(page)
  });  

  test('And accept Terms & Condition and Consent', async () => {
    await customerDomestic.checkConsent(page)
  });  

  test('When user select Ill give it later', async () => {
    await customerDomestic.collectionLater(page)
  });  

  test('And user click summary and payment', async () => {
    await customerDomestic.summaryAndPayment(page)
  });  

  test('Then summary page display', async () => {
    await customerDomestic.summaryPageDisplay(page)
  });  

  test('When user click I order with an obligation to pay', async () => {
    await customerDomestic.clickOrderButton(page)
  });  

  test('And Thank you message display', async () => {
    await customerDomestic.thankYouDisplayMsg(page)
  }); 

  test('Then Payment and Collection type is correct', async () => {
    await customerDomestic.summaryMethod(deliveryType, paymentType, page)
  });  
});