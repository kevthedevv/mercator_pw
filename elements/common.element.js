class CommonEl {

    loginLink() {
         return '.d-md-inline-flex[href$="/login.html"]'
    }

    emailTextbox() {
        return '#email'
     
    }

    passwordTextbox() {
        return '#password'
       
    }
    
    homePageSlider() {
        return '#main-slider'
    }

    loginBtn() {
        return '.px-4.text-sm.bg-blue-500.text-white.font-semibold.rounded-md'
    }

    loaderSign() {
        return '.flex.justify-center.items-center.p-7.rounded-xl.bg-white.shadow-xl'
    }
   
    currentLanguage() {
        return '.flex.items-center.gap-3';
    }

    acceptCookiesBtn() {
        return '.flex.items-center.gap-5.flex-auto';
    }

    productTab() {
        return '[href="/products"]:first-child';
    }

    pageTitle() {
        return '.my-7.capitalize.ng-star-inserted';
    }

    scrollToAddToCart() {
        return '.bg-blue-500.text-white.font-semibold.rounded-md';
    }

    addToCart() {
        return '.bg-blue-500.text-white.font-semibold.rounded-md >> nth=3';
    }

    alertDialogDisplay() {
        return '[role="alertdialog"]';
    }

    goToCart() {
        return '[href="/checkout"] >> nth=1'
    }

    scrollToDeliveryElement() {
        return '.w-full.p-10.bg-white.mb-5.ng-star-inserted'
    }

    progressTitle() {
        return '.rounded-full.transition.duration-500.ease-in-out'
    }

    yourCartPageDisplay() {

    }

    ownCollection() {
        return '[for="delivery_0"]'
    }

    courier() {
        return '[for="delivery_1"]'
    }

    yourCart() {
        return '.text-xs.font-medium.uppercase.text-blue-500';
    }

    addessPage() {
        return '.text-xs.font-medium.uppercase.text-blue-500 >> nth=1'
    }

    summaryPage() {
        return '.text-xs.font-medium.uppercase.text-blue-500 >> nth=2'
    }

    helloBar() {
        return '.icon-close';
    }

    creditLimit(){
        return '[for="payment_0"]';
    }

    proforma(){
        return '[for="payment_1"]';
    }

    cashOnDelivery(){
        return '[for="payment_2"]';
    }

    blueMediaCourier(){
        return '[for="payment_3"]';
    }

    blueMediaCollect(){
        return '[for="payment_2"]'
    }

    clickContinue() { 
        return '.flex.gap-3 .text-sm.bg-blue-500.text-white.font-semibold.rounded-md >> nth=1'
    }

    clickSummaryAndPayment() { 
        return '.flex.gap-3 .text-sm.bg-blue-500.text-white.font-semibold.rounded-md'
    }

    collectSelectDriver() {
        return '[for="selectingDriver_choose"]';
    }

    collectLater() {
        return '[for="selectingDriver_later"]';
    }

    termsAndCondition() {
        return '[type="checkbox"] >> nth=0'
    }

    consent() {
        return '[type="checkbox"] >> nth=1'
    }

    orderButton() {
        return '.py-4.px-4.text-sm.bg-blue-500.text-white.font-semibold.rounded-md';
    }

    thankYouMessage() {
        return '.flex.items-center.text-xl.gap-2.border-b.border-gray-300.pb-5.mb-5';
    }

    paymentMethod() {
        return '.flex.flex-col.gap-2.ng-star-inserted .text-gray-700';
    }

    orderSummaryDelivery() {
        return '.flex.flex-col.gap-2.ng-star-inserted .text-gray-600 >> nth=0'
    }

}

module.exports = new CommonEl;
 