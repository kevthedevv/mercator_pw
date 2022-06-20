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
        // return '.bg-blue-500.text-white.font-semibold.rounded-md:nth-of-type(3)';\
        return ('.bg-blue-500.text-white.font-semibold.rounded-md');
    }

    alertDialogDisplay() {
        return '[role="alertdialog"]';
    }
}

module.exports = new CommonEl;
 